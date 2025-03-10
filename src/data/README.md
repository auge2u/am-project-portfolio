# Portfolio Data

This directory contains the data for the portfolio projects.

## Adding Projects

To add new projects to the portfolio:

1. Create or modify the data in `portfolioData.ts`
2. Follow the data model defined in `src/types/project.ts`
3. Add project images to the `public/images` directory
4. If you need to add new technology icons, update the `TechnologyIcon` component

## Sample Project Structure

```typescript
const sampleProject: Project = {
  id: 'unique-id',
  name: 'Project Name',
  repoName: 'repository-name',
  organization: 'organization-name', // habitusnet, flyerbee, or rhelosite
  description: 'Brief description of the project',
  detailedDescription: 'More detailed description',
  category: ProjectCategory.WEB_DEVELOPMENT,
  segments: [ProjectSegment.FULLSTACK],
  technologies: [
    technologies.find(t => t.id === 'react')!,
    technologies.find(t => t.id === 'typescript')!,
  ],
  timing: {
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-02-01'), // Optional, leave undefined for ongoing projects
    developmentDuration: 4, // In weeks
    lastUpdated: new Date('2025-02-01'),
    releaseCount: 1
  },
  teamSize: 3,
  complexity: 7, // 1-10 scale
  businessImpact: 8, // 1-10 scale
  featuredImage: '/images/project-image.jpg',
  screenshots: [
    '/images/screenshot1.jpg',
    '/images/screenshot2.jpg'
  ],
  keyFeatures: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  challenges: [
    'Challenge 1',
    'Challenge 2'
  ],
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ],
  githubUrl: 'https://github.com/organization/repository-name',
  demoUrl: 'https://demo-url.com', // Optional
  documentationUrl: 'https://docs-url.com' // Optional
};
```

## Organizations

Ensure that each project belongs to one of the defined organizations (habitusnet, flyerbee, or rhelosite) and that the organization is properly defined in the `organizations` array in `portfolioData.ts`.
