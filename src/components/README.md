# Components Directory

This directory contains all the React components used in the portfolio application.

## UI Components

The `ui/` directory contains shadcn/ui components, which are reusable UI components used throughout the application.

## Main Components

- `ProjectCard.tsx`: Displays a project card with basic information
- `PortfolioPage.tsx`: Main page for displaying and filtering projects
- `TechnologyIcon.tsx`: Renders icons for technologies
- `theme-provider.tsx`: Provides theme context for dark/light mode
- `mode-toggle.tsx`: Allows switching between dark and light mode

## Component Implementation

To implement these components, follow the designs in the project repository. You can find samples in the artifacts created earlier.

### Project Card Component

This component displays a project card with information such as name, description, technologies, and other details. It should support both compact and detailed views.

### Portfolio Page Component

This component serves as the main page of the application. It includes:

- Organization tabs for filtering by organization
- Search functionality
- Sorting options
- View mode toggle
- Filters for categories, segments, technologies, etc.
- Grid or list display of project cards

### Technology Icon Component

This component renders icons for different technologies using the React Icons library.

## Implementation Notes

1. All components use TypeScript for type safety
2. Components leverage Tailwind CSS for styling
3. shadcn/ui components are used for UI elements
4. Dark/light mode is supported through the theme provider

## Adding New Components

When adding new components:

1. Create a new TypeScript file in this directory
2. Import necessary dependencies
3. Define the component interface
4. Implement the component
5. Export the component
6. Update imports in other files as needed
