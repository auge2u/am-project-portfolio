import { 
  PortfolioData, 
  Project, 
  ProjectCategory, 
  ProjectSegment, 
  Technology,
  TechCategory
} from '../types/project';

// Define organizations
const organizations = [
  {
    id: 'habitusnet',
    name: 'habitusnet',
    displayName: 'Habitusnet',
    description: 'Enterprise solutions for IT services and security',
    logoUrl: '/logos/habitusnet-logo.svg'
  },
  {
    id: 'flyerbee',
    name: 'flyerbee',
    displayName: 'Flyerbee',
    description: 'Innovative marketing and analytics platforms',
    logoUrl: '/logos/flyerbee-logo.svg'
  },
  {
    id: 'rhelosite',
    name: 'rhelosite',
    displayName: 'Rhelosite',
    description: 'Advanced AI and machine learning solutions',
    logoUrl: '/logos/rhelosite-logo.svg'
  }
];

// Define common technologies
const technologies: Technology[] = [
  // Languages
  { id: 'typescript', name: 'TypeScript', category: TechCategory.LANGUAGE, icon: 'typescript-icon' },
  { id: 'javascript', name: 'JavaScript', category: TechCategory.LANGUAGE, icon: 'javascript-icon' },
  { id: 'python', name: 'Python', category: TechCategory.LANGUAGE, icon: 'python-icon' },
  { id: 'go', name: 'Go', category: TechCategory.LANGUAGE, icon: 'go-icon' },
  { id: 'rust', name: 'Rust', category: TechCategory.LANGUAGE, icon: 'rust-icon' },
  
  // Frontend Frameworks
  { id: 'react', name: 'React 18', category: TechCategory.FRAMEWORK, icon: 'react-icon' },
  { id: 'nextjs', name: 'Next.js', category: TechCategory.FRAMEWORK, icon: 'nextjs-icon' },
  { id: 'vite', name: 'Vite', category: TechCategory.DEVOPS, icon: 'vite-icon' },
  
  // Backend Frameworks
  { id: 'nodejs', name: 'Node.js', category: TechCategory.FRAMEWORK, icon: 'nodejs-icon' },
  { id: 'express', name: 'Express.js', category: TechCategory.FRAMEWORK, icon: 'express-icon' },
  { id: 'nestjs', name: 'NestJS', category: TechCategory.FRAMEWORK, icon: 'nestjs-icon' },
  { id: 'django', name: 'Django', category: TechCategory.FRAMEWORK, icon: 'django-icon' },
  { id: 'fastapi', name: 'FastAPI', category: TechCategory.FRAMEWORK, icon: 'fastapi-icon' },
  
  // Databases
  { id: 'postgresql', name: 'PostgreSQL', category: TechCategory.DATABASE, icon: 'postgresql-icon' },
  { id: 'mongodb', name: 'MongoDB', category: TechCategory.DATABASE, icon: 'mongodb-icon' },
  { id: 'supabase', name: 'Supabase', category: TechCategory.DATABASE, icon: 'supabase-icon' },
  { id: 'firebase', name: 'Firebase', category: TechCategory.DATABASE, icon: 'firebase-icon' },
  { id: 'redis', name: 'Redis', category: TechCategory.DATABASE, icon: 'redis-icon' },
  
  // UI Libraries
  { id: 'tailwind', name: 'Tailwind CSS', category: TechCategory.LIBRARY, icon: 'tailwind-icon' },
  { id: 'shadcn', name: 'shadcn/ui', category: TechCategory.LIBRARY, icon: 'shadcn-icon' },
  { id: 'mui', name: 'Material UI', category: TechCategory.LIBRARY, icon: 'mui-icon' },
  { id: 'chakra-ui', name: 'Chakra UI', category: TechCategory.LIBRARY, icon: 'chakra-icon' },
  
  // DevOps
  { id: 'docker', name: 'Docker', category: TechCategory.DEVOPS, icon: 'docker-icon' },
  { id: 'kubernetes', name: 'Kubernetes', category: TechCategory.DEVOPS, icon: 'kubernetes-icon' },
  { id: 'terraform', name: 'Terraform', category: TechCategory.DEVOPS, icon: 'terraform-icon' },
  { id: 'github-actions', name: 'GitHub Actions', category: TechCategory.DEVOPS, icon: 'github-actions-icon' },
  
  // Cloud
  { id: 'aws', name: 'AWS', category: TechCategory.CLOUD, icon: 'aws-icon' },
  { id: 'azure', name: 'Azure', category: TechCategory.CLOUD, icon: 'azure-icon' },
  { id: 'gcp', name: 'Google Cloud', category: TechCategory.CLOUD, icon: 'gcp-icon' },
  { id: 'cloudflare', name: 'Cloudflare', category: TechCategory.CLOUD, icon: 'cloudflare-icon' },
  { id: 'vercel', name: 'Vercel', category: TechCategory.CLOUD, icon: 'vercel-icon' },
  
  // APIs & Data
  { id: 'graphql', name: 'GraphQL', category: TechCategory.LIBRARY, icon: 'graphql-icon' },
  { id: 'apollo', name: 'Apollo Client', category: TechCategory.LIBRARY, icon: 'apollo-icon' },
  { id: 'prisma', name: 'Prisma', category: TechCategory.LIBRARY, icon: 'prisma-icon' },
  { id: 'tanstack-query', name: 'TanStack Query', category: TechCategory.LIBRARY, icon: 'tanstack-query-icon' },
  
  // AI & ML
  { id: 'tensorflow', name: 'TensorFlow', category: TechCategory.LIBRARY, icon: 'tensorflow-icon' },
  { id: 'pytorch', name: 'PyTorch', category: TechCategory.LIBRARY, icon: 'pytorch-icon' },
  { id: 'langchain', name: 'LangChain', category: TechCategory.LIBRARY, icon: 'langchain-icon' },
  { id: 'huggingface', name: 'Hugging Face', category: TechCategory.LIBRARY, icon: 'huggingface-icon' },
];

