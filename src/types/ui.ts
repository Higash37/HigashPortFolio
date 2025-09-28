// UI関連型定義
export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface SkeletonLoaderProps {
  type?: "header" | "sidebar" | "section" | "card";
  className?: string;
}

export interface LoadedSections {
  header: boolean;
  story: boolean;
  philosophy: boolean;
  projects: boolean;
  skills: boolean;
  about: boolean;
  footer: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}
