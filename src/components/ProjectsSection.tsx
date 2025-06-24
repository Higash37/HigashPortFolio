import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    description:
      "React + TypeScript + Tailwind CSSで開発したレスポンシブなポートフォリオサイト。モダンなデザインと滑らかなアニメーションが特徴。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://taro-tanaka-portfolio.vercel.app",
    github: "https://github.com/taro-tanaka-dev/portfolio",
    type: "web" as const,
  },
  {
    id: "2",
    title: "シフト管理アプリ「ShiftEase」",
    description:
      "React Nativeで開発したシフト管理アプリ。直感的なUI、リアルタイム通知、スケジュール調整機能を実装。個人開発で3ヶ月で完成。",
    tech: ["React Native", "TypeScript", "Expo", "Firebase", "Zustand"],
    github: "https://github.com/taro-tanaka-dev/shift-ease",
    type: "mobile" as const,
  },
  {
    id: "3",
    title: "売上データ自動集計ツール",
    description:
      "Excel VBAで開発した業務効率化ツール。複数店舗の売上データを自動集計し、グラフ付きレポートを生成。作業時間を90%短縮。",
    tech: ["Excel VBA", "Power Query", "Power Pivot", "SQL"],
    link: "https://github.com/taro-tanaka-dev/excel-sales-tool/releases",
    github: "https://github.com/taro-tanaka-dev/excel-sales-tool",
    type: "excel" as const,
  },
  {
    id: "4",
    title: "小テストジェネレーター「QuizMaker」",
    description:
      "教師・講師向けの小テスト作成ツール。直感的な操作で問題作成、自動採点、成績管理が可能。教育現場での業務効率化を実現。",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    link: "https://quiz-maker-demo.vercel.app",
    github: "https://github.com/taro-tanaka-dev/quiz-maker",
    type: "web" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 relative z-10 w-full">
      <div className="max-w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            プロジェクト一覧
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            これまでに開発したプロジェクトの一部をご紹介します。
            Web開発からモバイルアプリ、Excel VBAまで幅広く対応しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
