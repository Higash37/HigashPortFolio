import type { Project } from "../types/project";

// プロジェクトデータ定数
export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "ポートフォリオサイト",
    description:
      "React + TypeScript + Tailwind CSSで開発したレスポンシブなポートフォリオサイト。モダンなデザインと滑らかなアニメーションが特徴。PWA対応でオフライン閲覧も可能。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "PWA"],
    githubUrl: "https://github.com/Higash37/HigashPortFolio",
    demoUrl: "https://higash37.github.io/HigashPortFolio/",
    type: "web",
    status: "active",
  },
  {
    id: "shiftize",
    title: "Shiftize - シフト管理アプリ",
    description:
      "React Nativeで開発したシフト管理モバイルアプリ。直感的なUI/UXでシフトの作成・編集・共有が可能。リアルタイム同期とプッシュ通知機能を実装。",
    tech: ["React Native", "TypeScript", "Expo", "Firebase", "Zustand"],
    githubUrl: "https://github.com/Higash37/Shiftize",
    type: "mobile",
    status: "completed",
  },
  {
    id: "shift-gantt-excel",
    title: "ShiftGanttExcel - シフト表管理ツール",
    description:
      "Reactで開発したシフト表作成・管理ツール。Excelライクなインターフェースでガントチャート表示が可能。CSV/PDF出力機能付き。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/Higash37/ShiftGanttExcel",
    type: "web",
    status: "completed",
  },
  {
    id: "shiftize-portfolio",
    title: "ShiftizePortfolio - プロジェクト紹介サイト",
    description:
      "Shiftizeアプリの機能や使い方を紹介するランディングページ。モバイルファーストデザインでレスポンシブ対応。",
    tech: ["React", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Higash37/ShiftizePortfolio",
    type: "web",
    status: "completed",
  },
  {
    id: "ai-questionnaire",
    title: "AIアンケートシステム",
    description:
      "OpenAI APIを活用したインテリジェントなアンケート生成・分析システム。自然言語処理による回答の自動分類と洞察抽出機能。",
    tech: ["React", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Higash37/AIQuestionnaire",
    type: "web",
    status: "in-progress",
  },
];

// プロジェクトタイプ別フィルター
export const PROJECT_TYPES = {
  ALL: "all",
  WEB: "web",
  MOBILE: "mobile",
  DESKTOP: "desktop",
  TOOL: "tool",
} as const;

// プロジェクトステータス
export const PROJECT_STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  ARCHIVED: "archived",
  IN_PROGRESS: "in-progress",
} as const;
