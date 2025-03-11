# Portfolio Website Design Guide

## Table of Contents

1. [Design System](#1-design-system)
2. [Component Guidelines](#2-component-guidelines)
3. [Responsive Design](#3-responsive-design)
4. [Interaction Design](#4-interaction-design)
5. [Accessibility Guidelines](#5-accessibility-guidelines)
6. [Implementation Best Practices](#6-implementation-best-practices)
7. [Quality Assurance](#7-quality-assurance)
8. [Code Examples](#8-code-examples)

## 1. Design System

### 1.1 Color System

The website uses a sophisticated color system with CSS variables that support both light and dark modes:

```css
/* Light Mode Colors */
--background: 0 0% 100%;         /* White background */
--foreground: 222.2 84% 4.9%;    /* Dark text */
--primary: 221.2 83.2% 53.3%;    /* Blue primary */
--secondary: 210 40% 96.1%;      /* Light blue secondary */
--muted: 210 40% 96.1%;          /* Light blue muted */
--accent: 210 40% 96.1%;         /* Light blue accent */
--destructive: 0 84.2% 60.2%;    /* Red destructive */
--border: 214.3 31.8% 91.4%;     /* Light gray border */

/* Dark Mode Colors */
--background: 222.2 84% 4.9%;    /* Dark background */
--foreground: 210 40% 98%;       /* Light text */
--primary: 217.2 91.2% 59.8%;    /* Brighter blue primary */
--secondary: 217.2 32.6% 17.5%;  /* Dark blue secondary */
--muted: 217.2 32.6% 17.5%;      /* Dark blue muted */
--accent: 217.2 32.6% 17.5%;     /* Dark blue accent */
--destructive: 0 62.8% 30.6%;    /* Darker red destructive */
--border: 217.2 32.6% 17.5%;     /* Dark gray border */
```

**Design Principle**: Always use these semantic color variables rather than hardcoded colors to ensure theme consistency.

### 1.2 Typography

The website uses Tailwind's default typography system with utility classes:

| Element | Class | Usage |
|---------|-------|-------|
| Page titles | `text-2xl font-bold` | Main page headings |
| Section headings | `text-xl font-semibold` | Section titles |
| Card titles | `text-lg font-semibold` | Component headings |
| Body text | `text-base` | Regular content |
| Secondary text | `text-sm text-muted-foreground` | Supporting information |

**Design Principle**: Maintain a consistent type hierarchy across the application.

### 1.3 Spacing

The website uses Tailwind's spacing system:

| Element | Class | Size |
|---------|-------|------|
| Container padding | `container padding-2rem` | 32px |
| Standard spacing | `gap-4` | 16px |
| Smaller spacing | `gap-2` | 8px |
| Larger spacing | `gap-6` | 24px |

**Design Principle**: Maintain consistent spacing throughout the application to create visual rhythm.

### 1.4 Border Radius

The website uses a consistent border radius system:

```css
--radius: 0.5rem; /* 8px */
```

| Element | Class | Size |
|---------|-------|------|
| Large radius | `rounded-lg` | var(--radius) |
| Medium radius | `rounded-md` | calc(var(--radius) - 2px) |
| Small radius | `rounded-sm` | calc(var(--radius) - 4px) |

**Design Principle**: Use appropriate border radius for different UI elements to maintain visual consistency.

## 2. Component Guidelines

### 2.1 UI Components

The application uses shadcn/ui components for a consistent look and feel. These components should be implemented and customized as needed:

#### Buttons

```tsx
// Primary button
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Click me</Button>

// Outline button
<Button variant="outline">Click me</Button>

// Ghost button
<Button variant="ghost">Click me</Button>

// Icon button
<Button variant="outline" size="icon">
  <Icon />
</Button>
```

#### Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>Project description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Project details */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>
```

#### Dialogs

```tsx
<Dialog>
  <DialogTrigger>View Details</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Project Title</DialogTitle>
      <DialogDescription>Project description</DialogDescription>
    </DialogHeader>
    {/* Project details */}
  </DialogContent>
</Dialog>
```

#### Form Elements

- Always pair inputs with labels for accessibility
- Use consistent styling for all form elements

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>
```

### 2.2 Layout Components

#### Header

```tsx
<header className="border-b">
  <div className="container flex items-center justify-between h-16">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">A</div>
      <h1 className="text-xl font-semibold">Portfolio</h1>
    </div>
    <div className="flex items-center gap-4">
      <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
        Link
      </a>
      <ModeToggle />
    </div>
  </div>
</header>
```

#### Main Content

```tsx
<main>
  <div className="container py-8">
    {/* Page content */}
  </div>
</main>
```

#### Footer

```tsx
<footer className="border-t py-6 mt-12">
  <div className="container">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Company. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          About
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Contact
        </a>
      </div>
    </div>
  </div>
</footer>
```

### 2.3 Portfolio-Specific Components

#### Project Card

- Consistent display of project information
- Visual indicators for complexity and business impact
- Technology tags with appropriate icons
- Clear call-to-action for viewing details

#### Filter System

- Organization tabs for primary filtering
- Sidebar with additional filter options
- Clear visual feedback for active filters

#### Search and Sort

- Prominent search input
- Dropdown for sorting options
- Clear visual feedback for search results

## 3. Responsive Design

### 3.1 Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm` | 640px | Small devices |
| `md` | 768px | Medium devices |
| `lg` | 1024px | Large devices |
| `xl` | 1280px | Extra large devices |
| `2xl` | 1400px | Extra extra large devices |

**Design Principle**: Design for mobile first, then enhance for larger screens.

### 3.2 Layout Adjustments

#### Header

- Stack elements vertically on mobile
- Horizontal layout on larger screens

#### Project Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Project cards */}
</div>
```

#### Filters

- Collapsible on mobile
- Persistent sidebar on desktop

```tsx
<div className="hidden md:block w-64 shrink-0">
  {/* Filters */}
</div>
<div className="md:hidden">
  <Button onClick={() => setShowFilters(!showFilters)}>
    Filters
  </Button>
  {showFilters && (
    <div className="mt-4">
      {/* Filters */}
    </div>
  )}
</div>
```

## 4. Interaction Design

### 4.1 Hover States

- Buttons: Slight darkening of background color
- Cards: Subtle elevation effect (shadow increase)
- Links: Color change from `text-muted-foreground` to `text-foreground`

### 4.2 Focus States

- All interactive elements should have visible focus states
- Use the default focus ring: `ring-2 ring-ring ring-offset-2`

### 4.3 Animations

- Use subtle animations for state changes
- Leverage Tailwind's animation utilities:
  - `animate-accordion-down`
  - `animate-accordion-up`
- Keep animations under 300ms for optimal perceived performance

## 5. Accessibility Guidelines

### 5.1 Color Contrast

- Ensure sufficient contrast between text and background
- Test both light and dark themes for WCAG AA compliance
- Use the WebAIM contrast checker or similar tools

### 5.2 Keyboard Navigation

- All interactive elements must be keyboard accessible
- Use proper focus management in dialogs and dropdowns
- Test tab order for logical flow

### 5.3 Screen Readers

- Use semantic HTML elements
- Include appropriate ARIA attributes when necessary
- Ensure all images have alt text
- Test with screen readers like VoiceOver or NVDA

## 6. Implementation Best Practices

### 6.1 Class Name Conventions

Use the `cn()` utility for combining class names:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-styles",
  variant === "primary" && "primary-styles",
  className
)}>
```

### 6.2 Component Structure

- Keep components focused on a single responsibility
- Extract reusable patterns into separate components
- Use TypeScript interfaces for component props

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}
```

### 6.3 Theme Consistency

- Always use the theme provider for accessing theme state
- Use CSS variables for theme-dependent styles
- Test all components in both light and dark modes

## 7. Quality Assurance

### 7.1 Design Review Checklist

Before submitting code for review, ensure:

- [ ] Components use the correct color variables
- [ ] Typography follows the design system
- [ ] Spacing is consistent with the design system
- [ ] Components are responsive across all breakpoints
- [ ] Hover and focus states are implemented
- [ ] Animations are subtle and performant
- [ ] Accessibility guidelines are followed
- [ ] Dark mode is properly implemented

### 7.2 Testing Procedures

- Test on multiple devices and browsers
- Verify responsive behavior at all breakpoints
- Test keyboard navigation
- Test with screen readers
- Validate color contrast
- Test performance (animations, transitions)

### 7.3 Design Debt Management

- Document design inconsistencies in GitHub issues
- Prioritize design debt alongside feature work
- Regularly review and update the design system

## 8. Code Examples

### Project Card Example

```tsx
<Card className="h-full flex flex-col hover:shadow-md transition-shadow">
  <CardHeader className="pb-2">
    <div className="flex items-center justify-between">
      <CardTitle className="text-lg">{project.name}</CardTitle>
      <Badge variant="outline">{project.category}</Badge>
    </div>
    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
  </CardHeader>
  <CardContent className="flex-grow">
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1">
        {project.technologies.slice(0, 5).map((tech) => (
          <TechnologyIcon key={tech.id} technology={tech} />
        ))}
        {project.technologies.length > 5 && (
          <Badge variant="secondary">+{project.technologies.length - 5}</Badge>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Complexity</span>
          <span>{project.complexity}/10</span>
        </div>
        <Progress value={project.complexity * 10} />
      </div>
    </div>
  </CardContent>
  <CardFooter className="pt-2">
    <Button variant="outline" className="w-full" asChild>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </Button>
  </CardFooter>
</Card>
```

### Filter Component Example

```tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="search">Search Projects</Label>
    <Input
      id="search"
      placeholder="Search by name, technology..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full"
    />
  </div>
  
  <Separator />
  
  <div className="space-y-2">
    <h3 className="text-sm font-medium">Categories</h3>
    <div className="space-y-1">
      {Object.values(ProjectCategory).map((category) => (
        <div key={category} className="flex items-center space-x-2">
          <Checkbox
            id={`category-${category}`}
            checked={selectedCategories.includes(category)}
            onCheckedChange={(checked) => {
              if (checked) {
                setSelectedCategories([...selectedCategories, category]);
              } else {
                setSelectedCategories(
                  selectedCategories.filter((c) => c !== category)
                );
              }
            }}
          />
          <Label htmlFor={`category-${category}`}>{category}</Label>
        </div>
      ))}
    </div>
  </div>
</div>