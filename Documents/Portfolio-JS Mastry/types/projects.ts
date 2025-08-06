export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  techStack: string[];
  codeLink: string;
  liveLink: string;
  thumbnail: string;
  type: string; // Solo | Group
  status: string; // Completed | In Progress
  isLive: boolean;
  features: string[];
  challenges: string[];
}
