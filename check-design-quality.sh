#!/bin/bash

# Design System Quality Check Script
# This script runs all the quality checks to ensure adherence to the design system

echo "🔍 Running Design System Quality Checks..."
echo "==========================================="

# Check if files are formatted correctly
echo -e "\n📝 Checking code formatting..."
npm run check-format
FORMAT_EXIT_CODE=$?

if [ $FORMAT_EXIT_CODE -eq 0 ]; then
  echo "✅ Code formatting looks good!"
else
  echo "❌ Code formatting issues found. Run 'npm run format' to fix."
fi

# Run ESLint
echo -e "\n🧹 Running ESLint..."
npm run lint
ESLINT_EXIT_CODE=$?

if [ $ESLINT_EXIT_CODE -eq 0 ]; then
  echo "✅ ESLint checks passed!"
else
  echo "❌ ESLint issues found. Run 'npm run lint:fix' to fix."
fi

# Run Stylelint
echo -e "\n🎨 Running Stylelint..."
npm run lint:style
STYLELINT_EXIT_CODE=$?

if [ $STYLELINT_EXIT_CODE -eq 0 ]; then
  echo "✅ Stylelint checks passed!"
else
  echo "❌ Stylelint issues found. Run 'npm run lint:style:fix' to fix."
fi

# Run TypeScript type checking
echo -e "\n📋 Running TypeScript type checking..."
npm run check-types
TS_EXIT_CODE=$?

if [ $TS_EXIT_CODE -eq 0 ]; then
  echo "✅ TypeScript type checking passed!"
else
  echo "❌ TypeScript issues found. Please fix the type errors."
fi

# Run design system checker
echo -e "\n🔍 Running Design System Checker..."
node design-system-checker.js ./src
DESIGN_SYSTEM_EXIT_CODE=$?

if [ $DESIGN_SYSTEM_EXIT_CODE -eq 0 ]; then
  echo "✅ Design System checks passed!"
else
  echo "❌ Design System issues found. Please review and fix them."
fi

# Calculate overall exit code
OVERALL_EXIT_CODE=$(($FORMAT_EXIT_CODE + $ESLINT_EXIT_CODE + $STYLELINT_EXIT_CODE + $TS_EXIT_CODE + $DESIGN_SYSTEM_EXIT_CODE))

echo -e "\n==========================================="
if [ $OVERALL_EXIT_CODE -eq 0 ]; then
  echo "✅ All quality checks passed! Your code adheres to the design system guidelines."
else
  echo "❌ Some quality checks failed. Please fix the issues before committing."
fi

echo -e "\nRefer to DESIGN_GUIDE.md and DESIGN_SYSTEM_README.md for guidance."
exit $OVERALL_EXIT_CODE