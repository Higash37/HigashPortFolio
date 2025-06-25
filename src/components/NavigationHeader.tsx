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
            <span className="text-xl">👨‍💻</span>
            <span className="font-bold text-lg">東恩納 良ポートフォリオ</span>
          </div>

          {/* ナビゲーションメニュー - PC版では非表示 */}
          <div className="hidden xl:flex items-center gap-6 ">
            <a
              href="#projects"
              className="hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors duration-200"
            >
              プロジェクト
            </a>
            <a
              href="#skills"
              className="hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors duration-200"
            >
              スキル
            </a>
            <a
              href="#about"
              className="hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors duration-200"
            >
              自己紹介
            </a>
            <a
              href="#contact"
              className="hover:bg-blue-700 text-white px-3 py-2  rounded transition-colors duration-200"
            >
              お問い合わせ
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
              GitHub
            </a>
            <a
              href="mailto:higashionna37@icloud.com"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-200"
            >
              お問い合わせ
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
