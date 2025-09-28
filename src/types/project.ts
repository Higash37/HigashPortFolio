// プロジェクト関連型定義
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  type: ProjectType;
  status: ProjectStatus;
}

export type ProjectType = "web" | "mobile" | "desktop" | "tool";
export type ProjectStatus = "active" | "completed" | "archived" | "in-progress";

export interface ProjectDetailProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface TabConfig {
  key: string;
  label: string;
  icon: React.ReactNode;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
}
