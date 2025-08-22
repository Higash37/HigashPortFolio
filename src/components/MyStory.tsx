import { useState } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  icon: string;
  description: string;
  detail: string;
  color: string;
}

const MyStory = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const timeline: TimelineItem[] = [
    {
      id: 1,
      year: "2023",
      title: "Excel地獄との出会い",
      icon: "😫",
      description: "毎日3時間のコピペ作業。「これ、本当に人間がやる仕事？」という疑問から全てが始まった。",
      detail: "大学でのアルバイトで、毎日大量のデータを手作業で集計していました。同じパターンの繰り返し作業を見て、「これは何か違う」と強く感じました。人間の創造性や判断力を、単純作業に費やすのはもったいない。この違和感が、私の業務改善への第一歩でした。",
      color: "from-gray-500 to-gray-600"
    },
    {
      id: 2,
      year: "2023",
      title: "VBAとの運命的な出会い",
      icon: "💡",
      description: "3時間が30分に。初めて「技術で人を助ける」実感を得た瞬間。",
      detail: "YouTubeでVBAの存在を知り、独学で勉強開始。最初のマクロが動いた瞬間の感動は今でも忘れません。チームメンバーから「魔法みたい！」と言われ、技術が人の時間と心の余裕を生み出せることを実感。でも同時に、VBAの限界も見えてきました。",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      year: "2024",
      title: "限界を感じ、新しい世界へ",
      icon: "🚪",
      description: "VBAじゃ足りない。もっと柔軟で、もっとパワフルな解決策を求めて。",
      detail: "複雑な要求に応えるには、VBAでは限界がありました。Webアプリ、モバイルアプリ、API連携...やりたいことは山ほどあるのに、技術が追いつかない。そんな時、プログラミングの世界への扉が開きました。でも、独学でのコーディングは想像以上に困難で...",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      year: "2024",
      title: "AIとの協業という答え",
      icon: "🤖",
      description: "コードが書けなくても、アイデアを形にできる。新しい開発スタイルの発見。",
      detail: "ChatGPT、Claude、GitHub Copilot...AIツールとの出会いが全てを変えました。「なぜこう書くのか」を理解しながら、実際に動くものを作れる。これは単なる効率化ではなく、学習と創造の新しい形。AIは私の先生であり、パートナーです。",
      color: "from-green-500 to-green-600"
    },
    {
      id: 5,
      year: "現在",
      title: "人とチームの価値を最大化",
      icon: "🎯",
      description: "技術は手段。目的は「人が本来の価値を発揮できる環境づくり」",
      detail: "今の私の関心は、個人の効率化を超えて、チーム全体の価値創造にあります。誰もが創造的な仕事に集中できる環境、アイデアがすぐに形になる組織、技術の恩恵を全員が受けられる未来。そんな理想に向かって、今日も学び続けています。",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="story" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            なぜ業務改善に情熱を持つのか
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            単純作業から解放され、人間らしい創造的な仕事に集中する。
            そんな当たり前の世界を作りたい。
          </p>
        </div>

        <div className="relative">
          {/* 縦のライン */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-300 via-blue-300 to-orange-300"></div>

          {/* タイムラインアイテム */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* 年とアイコン */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10 relative`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-500">
                    {item.year}
                  </div>
                </motion.div>

                {/* コンテンツカード */}
                <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    
                    {/* 詳細表示 */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    <button className="text-blue-500 text-xs font-semibold mt-2 flex items-center gap-1">
                      {expandedId === item.id ? "閉じる" : "続きを読む"}
                      <span className={`transform transition-transform ${expandedId === item.id ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>
                  </motion.div>
                </div>

                {/* スペーサー（反対側） */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* まとめ */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">私が目指す未来</h3>
          <p className="text-lg mb-6 leading-relaxed">
            コーディングは目的ではなく、手段です。<br />
            本当の目的は、誰もが自分の強みを活かし、<br />
            創造的で意味のある仕事に集中できる環境を作ること。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-semibold">🎯 ミッション</span>
              <p className="text-xs mt-1">単純作業をゼロに</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-semibold">💡 ビジョン</span>
              <p className="text-xs mt-1">全員が創造的に</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-semibold">🤝 バリュー</span>
              <p className="text-xs mt-1">技術×人間らしさ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;