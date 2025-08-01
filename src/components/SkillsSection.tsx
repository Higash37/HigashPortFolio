import {
  FaReact,
  FaJs,
  FaNode,
  FaMobile,
  FaGitAlt,
  FaTable,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpo,
  SiFirebase,
} from "react-icons/si";
import type { ModalContent } from "../App";

const skills = [
  {
    category: "フロントエンド",
    items: [
      {
        name: "React",
        icon: <FaReact className="text-blue-500" />,
        description:
          "コンポーネントベースの設計思想に基づき、再利用性が高く保守しやすいUIを構築します。単なるUIライブラリとしてではなく、アプリケーションの状態管理やロジック分離まで含めた最適な設計を常に意識しています。",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        description:
          "静的型付けによる型安全な開発を基本としています。大規模なアプリケーションでもコードの品質を保ち、リファクタリングを容易にするTypeScriptの恩恵を最大限に活用します。",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-500" />,
        description:
          "ES6+のモダンな構文を理解し、非同期処理や関数型プログラミングの概念を活用して、可読性と効率性の高いコードを書くことができます。",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
        description:
          "ユーティリティファーストのアプローチにより、CSSの肥大化を防ぎながら、迅速かつ整合性の取れたUIデザインを実現します。デザインシステムに基づいたテーマ設定も可能です。",
      },
    ],
    icon: "🎨",
  },
  {
    category: "モバイル開発",
    items: [
      {
        name: "React Native",
        icon: <FaMobile className="text-blue-500" />,
        description:
          "Webの技術スタックを活かし、iOSとAndroidの両プラットフォームに対応したクロスプラットフォームアプリを開発します。ネイティブ機能との連携も可能です。",
      },
      {
        name: "Expo",
        icon: <SiExpo className="text-black" />,
        description:
          "ビルドやデプロイの複雑さを抽象化し、開発体験を向上させるExpoの利用経験が豊富です。OTAアップデートによる迅速なバグ修正も可能です。",
      },
    ],
    icon: "📱",
  },
  {
    category: "バックエンド",
    items: [
      {
        name: "Node.js",
        icon: <FaNode className="text-green-600" />,
        description:
          "フロントエンドと親和性の高いNode.jsを用いて、スケーラブルなAPIサーバーを構築します。Express.jsと組み合わせたREST APIの開発が得意です。",
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-orange-500" />,
        description:
          "認証、データベース（Firestore）、ストレージ、ホスティングなど、BaaSとしてのFirebaseをフル活用し、サーバーレスアーキテクチャで迅速にサービスを立ち上げることができます。",
      },
    ],
    icon: "⚙️",
  },
  {
    category: "ツール・その他",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-600" />,
        description:
          "バージョン管理の必須ツールとして、基本的なコマンドからブランチ戦略まで理解しています。GitHub Flowに基づいたチーム開発経験があります。",
      },
      {
        name: "Excel VBA",
        icon: <FaTable className="text-green-600" />,
        description:
          "多くの企業で現役で利用されているExcelの自動化ニーズに応えます。複雑な手作業をマクロで自動化し、業務効率を劇的に改善した経験が豊富です。",
      },
    ],
    icon: "🛠️",
  },
];

interface SkillsSectionProps {
  onCardClick: (content: ModalContent) => void;
}

const SkillsSection = ({ onCardClick }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-16 bg-white relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            スキル・技術
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            各技術要素をクリックすると、私の考えや経験についての詳細が表示されます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-2 block">{skill.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 text-center py-2 px-3 bg-white rounded-full text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100"
                    onClick={() =>
                      onCardClick({
                        title: item.name,
                        description: item.description,
                      })
                    }
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
