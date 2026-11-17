export type ProjectCategory = 'all' | 'fullstack' | 'ai-ml' | 'cybersecurity' | 'systems';

export type ProjectStatus = 'In Development' | 'Final-Year Project' | 'Internship Production' | 'Completed';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  contributions: string[];
  architecture: string;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  keyHighlights: string[];
  implementedFeatures?: string[];
  plannedFeatures?: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  description: string;
  focus: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface SecurityLab {
  id: string;
  title: string;
  category: 'Web Application Security' | 'Network Analysis' | 'Vulnerability Assessment' | 'SIEM & SOC Operations';
  tools: string[];
  objective: string;
  methodology: string[];
  findings: string[];
  keyTakeaways: string;
  verificationStatus: 'Completed Lab' | 'Ongoing Research';
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'internship' | 'achievement';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

