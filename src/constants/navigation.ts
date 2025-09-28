// ナビゲーション関連定数
export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#top", id: "home" },
  { label: "Story", href: "#story", id: "story" },
  { label: "Philosophy", href: "#philosophy", id: "philosophy" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "About", href: "#about", id: "about" },
] as const;

// プロジェクト詳細ページのタブ設定
export const PROJECT_TABS = {
  OVERVIEW: "overview",
  HOWTO: "howto",
  FEATURES: "features",
  DEMO: "demo",
} as const;

// アニメーション設定
export const ANIMATION_DELAYS = {
  HEADER: 500,
  STORY: 400,
  PHILOSOPHY: 400,
  PROJECTS: 400,
  SKILLS: 300,
  ABOUT: 300,
  FOOTER: 200,
} as const;
