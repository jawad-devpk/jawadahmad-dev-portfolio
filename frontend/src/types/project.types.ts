export type ProjectCategory = "mobile-app" | "web-development";

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  techStack: string[];
  features: string[];
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
};
