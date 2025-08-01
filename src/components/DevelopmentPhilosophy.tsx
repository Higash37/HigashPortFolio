import { FaRobot, FaTachometerAlt, FaUserTie } from "react-icons/fa";
import type { ModalContent } from "../App";

interface PhilosophyCardProps {
  onCardClick: (content: ModalContent) => void;
}

const DevelopmentPhilosophy = ({ onCardClick }: PhilosophyCardProps) => {
  const philosophies = [
    {
      icon: <FaRobot className="text-4xl text-white" />,
      title: "本質的価値への集中",
      shortDescription:
        "AIに定型的なコーディングを任せることで、より本質的な『課題の特定』『解決策の設計』に多くの時間を投下します。",
      fullDescription: `AIを単なるコード生成ツールとして使うのではなく、思考のパートナーとして活用しています.\n\n例えば、新しい機能のアイデアをAIに壁打ちし、複数の実装パターンを提案してもらうことで、一人では思いつかなかったようなアプローチを発見できます.\n\nこれにより、コーディング作業そのものから解放され、生み出すべき本当の価値は何か、ユーザーが本当に求めているものは何か、といった上流工程の思考にリソースを集中させることが可能になります.`,
    },
    {
      icon: <FaTachometerAlt className="text-4xl text-white" />,
      title: "圧倒的なスピード",
      shortDescription:
        "AIとの協業はアイデアを形にする時間を劇的に短縮します。これにより、高速な仮説検証サイクルを回し、ソリューションの質を高めます。",
      fullDescription: `ビジネスの世界では、完璧な計画よりも素早い実行と学習が成功の鍵を握ります.\n\nAIとのペアプログラミングは、プロトタイピングの速度を10倍以上に高めることができます。これにより、早い段階で実際に動くものを関係者に見せ、具体的なフィードバックを得ることが可能になります.\n\n「作ってみたが、思っていたものと違った」という手戻りを最小限に抑え、常に正しい方向に向かって開発を進めることができます.`,
    },
    {
      icon: <FaUserTie className="text-4xl text-white" />,
      title: "AIの操縦士としての役割",
      shortDescription:
        "AIは万能ではありません。的確な指示、品質評価、そして最終的な統合には、人間の深いドメイン知識と設計能力が不可欠です。",
      fullDescription: `AIが生成するコードは、あくまで部品に過ぎません。その部品が全体の設計思想に合っているか、将来の拡張性や保守性を見越した作りになっているか、セキュリティ上の問題はないかを判断するのは、人間のエンジニアの重要な責務です.\n\n私は、AIに対して的確なコンテキストと制約を与えて高品質なコードを生成させる「プロンプトエンジニアリング」のスキルと、生成されたコードを評価し、システム全体として最適な形に組み上げる「アーキテクト」としての視点を常に意識しています.`,
    },
  ];

  return (
    <section id="philosophy" className="py-16 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">私の開発哲学</h2>
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