// Sample projects from habitusnet
const habitusnetProjects: Project[] = [
  {
    id: 'hn-web-25-03',
    name: 'Habitusnet Corporate Website',
    repoName: 'hn-web-25-03',
    organization: 'habitusnet',
    description: 'A modern, responsive corporate website with advanced content management capabilities',
    detailedDescription: 'A comprehensive corporate website solution featuring dynamic content management, administrative dashboard, blog system, case studies showcase, and contact management.',
    category: ProjectCategory.CORPORATE,
    segments: [ProjectSegment.FULLSTACK],
    technologies: [
      technologies.find(t => t.id === 'react')!,
      technologies.find(t => t.id === 'typescript')!,
      technologies.find(t => t.id === 'tailwind')!,
      technologies.find(t => t.id === 'vite')!,
      technologies.find(t => t.id === 'supabase')!,
      technologies.find(t => t.id === 'cloudflare')!,
      technologies.find(t => t.id === 'tanstack-query')!,
      technologies.find(t => t.id === 'shadcn')!
    ],
    timing: {
      startDate: new Date('2025-02-21'),
      endDate: undefined, // Project is ongoing
      developmentDuration: 12, // 12 weeks
      lastUpdated: new Date('2025-03-09'),
      releaseCount: 3
    },
    teamSize: 4,
    complexity: 8,
    businessImpact: 9,
    featuredImage: '/images/habitusnet-website.jpg',
    screenshots: [
      '/images/habitusnet-admin.jpg',
      '/images/habitusnet-blog.jpg',
      '/images/habitusnet-mobile.jpg'
    ],
    keyFeatures: [
      'Responsive design for all device sizes',
      'Dynamic content management system',
      'Administrative dashboard',
      'Blog and case studies system',
      'Service showcases with testimonials',
      'Contact management and lead tracking'
    ],
    challenges: [
      'Implementing real-time content synchronization',
      'Building a comprehensive role-based access control system',
      'Optimizing performance for image-heavy pages'
    ],
    achievements: [
      'Excellent PageSpeed Insights scores (95+ mobile, 98+ desktop)',
      'Comprehensive multi-language support',
      'Seamless integration with marketing automation tools'
    ],
    githubUrl: 'https://github.com/habitusnet/hn-web-25-03',
    demoUrl: 'https://habitusnet.io',
    documentationUrl: 'https://docs.habitusnet.io'
  },
  {
    id: 'appraisehub-portal',
    name: 'AppraiseHub Portal',
    repoName: 'appraisehub-portal',
    organization: 'habitusnet',
    description: 'Property appraisal and valuation management platform',
    detailedDescription: 'A comprehensive platform for managing property appraisals, valuations, and related documentation. Features include automated value estimation, document management, and integration with property databases.',
    category: ProjectCategory.SAAS,
    segments: [ProjectSegment.FULLSTACK, ProjectSegment.DATA],
    technologies: [
      technologies.find(t => t.id === 'react')!,
      technologies.find(t => t.id === 'typescript')!,
      technologies.find(t => t.id === 'nodejs')!,
      technologies.find(t => t.id === 'postgresql')!,
      technologies.find(t => t.id === 'azure')!,
      technologies.find(t => t.id === 'chakra-ui')!
    ],
    timing: {
      startDate: new Date('2025-02-17'),
      endDate: undefined,
      developmentDuration: 8,
      lastUpdated: new Date('2025-02-25'),
      releaseCount: 1
    },
    teamSize: 3,
    complexity: 7,
    businessImpact: 8,
    featuredImage: '/images/appraisehub-portal.jpg',
    keyFeatures: [
      'Automated property valuation',
      'Document management system',
      'Integration with property databases',
      'Reporting and analytics dashboard',
      'Client portal for appraisal tracking'
    ],
    challenges: [
      'Integrating with multiple property data sources',
      'Implementing secure document storage and access control',
      'Building an accurate valuation algorithm'
    ],
    achievements: [
      'Reduced appraisal processing time by 40%',
      'Improved valuation accuracy by 15%',
      'Streamlined document workflows'
    ],
    githubUrl: 'https://github.com/habitusnet/appraisehub-portal',
    demoUrl: 'https://appraisehub.io',
  }
];

