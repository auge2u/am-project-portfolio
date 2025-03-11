# Design System Tools & Guidelines

This document provides instructions on how to use the design system tools and follow the design guidelines for the portfolio project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Design Guide](#design-guide)
3. [Tools & Scripts](#tools--scripts)
4. [Linting & Quality Checks](#linting--quality-checks)
5. [VS Code Integration](#vs-code-integration)
6. [Best Practices](#best-practices)

## Getting Started

To ensure your development environment is properly set up to follow the design system:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install UI components:
   ```bash
   # Make the script executable
   chmod +x install-ui-components.sh
   
   # Run the script
   ./install-ui-components.sh
   ```

3. Set up pre-commit hooks:
   ```bash
   npm run prepare
   ```

## Design Guide

The comprehensive design guide is available in [DESIGN_GUIDE.md](./DESIGN_GUIDE.md). This document outlines:

- Color system
- Typography
- Spacing
- Border radius
- Component guidelines
- Responsive design
- Interaction design
- Accessibility guidelines
- Implementation best practices

**Always refer to this guide when implementing new features or making changes to existing ones.**

## Tools & Scripts

### Design System Component

We've included a `DesignSystem.tsx` component that serves as a living documentation of the design system. You can use this component to:

- View all available design elements in one place
- Test how components look with different props and states
- Ensure your implementation matches the design system

To view the design system component:

1. Import it in your application:
   ```tsx
   import DesignSystem from './components/DesignSystem';
   ```

2. Render it in your application (e.g., on a dedicated route):
   ```tsx
   <Route path="/design-system" element={<DesignSystem />} />
   ```

### Design System Checker

The `design-system-checker.js` script analyzes your codebase to ensure adherence to the design system guidelines. It checks for:

- Hardcoded colors instead of using design system variables
- Inconsistent spacing values
- Non-standard border radius values
- Direct usage of HTML elements instead of design system components

To run the checker:

```bash
# Make the script executable
chmod +x design-system-checker.js

# Check the entire src directory
node design-system-checker.js ./src

# Check a specific directory or file
node design-system-checker.js ./src/components
```

## Linting & Quality Checks

We've set up several linting tools to help enforce the design system:

### ESLint

ESLint is configured to enforce React best practices and accessibility guidelines. It includes the `eslint-plugin-tailwindcss` plugin to ensure proper Tailwind CSS usage.

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

### Stylelint

Stylelint is configured to enforce CSS best practices and Tailwind CSS usage.

```bash
# Run Stylelint
npm run lint:style

# Fix Stylelint issues
npm run lint:style:fix
```

### Prettier

Prettier is configured to ensure consistent code formatting.

```bash
# Format code
npm run format

# Check if code is formatted
npm run check-format
```

### Pre-commit Hooks

Pre-commit hooks are set up using Husky and lint-staged to automatically run linting and formatting checks before each commit.

## VS Code Integration

We've included VS Code settings to help with editor integration:

- ESLint and Stylelint extensions are configured to show errors and warnings in the editor
- Prettier is set as the default formatter
- Format on save is enabled
- Tailwind CSS IntelliSense is configured for better autocomplete

Install the recommended extensions:

- ESLint
- Stylelint
- Prettier
- Tailwind CSS IntelliSense

## Best Practices

### Colors

- Always use design system color variables:
  ```tsx
  // ❌ Bad
  <div className="bg-[#3b82f6] text-white">Button</div>
  
  // ✅ Good
  <div className="bg-primary text-primary-foreground">Button</div>
  ```

### Typography

- Use the typography classes defined in the design system:
  ```tsx
  // ❌ Bad
  <h1 className="text-3xl font-bold">Title</h1>
  
  // ✅ Good
  <h1 className="text-2xl font-bold">Title</h1>
  ```

### Spacing

- Use consistent spacing values:
  ```tsx
  // ❌ Bad
  <div className="p-[13px] gap-[22px]">Content</div>
  
  // ✅ Good
  <div className="p-3 gap-6">Content</div>
  ```

### Components

- Use design system components instead of HTML elements:
  ```tsx
  // ❌ Bad
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
  
  // ✅ Good
  <Button>Click me</Button>
  ```

### Class Name Composition

- Use the `cn()` utility for combining class names:
  ```tsx
  import { cn } from "@/lib/utils";
  
  // ✅ Good
  <div className={cn(
    "base-styles",
    variant === "primary" && "primary-styles",
    className
  )}>
  ```

### Responsive Design

- Design for mobile first, then enhance for larger screens:
  ```tsx
  // ✅ Good
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  ```

### Accessibility

- Ensure all interactive elements are keyboard accessible
- Use proper ARIA attributes when necessary
- Ensure sufficient color contrast
- Provide alt text for images

## Conclusion

Following these guidelines and using the provided tools will help maintain a consistent design system throughout the project. If you have any questions or suggestions, please refer to the [DESIGN_GUIDE.md](./DESIGN_GUIDE.md) or reach out to the team.