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

// スキルデータ定数（SkillsSection用の完全版）
export const SKILLS_DATA = [
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
] as const;
