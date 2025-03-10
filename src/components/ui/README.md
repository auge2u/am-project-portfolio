# UI Components

This directory contains reusable UI components from shadcn/ui. These components are used throughout the application to provide a consistent look and feel.

## Required UI Components

To fully implement the portfolio application, you need to add the following shadcn/ui components:

1. `button.tsx` - For various button actions
2. `card.tsx` - For project cards
3. `checkbox.tsx` - For filter checkboxes
4. `dialog.tsx` - For detailed project view
5. `dropdown-menu.tsx` - For theme toggle and sorting options
6. `input.tsx` - For search and other input fields
7. `label.tsx` - For form labels
8. `progress.tsx` - For complexity and impact meters
9. `scroll-area.tsx` - For scrollable content
10. `select.tsx` - For dropdown selections
11. `separator.tsx` - For visual separation
12. `slider.tsx` - For range filters
13. `tabs.tsx` - For organization tabs and detail views
14. `toast.tsx` - For notifications
15. `toaster.tsx` - For notification container
16. `tooltip.tsx` - For additional information on hover

## Implementation Guide

You can add these components by installing shadcn/ui and using their CLI:

```bash
# Install shadcn/ui CLI
npm install -D @shadcn/ui

# Initialize shadcn/ui
npx shadcn-ui init

# Add components
npx shadcn-ui add button
npx shadcn-ui add card
# Add other components similarly
```

Alternatively, you can manually copy the component code from the [shadcn/ui website](https://ui.shadcn.com/docs/components) and adapt it to your needs.

## Component Customization

Each component can be customized by modifying the classes and variants. For example, to customize the button component, you can modify the `button.tsx` file to add new variants or change the default styling.

## Theme Customization

The global theme is defined in `tailwind.config.js` and `index.css`. You can customize the colors, spacing, and other properties to match your desired design.

## Usage Example

```tsx
import { Button } from './ui/button';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';

// Using components in your application
function Example() {
  return (
    <Card>
      <CardHeader>Title</CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>
        <Button>Click me</Button>
      </CardFooter>
    </Card>
  );
}
```
