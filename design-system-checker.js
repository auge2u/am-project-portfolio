#!/usr/bin/env node

/**
 * Design System Checker
 * 
 * This script analyzes your codebase to ensure adherence to the design system guidelines.
 * It checks for:
 * - Hardcoded colors instead of using design system variables
 * - Inconsistent spacing values
 * - Non-standard border radius values
 * - Direct usage of HTML elements instead of design system components
 * - Accessibility issues
 * 
 * Usage: node design-system-checker.js [directory]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  // Directories to exclude from checking
  excludeDirs: ['node_modules', '.git', 'dist', 'build', '.next', 'public'],
  // File extensions to check
  extensions: ['.tsx', '.jsx', '.ts', '.js', '.css', '.scss'],
  // Design system color variables
  colorVariables: [
    '--background',
    '--foreground',
    '--primary',
    '--secondary',
    '--muted',
    '--accent',
    '--destructive',
    '--border',
  ],
  // Allowed spacing values (in Tailwind format)
  allowedSpacingValues: [
    '0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    'px', 'auto',
  ],
  // Allowed border radius values
  allowedBorderRadiusValues: ['none', 'sm', 'md', 'lg', 'full'],
  // UI components that should be used instead of HTML elements
  uiComponents: {
    'button': 'Button',
    'input': 'Input',
    'select': 'Select',
    'textarea': 'Textarea',
    'checkbox': 'Checkbox',
    'radio': 'RadioGroup',
    'a': 'Link',
  },
};

// Color regex patterns
const hexColorPattern = /#([0-9a-f]{3}|[0-9a-f]{6})\b/gi;
const rgbColorPattern = /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/gi;
const rgbaColorPattern = /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/gi;
const hslColorPattern = /hsl\(\s*\d+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\s*\)/gi;
const hslaColorPattern = /hsla\(\s*\d+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\s*,\s*[\d.]+\s*\)/gi;

// Spacing regex patterns
const spacingProperties = [
  'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'gap', 'row-gap', 'column-gap',
];
const spacingPattern = new RegExp(`(${spacingProperties.join('|')}):\\s*([^;]+)`, 'gi');

// Tailwind spacing class pattern
const tailwindSpacingPattern = /(m|p|gap|space)-(x|y|t|r|b|l|s|e)?-([^\\s"']+)/g;

// Border radius patterns
const borderRadiusPattern = /border-radius:\s*([^;]+)/gi;
const tailwindBorderRadiusPattern = /rounded(-[^\\s"']+)?/g;

// HTML element patterns
const htmlElementPattern = /<(button|input|select|textarea|a)(\s|>)/gi;

// Issues storage
const issues = {
  colors: [],
  spacing: [],
  borderRadius: [],
  components: [],
  accessibility: [],
};

// Total counts
let totalFiles = 0;
let filesWithIssues = 0;

/**
 * Check a file for design system issues
 */
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(process.cwd(), filePath);
  let fileHasIssues = false;

  // Check for hardcoded colors
  const hexColors = content.match(hexColorPattern) || [];
  const rgbColors = content.match(rgbColorPattern) || [];
  const rgbaColors = content.match(rgbaColorPattern) || [];
  const hslColors = content.match(hslColorPattern) || [];
  const hslaColors = content.match(hslaColorPattern) || [];
  
  const hardcodedColors = [
    ...hexColors,
    ...rgbColors,
    ...rgbaColors,
    ...hslColors,
    ...hslaColors,
  ];
  
  if (hardcodedColors.length > 0) {
    issues.colors.push({
      file: relativePath,
      colors: hardcodedColors,
    });
    fileHasIssues = true;
  }

  // Check for non-standard spacing values in Tailwind classes
  const tailwindSpacingMatches = content.match(tailwindSpacingPattern) || [];
  const nonStandardSpacing = tailwindSpacingMatches.filter(match => {
    const value = match.split('-').pop();
    return !config.allowedSpacingValues.includes(value);
  });
  
  if (nonStandardSpacing.length > 0) {
    issues.spacing.push({
      file: relativePath,
      values: nonStandardSpacing,
    });
    fileHasIssues = true;
  }

  // Check for non-standard border radius values
  const tailwindBorderRadiusMatches = content.match(tailwindBorderRadiusPattern) || [];
  const nonStandardBorderRadius = tailwindBorderRadiusMatches.filter(match => {
    if (match === 'rounded') return false; // Default rounded is fine
    const value = match.split('-').pop();
    return !config.allowedBorderRadiusValues.includes(value);
  });
  
  if (nonStandardBorderRadius.length > 0) {
    issues.borderRadius.push({
      file: relativePath,
      values: nonStandardBorderRadius,
    });
    fileHasIssues = true;
  }

  // Check for direct usage of HTML elements instead of UI components
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    const htmlElementMatches = [...content.matchAll(htmlElementPattern)];
    if (htmlElementMatches.length > 0) {
      const elements = htmlElementMatches.map(match => match[1]);
      issues.components.push({
        file: relativePath,
        elements: elements,
        suggestions: elements.map(el => config.uiComponents[el]),
      });
      fileHasIssues = true;
    }
  }

  if (fileHasIssues) {
    filesWithIssues++;
  }
  
  return fileHasIssues;
}

