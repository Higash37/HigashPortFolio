// スタイル定数
import { TRANSITION_DURATION } from "../../../styles/constants";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative z-10 w-full"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            東恩納 良（ひがしおんなりょう）について
          </h2>
          <p className="text-xl text-purple-100">
            2024年から本格的にWeb開発をスタート | 神奈川県川崎市在住 | 21歳 |
            大学生
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">🤖 AI学習</h3>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300">🔄</span>
                  AIとペアコーディング→コード理解→実装→学習の繰り返し
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300">❓</span>
                  セキュリティ対策やニーズの把握で四苦八苦中（改善方法を模索）
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300">🎯</span>
                  業務改善の最適な1手段としてのコーディング習得が目標
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300">👥</span>
                  人やチームの価値創造・ターニングポイントに強い関心
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">📈 現在の学習領域</h3>
              <div className="space-y-4 text-purple-100">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    業務改善からの発展
                  </h4>
                  <p className="text-sm">
                    Excelの関数利用 → 効率化の限界（技術的制約と環境的制約:
                    マクロが禁止されているなど） → Webアプリ開発への転換点
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    AI支援による技術習得
                  </h4>
                  <p className="text-sm">
                    React/TypeScript基礎をAIとの対話で理解中。
                    AIの回答を検証しながら学習している。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    課題と向き合い中
                  </h4>
                  <p className="text-sm">
                    セキュリティ設計やAIツール選定・評価手法の習得
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">🎯 関心領域</h3>
            <div className="space-y-4 text-purple-100">
              <div>
                <h4 className="font-semibold text-white mb-2">
                  業務改善のターニングポイント
                </h4>
                <p className="text-sm">
                  手作業→自動化→システム化への転換点を見極める過程に興味
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  人材・チーム価値の最大化
                </h4>
                <p className="text-sm">
                  個人やチームが価値を発揮できる環境づくりと成長支援。決してコードといったシステムだけではなく、リーダーシップ・フォロワーシップといった人との繋がりなど
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  技術導入の意思決定
                </h4>
                <p className="text-sm">
                  コスト・効果・リスクを総合的に判断した最適解の模索
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">📧 お問い合わせ</h3>
            <p className="text-purple-100 mb-6">
              ご相談やご質問はお気軽にどうぞ。自身のプロダクト含めあまり批判出来ていないので、「こうした方がいいのでは」という意見を求めてます。
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:higashionna37@icloud.com"
                className={`bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors ${TRANSITION_DURATION.QUICK} text-center`}
              >
                📧 メールで連絡
              </a>
              <a
                href="https://github.com/Higash37"
                target="_blank"
                rel="noopener noreferrer"
                className={`border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:text-white hover:font-bold hover:scale-105 transition-all ${TRANSITION_DURATION.QUICK} text-center`}
              >
                🔗 GitHub プロフィール
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
