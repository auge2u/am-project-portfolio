# Project Portfolio

A professional portfolio application showcasing projects from multiple organizations with filtering, sorting, and detailed project information.

## Features

- **Project Cards**: Display project information in both compact and full views
- **Filtering**: Comprehensive filtering by category, segment, technology, and complexity
- **Organization Tabs**: Separate projects by organization
- **Search Functionality**: Find projects by keyword
- **Sorting Options**: Sort by name, date, complexity, impact
- **Detailed Project Dialog**: View comprehensive project information
- **Responsive Design**: Works on various screen sizes
- **Dark/Light Mode**: Theme support with system preference detection

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui components

## Project Screenshot

![Project Portfolio Screenshot](/public/images/portfolio-screenshot.jpg)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/auge2u/am-project-portfolio.git
cd am-project-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```
am-project-portfolio/
├── public/             # Static assets
│   ├── images/         # Project images and screenshots
│   └── logos/          # Organization logos
├── src/
│   ├── components/     # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── ProjectCard.tsx      # Project card component
│   │   ├── PortfolioPage.tsx    # Main page component
│   │   ├── TechnologyIcon.tsx   # Technology icon component
│   │   ├── theme-provider.tsx   # Theme context provider
│   │   └── mode-toggle.tsx      # Dark/light mode toggle
│   ├── data/           # Data files
│   │   └── portfolioData.ts     # Sample project data
│   ├── lib/            # Utility functions
│   │   └── utils.ts              # Helper functions
│   ├── types/          # TypeScript type definitions
│   │   └── project.ts            # Project data types
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── .gitignore          # Git ignore file
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Implementation Steps

1. **Set Up the Project**: Initialize a React project with Vite, TypeScript, and Tailwind CSS
2. **Create the Data Model**: Define project types and interfaces
3. **Implement UI Components**: Create reusable UI components using shadcn/ui
4. **Build Project Card Component**: Create a component for displaying project information
5. **Build Portfolio Page**: Implement the main page with filtering and sorting
6. **Add Dark/Light Mode**: Implement theme switching functionality
7. **Implement Responsive Design**: Ensure the application works on all device sizes
8. **Add Sample Data**: Populate the application with sample project data
9. **Deploy to GitHub Pages**: Configure the application for deployment

## Adding New Projects

To add new projects to the portfolio, modify the `portfolioData.ts` file in the `src/data` directory. See the [documentation](src/data/README.md) for detailed instructions.

## Deployment

This project is configured for deployment to GitHub Pages. For deployment instructions, see the [deployment guide](DEPLOYMENT.md).

## Customization

### Styling

The application uses Tailwind CSS for styling. You can customize the look and feel by modifying the `tailwind.config.js` file and the `src/index.css` file.

### Components

You can customize the components by modifying the files in the `src/components` directory. The UI components are from shadcn/ui and can be customized by modifying the files in the `src/components/ui` directory.

## Credits

- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Build tool

## License

MIT
