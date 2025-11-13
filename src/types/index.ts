// 共通型定義ファイル - プロジェクト全体で使用される型を統一管理

/**
 * プロジェクト関連の型定義
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  type: "web" | "mobile" | "excel" | "other";
}

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * UI関連の型定義
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface SkeletonLoaderProps {
  type?: "header" | "sidebar" | "section" | "card";
}

/**
 * アニメーション関連の型定義
 */
export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

/**
 * レイアウト関連の型定義
 */
export interface LayoutProps {
  children: React.ReactNode;
}

export interface NavigationHeaderProps {
  onMenuToggle: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * コンテンツ関連の型定義
 */
export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  icon: string;
  description: string;
  detail: string;
  color: string;
}

export interface ModalContent {
  title: string;
  description: React.ReactNode;
}

/**
 * セクション関連の型定義
 */
export interface SkillsSectionProps {
  onCardClick: (content: ModalContent) => void;
}

export interface PhilosophyCardProps {
  onCardClick: (content: ModalContent) => void;
}

/**
 * SEO関連の型定義
 */
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}
