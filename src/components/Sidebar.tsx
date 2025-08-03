interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* モバイル用オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* サイドバー本体 */}
      <aside
        className={`
          fixed top-20 lg:top-20 left-0 bottom-0 lg:bottom-auto bg-gray-100 shadow-lg z-50 transition-transform duration-300 ease-in-out
          w-80 lg:w-80
          lg:h-[calc(100vh-5rem)]
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 h-full overflow-y-auto pb-8">
          {/* サイドバーヘッダー */}
          <div className="flex items-center justify-between mb-6 lg:justify-center">
            <div className="flex items-center gap-2">
              <img 
                src="/icon.png" 
                alt="東恩納良" 
                className="w-6 h-6 rounded-full"
              />
              <h2 className="text-lg font-bold text-gray-800">メニュー</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-600 hover:text-gray-800 p-1"
            >
              ✕
            </button>
          </div>

          {/* プロフィール情報 */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                <img 
                  src="/Higash.jpg" 
                  alt="東恩納 良" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">東恩納 良</h3>
                <p className="text-sm text-gray-600">AI学習中｜業務改善志向</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <p>🏠 神奈川県川崎市在住</p>
              <p>📅 2024年から本格開発</p>
            </div>
          </div>

          {/* メインナビゲーション */}
          <nav className="space-y-2 mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
              コンテンツ
            </h3>
            <a
              href="#projects"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-gray-700 hover:text-blue-600"
              onClick={onClose}
            >
              <span>🛠️</span>
              改善事例集
            </a>
            <a
              href="#skills"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-gray-700 hover:text-blue-600"
              onClick={onClose}
            >
              <span>🔄</span>
              学習領域
            </a>
            <a
              href="#about"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-gray-700 hover:text-blue-600"
              onClick={onClose}
            >
              <span>🎯</span>
              関心・将来像
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-gray-700 hover:text-blue-600"
              onClick={onClose}
            >
              <span>💬</span>
              相談・連絡
            </a>
          </nav>

          {/* 外部リンク */}
          <div className="space-y-2 mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
              学習記録
            </h3>
            <a
              href="https://github.com/Higash37"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              <span>📚</span>
              コード学習記録
              <span className="text-xs text-gray-500 ml-auto">↗</span>
            </a>
            <a
              href="mailto:higashionna37@icloud.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              <span>💬</span>
              相談メール
              <span className="text-xs text-gray-500 ml-auto">↗</span>
            </a>
          </div>

          {/* 統計情報 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              🔄 学習進捗
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">改善事例</span>
                <span className="font-semibold text-blue-600">4件</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">AI支援技術</span>
                <span className="font-semibold text-purple-600">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">学習期間</span>
                <span className="font-semibold text-green-600">1年+</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