// Sample projects from rhelosite
const rhelositeProjects: Project[] = [
  {
    id: 'rhelvia-platform',
    name: 'Rhelvia Platform',
    repoName: 'rhelvia-platform',
    organization: 'rhelosite',
    description: 'Multi-tenant SaaS solution for legal compliance, tax automation, and financial reporting',
    detailedDescription: 'A comprehensive SaaS platform designed to streamline legal compliance, tax automation, financial reporting, and AI-driven advisory services. The platform leverages a sophisticated multi-agent system for intelligent, automated solutions.',
    category: ProjectCategory.SAAS,
    segments: [ProjectSegment.FULLSTACK, ProjectSegment.API, ProjectSegment.INFRASTRUCTURE],
    technologies: [
      technologies.find(t => t.id === 'react')!,
      technologies.find(t => t.id === 'typescript')!,
      technologies.find(t => t.id === 'nodejs')!,
      technologies.find(t => t.id === 'azure')!,
      technologies.find(t => t.id === 'kubernetes')!,
      technologies.find(t => t.id === 'terraform')!,
      technologies.find(t => t.id === 'docker')!
    ],
    timing: {
      startDate: new Date('2025-02-28'),
      endDate: undefined,
      developmentDuration: 1,
      lastUpdated: new Date('2025-03-01'),
      releaseCount: 1
    },
    teamSize: 7,
    complexity: 10,
    businessImpact: 10,
    featuredImage: '/images/rhelvia-platform.jpg',
    keyFeatures: [
      'Legal compliance automation',
      'Tax calculation and filing',
      'Financial reporting and analytics',
      'AI-driven advisory services',
      'Multi-tenant architecture',
      'Comprehensive security and compliance'
    ],
    challenges: [
      'Building a scalable multi-tenant architecture',
      'Implementing zero-trust security model',
      'Creating an effective multi-agent AI system'
    ],
    achievements: [
      'Successfully onboarded enterprise customers',
      'Reduced compliance processing time by 65%',
      'Decreased tax filing errors by 40%'
    ],
    githubUrl: 'https://github.com/rhelosite/rhelvia-platform',
    demoUrl: 'https://rhelvia.io'
  }
];