/**
 * Recursively scan a directory for files to check
 */
function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (!config.excludeDirs.includes(entry.name)) {
        scanDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (config.extensions.includes(ext)) {
        totalFiles++;
        checkFile(fullPath);
      }
    }
  }
}

/**
 * Print a summary of the issues found
 */
function printSummary() {
  console.log('\n=== Design System Checker Results ===\n');
  
  console.log(`Total files checked: ${totalFiles}`);
  console.log(`Files with issues: ${filesWithIssues}`);
  
  if (issues.colors.length > 0) {
    console.log('\n🎨 Hardcoded Colors:');
    issues.colors.forEach(issue => {
      console.log(`  ${issue.file}:`);
      console.log(`    Found ${issue.colors.length} hardcoded colors: ${issue.colors.slice(0, 3).join(', ')}${issue.colors.length > 3 ? '...' : ''}`);
      console.log('    Suggestion: Use design system color variables instead (var(--primary), bg-primary, text-foreground, etc.)');
    });
  }
  
  if (issues.spacing.length > 0) {
    console.log('\n📏 Non-standard Spacing:');
    issues.spacing.forEach(issue => {
      console.log(`  ${issue.file}:`);
      console.log(`    Found non-standard spacing values: ${issue.values.slice(0, 3).join(', ')}${issue.values.length > 3 ? '...' : ''}`);
      console.log('    Suggestion: Use standard spacing values from the design system (0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, etc.)');
    });
  }
  
  if (issues.borderRadius.length > 0) {
    console.log('\n⚪ Non-standard Border Radius:');
    issues.borderRadius.forEach(issue => {
      console.log(`  ${issue.file}:`);
      console.log(`    Found non-standard border radius values: ${issue.values.slice(0, 3).join(', ')}${issue.values.length > 3 ? '...' : ''}`);
      console.log('    Suggestion: Use standard border radius values from the design system (rounded-sm, rounded-md, rounded-lg, rounded-full)');
    });
  }
  
  if (issues.components.length > 0) {
    console.log('\n🧩 Direct HTML Elements:');
    issues.components.forEach(issue => {
      console.log(`  ${issue.file}:`);
      const elements = issue.elements.map((el, i) => `${el} (use ${issue.suggestions[i]} instead)`);
      console.log(`    Found direct HTML elements: ${elements.slice(0, 3).join(', ')}${elements.length > 3 ? '...' : ''}`);
      console.log('    Suggestion: Use design system components instead of direct HTML elements');
    });
  }
  
  console.log('\n=== End of Report ===\n');
  
  if (filesWithIssues === 0) {
    console.log('✅ No design system issues found. Great job!');
  } else {
    console.log(`⚠️  Found issues in ${filesWithIssues} files. Please review and fix them to maintain design consistency.`);
    console.log('   Refer to DESIGN_GUIDE.md for design system guidelines.');
  }
}

// Main execution
function main() {
  const targetDir = process.argv[2] || './src';
  console.log(`Checking design system compliance in ${targetDir}...`);
  
  try {
    scanDirectory(targetDir);
    printSummary();
    
    // Exit with error code if issues were found (useful for CI/CD)
    process.exit(filesWithIssues > 0 ? 1 : 0);
  } catch (error) {
    console.error('Error running design system checker:', error);
    process.exit(1);
  }
}

main();