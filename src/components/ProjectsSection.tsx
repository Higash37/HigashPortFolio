import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    description:
      "React + TypeScript + Tailwind CSSで開発したレスポンシブなポートフォリオサイト。モダンなデザインと滑らかなアニメーションが特徴。PWA対応でオフライン閲覧も可能。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "PWA"],
    link: "https://github.com/Higash37",
    github: "https://github.com/Higash37",
    type: "web" as const,
  },
  {
    id: "2",
    title: "シフト管理アプリ「Shiftize」",
    description:
      "React Nativeで開発したシフト管理アプリ。直感的なUI、リアルタイム通知、スケジュール調整機能を実装。個人開発で3ヶ月で完成。",
    tech: ["React Native", "TypeScript", "Expo", "Firebase", "Zustand"],
    github: "https://github.com/Higash37",
    type: "mobile" as const,
  },
  {
    id: "3",
    title: "自動反映シフトガントチャートExcelシート",
    description:
      "VBAやマクロを一切使わず、関数と条件付き書式のみで実現したシフトガントチャート。現場のITリテラシーが低くても安心して使える。",
    tech: ["Excel", "関数のみ", "条件付き書式"],
    link: "https://github.com/Higash37/shift-gantt-excel",
    github: "https://github.com/Higash37/shift-gantt-excel",
    type: "excel" as const,
  },
  {
    id: "4",
    title: "「Shiftize」のポートフォリオサイト",
    description:
      "シフト管理アプリ「Shiftize」の専用ポートフォリオサイト。アプリの機能紹介、デモ、ダウンロードリンクを提供。モダンなランディングページデザイン。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://github.com/Higash37",
    github: "https://github.com/Higash37",
    type: "web" as const,
  },
  {
    id: "5",
    title: "AIでアンケートを生成するサイト",
    description:
      "AI技術を活用してアンケートを自動生成するWebアプリケーション。自然言語での指示から最適な質問項目を提案。回答分析機能も搭載。",
    tech: ["React", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    link: "https://github.com/Higash37",
    github: "https://github.com/Higash37",
    type: "web" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            プロジェクト一覧
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            これまでに開発したプロジェクトの一部をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
