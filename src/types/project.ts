// Project Portfolio Data Model

// Enums for categorization
export enum ProjectCategory {
  WEB_DEVELOPMENT = "Web Development",
  MOBILE_APP = "Mobile App Development",
  DESKTOP_APP = "Desktop Application",
  DEVOPS_TOOLS = "DevOps Tools",
  DATA_SCIENCE = "Data Science & Analytics",
  BLOCKCHAIN = "Blockchain",
  AUTOMATION = "Automation & Workflow",
  AI_ML = "AI & Machine Learning",
  CORPORATE = "Corporate Platform",
  SAAS = "SaaS Solution"
}

export enum ProjectSegment {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  FULLSTACK = "Full Stack",
  INFRASTRUCTURE = "Infrastructure",
  DATA = "Data Engineering",
  SECURITY = "Security",
  API = "API Services"
}

export enum TechCategory {
  LANGUAGE = "Programming Language",
  FRAMEWORK = "Framework",
  LIBRARY = "Library",
  DATABASE = "Database",
  CLOUD = "Cloud Service",
  DEVOPS = "DevOps Tool",
  UI = "UI/UX Component"
}

// Technology interface
export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  icon: string; // Path to icon or component name
  color?: string; // Optional brand color
  version?: string; // Optional version information
}

// Timing information interface
export interface TimingInfo {
  startDate: Date;
  endDate?: Date; // Optional if project is ongoing
  developmentDuration: number; // In weeks or months
  lastUpdated: Date;
  releaseCount?: number; // Number of releases or major versions
}

// Project interface
export interface Project {
  id: string;
  name: string;
  repoName: string;
  organization: string; // habitusnet, flyerbee, or rhelosite
  description: string;
  detailedDescription?: string; // Longer description for detailed view
  category: ProjectCategory;
  segments: ProjectSegment[];
  technologies: Technology[];
  timing: TimingInfo;
  teamSize: number;
  complexity: number; // 1-10 scale
  businessImpact: number; // 1-10 scale
  featuredImage?: string; // Optional image path
  screenshots?: string[]; // Optional array of screenshot paths
  keyFeatures: string[];
  challenges?: string[]; // Optional technical challenges overcome
  achievements?: string[]; // Optional notable achievements
  githubUrl: string;
  demoUrl?: string; // Optional demo link
  documentationUrl?: string; // Optional documentation link
}

// Repository organization mapping
export interface Organization {
  id: string;
  name: string;
  displayName: string;
  description: string;
  logoUrl: string;
}

// Full portfolio data structure
export interface PortfolioData {
  organizations: Organization[];
  technologies: Technology[];
  projects: Project[];
}

// Helper function to calculate development time (for display purposes)
export function formatDevelopmentTime(project: Project): string {
  const { startDate, endDate, developmentDuration } = project.timing;
  
  const start = startDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short'
  });
  
  const end = endDate ? endDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short'
  }) : 'Present';
  
  const durationUnit = developmentDuration > 4 ? 'months' : 'weeks';
  const durationValue = durationUnit === 'months' 
    ? Math.round(developmentDuration / 4) 
    : developmentDuration;
  
  return `${start} - ${end} (${durationValue} ${durationUnit})`;
}

// Helper function to filter projects by criteria
export function filterProjects(
  projects: Project[], 
  filters: {
    categories?: ProjectCategory[],
    segments?: ProjectSegment[],
    technologies?: string[],
    organizations?: string[],
    searchTerm?: string,
    minComplexity?: number,
    maxComplexity?: number
  }
): Project[] {
  return projects.filter(project => {
    // Filter by categories
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(project.category)) {
        return false;
      }
    }
    
    // Filter by segments
    if (filters.segments && filters.segments.length > 0) {
      if (!project.segments.some(segment => filters.segments?.includes(segment))) {
        return false;
      }
    }
    
    // Filter by technologies
    if (filters.technologies && filters.technologies.length > 0) {
      if (!project.technologies.some(tech => filters.technologies?.includes(tech.id))) {
        return false;
      }
    }
    
    // Filter by organizations
    if (filters.organizations && filters.organizations.length > 0) {
      if (!filters.organizations.includes(project.organization)) {
        return false;
      }
    }
    
    // Filter by complexity
    if (filters.minComplexity !== undefined && project.complexity < filters.minComplexity) {
      return false;
    }
    if (filters.maxComplexity !== undefined && project.complexity > filters.maxComplexity) {
      return false;
    }
    
    // Filter by search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      const searchableText = [
        project.name,
        project.description,
        project.detailedDescription,
        ...project.keyFeatures,
        ...project.technologies.map(t => t.name),
        ...(project.challenges || []),
        ...(project.achievements || [])
      ].join(' ').toLowerCase();
      
      if (!searchableText.includes(term)) {
        return false;
      }
    }
    
    return true;
  });
}