// Sample projects from flyerbee (previously auge2u)
const flyerbeeProjects: Project[] = [
  {
    id: 'wealth-network-dashboard',
    name: 'Wealth Network Dashboard',
    repoName: 'Wealth-Network-Dashboard',
    organization: 'flyerbee',
    description: 'Interactive visualization tool for financial and wealth concentration metrics',
    detailedDescription: 'A sophisticated dashboard for visualizing complex financial relationships, wealth concentration metrics, and predictive scenarios. The tool provides interactive visualizations, network analysis, and forecasting capabilities.',
    category: ProjectCategory.DATA_SCIENCE,
    segments: [ProjectSegment.FRONTEND, ProjectSegment.DATA],
    technologies: [
      technologies.find(t => t.id === 'react')!,
      technologies.find(t => t.id === 'typescript')!,
      technologies.find(t => t.id === 'tailwind')!,
      technologies.find(t => t.id === 'graphql')!
    ],
    timing: {
      startDate: new Date('2024-11-04'),
      endDate: new Date('2024-11-04'),
      developmentDuration: 1,
      lastUpdated: new Date('2024-11-04'),
      releaseCount: 1
    },
    teamSize: 2,
    complexity: 8,
    businessImpact: 7,
    featuredImage: '/images/wealth-network-dashboard.jpg',
    keyFeatures: [
      'Network visualizations',
      'Historical trend analysis',
      'Predictive scenario modeling',
      'Comparative metrics',
      'Interactive filtering and exploration'
    ],
    challenges: [
      'Representing complex network relationships',
      'Building performant visualizations for large datasets',
      'Creating intuitive interfaces for complex data'
    ],
    achievements: [
      'Successfully visualized complex financial networks',
      'Enabled data-driven decision making',
      'Created novel visualization techniques'
    ],
    githubUrl: 'https://github.com/flyerbee/Wealth-Network-Dashboard',
    demoUrl: 'https://wealth-network.io'
  },
  {
    id: 'rodin',
    name: 'Rodin CLI',
    repoName: 'rodin',
    organization: 'flyerbee',
    description: 'Tool for extracting artifacts from Claude AI conversations',
    detailedDescription: 'A sophisticated command-line tool for extracting, organizing, and managing artifacts generated by Claude AI. The tool supports code, SVG, markdown, and other artifact types with a flexible organization system.',
    category: ProjectCategory.DEVOPS_TOOLS,
    segments: [ProjectSegment.BACKEND],
    technologies: [
      technologies.find(t => t.id === 'typescript')!,
      technologies.find(t => t.id === 'nodejs')!
    ],
    timing: {
      startDate: new Date('2024-12-16'),
      endDate: new Date('2024-12-16'),
      developmentDuration: 1,
      lastUpdated: new Date('2024-12-16'),
      releaseCount: 1
    },
    teamSize: 1,
    complexity: 7,
    businessImpact: 6,
    featuredImage: '/images/rodin-cli.jpg',
    keyFeatures: [
      'Artifact extraction from Claude conversations',
      'Support for multiple artifact types',
      'Flexible organization options',
      'Preview capabilities',
      'Batch processing'
    ],
    challenges: [
      'Parsing complex conversation structures',
      'Extracting artifacts with proper context',
      'Building a user-friendly CLI'
    ],
    achievements: [
      'Improved developer productivity by 40%',
      'Reduced errors in artifact extraction',
      'Enhanced workflow for AI-assisted development'
    ],
    githubUrl: 'https://github.com/flyerbee/rodin',
    demoUrl: 'https://rodin-cli.dev'
  }
];

// Combine all projects into the portfolio data
export const portfolioData: PortfolioData = {
  organizations,
  technologies,
  projects: [
    ...habitusnetProjects,
    ...rhelositeProjects,
    ...flyerbeeProjects
  ]
};
