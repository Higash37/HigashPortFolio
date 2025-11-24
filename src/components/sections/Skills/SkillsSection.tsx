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
// 共通型定義
import type { SkillsSectionProps } from "../../../types/index";

const skills = [
  {
    category: "フロントエンド",
    items: [
      {
        name: "React",
        icon: <FaReact className="text-blue-500" />,
        description:
          "コンポーネントベースの設計思想に基づき、再利用性が高く保守しやすいUIを構築することを目指しています。単なるUIライブラリとしてではなく、アプリケーションの状態管理やロジック分離まで含めた最適な設計を常に意識しているところです。",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        description:
          "静的型付けによる型安全な開発を基本としています。安全性を意識する思想が非常に関心があるところです。",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-500" />,
        description:
          "ES6+のモダンな構文を理解し、非同期処理や関数型プログラミングの概念を活用して、可読性と効率性の高いコードを書くことを目指しています。",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
        description: "デザインシステムに基づいたテーマ設定が好きです。",
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
          "Webの技術スタックを活かし、iOSとAndroidの両プラットフォームに対応したクロスプラットフォームアプリを開発しています。ネイティブアプリとしての開発も本格的にしたいところです。",
      },
      {
        name: "Expo",
        icon: <SiExpo className="text-black" />,
        description:
          "Expoを用いて、ビルドやデプロイの複雑さを抽象化し、開発体験を向上させることを目指しています。",
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
        description: "あまり内部がよく理解出来ていないと日々思っています。",
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-orange-500" />,
        description:
          "認証、データベース（Firestore）、ストレージ、ホスティングなど、BaaSとしてのFirebaseをフル活用し、サーバーレスアーキテクチャで迅速にサービスを立ち上げられる点が楽です。",
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
          "バージョン管理の必須ツールとして、基本的なコマンドは理解したいところです。",
      },
      {
        name: "Excel関数・マクロ",
        icon: <FaTable className="text-green-600" />,
        description:
          "マクロ・VBAは働いていたアルバイト先で使っていなかったこともあり、そこまで詳しくないです。関数でどう実現するかをよく考えていました。",
      },
    ],
    icon: "🛠️",
  },
];

const SkillsSection = ({ onCardClick }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-16 bg-white relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            利用したことのあるスキル・技術
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            基本的にAIでコーディングしているため、コーディングしてからそのコードを基に学習しています。
            そのライブラリが他とどう違うのかなどを比較し、それぞれの強みを理解していくことが非常に好きです。
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
