import { FaRobot, FaTachometerAlt, FaUserTie } from "react-icons/fa";
// 共通型定義
import type { PhilosophyCardProps } from "../../../types/index.ts";

const DevelopmentPhilosophy = ({ onCardClick }: PhilosophyCardProps) => {
  const philosophies = [
    {
      icon: <FaRobot className="text-4xl text-white" />,
      title: "AIとの対話学習",
      shortDescription:
        "AIとペアコーディングしながら、コードの仕組みや設計思想を学んでいます。単なるコピペではなく、理解しながら学習するアプローチです。",
      fullDescription: `AIを単なるコード生成ツールとして使うのではなく、学習パートナーとして活用しています.\n\n「このコードはなぜこう書くのか？」「このアプローチのメリット・デメリットは？」といった質問を繰り返し、コードの背景にある設計思想やベストプラクティスを理解しようとしています.\n\nこの学習方法により、単に動くコードを書くだけでなく、「なぜそう作るのか」を理解できる人材になることを目指しています.`,
    },
    {
      icon: <FaTachometerAlt className="text-4xl text-white" />,
      title: "業務改善への応用",
      shortDescription:
        "私にとってコーディングは目的ではなく手段だと考えています(そこまでコードを書くこと自体などが好きなわけではありません)。Excel関数から始まり、業務改善の最適解の1つとしてコーディングを位置づけています。",
      fullDescription: `最初はエクセルでの手作業がきっかけでした。マクロやネストした複雑な関数で自動化を進めるうちに、「もっと柔軟で拡張性の高いシステムを作りたい」と思うようになりました.\n\nしかし、コーディングはあくまで業務改善のための手段であり、目的ではありません。最終的には、コスト、効果、リスクを総合的に判断して最適な改善手段を選択できる人材を目指しています.\n\n「手作業のまま」「マクロで自動化」「Webアプリでシステム化」のターニングポイントを見極める眼を育てたいと思っています.`,
    },
    {
      icon: <FaUserTie className="text-4xl text-white" />,
      title: "課題と向き合い中",
      shortDescription:
        "セキュリティ対策やAIツールの評価・選定で四苦八苦しています。これらの課題をどう克服するかが現在の大きなテーマです。",
      fullDescription: `現在、特に困っているのがセキュリティ対策とAIツールの適切な評価・選定です.\n\nセキュリティに関しては、「何をどこまで守るべきか」「コストとリスクのバランス」が全くわからず、手探り状態です.\n\nAIツールについても、新しいサービスが次々と登場する中で、「どのツールが本当に使えるのか」「コスト対効果はどうか」を客観的に判断する基準が必要です.\n\nこれらの課題を克服し、信頼できる情報ソースや評価手法を身につけることが、現在の最大の学習目標です.`,
    },
  ];

  return (
    <section id="philosophy" className="py-16 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          AIを用いた学習ループ!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() =>
                onCardClick({
                  title: item.title,
                  description: item.fullDescription,
                })
              }
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPhilosophy;
