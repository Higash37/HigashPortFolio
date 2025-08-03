interface NavigationHeaderProps {
  onMenuToggle: () => void;
}

const NavigationHeader = ({ onMenuToggle }: NavigationHeaderProps) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-full px-4">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ・タイトル */}
          <div className="flex items-center gap-3">
            <img 
              src="/icon.png" 
              alt="東恩納良" 
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-lg">AI学習ループ | 東恩納良</span>
          </div>

          {/* ナビゲーションメニュー - PC版では非表示 */}
          <div className="hidden xl:flex items-center gap-6 ">
            <a
              href="#projects"
              className="text-white px-3 py-2 rounded hover:font-bold hover:scale-105 transition-all duration-200"
            >
              改善事例
            </a>
            <a
              href="#skills"
              className="text-white px-3 py-2 rounded hover:font-bold hover:scale-105 transition-all duration-200"
            >
              学習領域
            </a>
            <a
              href="#about"
              className="text-white px-3 py-2 rounded hover:font-bold hover:scale-105 transition-all duration-200"
            >
              関心・将来像
            </a>
            <a
              href="#contact"
              className="text-white px-3 py-2 rounded hover:font-bold hover:scale-105 transition-all duration-200"
            >
              相談・連絡
            </a>
          </div>

          {/* 右側のボタン */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/Higash37"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              学習記録
            </a>
            <a
              href="mailto:higashionna37@icloud.com"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-200"
            >
              相談メール
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <div className="lg:hidden">
            <button
              onClick={onMenuToggle}
              className="bg-blue-700 hover:bg-blue-800 p-2 rounded transition-colors duration-200"
            >
              <span className="text-xl text-white">☰</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
