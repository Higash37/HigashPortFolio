const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative z-10 w-full"
    >
      <div className="max-w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              田中太郎について
            </h2>
            <p className="text-xl text-purple-100">
              2024年から本格的にWeb開発をスタート | 東京都在住 | 26歳
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">💻 開発スタイル</h3>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">✨</span>
                    ユーザーフレンドリーなUI/UXデザイン
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">🚀</span>
                    パフォーマンスを重視した開発
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">🔧</span>
                    保守性の高いクリーンなコード
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">📚</span>
                    継続的な学習と技術向上
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">🎯 得意分野</h3>
                <div className="space-y-4 text-purple-100">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Webアプリケーション開発
                    </h4>
                    <p className="text-sm">
                      ReactとTypeScriptを使用したモダンなSPA開発
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      モバイルアプリ開発
                    </h4>
                    <p className="text-sm">
                      React Nativeによるクロスプラットフォーム開発
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      業務効率化ツール
                    </h4>
                    <p className="text-sm">Excel VBAによる自動化とデータ分析</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">📧 お問い合わせ</h3>
              <p className="text-purple-100 mb-6">
                プロジェクトのご相談やお仕事のご依頼はお気軽にどうぞ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:taro.tanaka.dev@gmail.com"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
                >
                  📧 メールで連絡
                </a>
                <a
                  href="https://github.com/taro-tanaka-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                >
                  🔗 GitHub プロフィール
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
