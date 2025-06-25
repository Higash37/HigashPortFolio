const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10 w-full">
      <div className="max-w-full px-4 py-16">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            東恩納 良
            <span className="block text-2xl md:text-3xl mt-2 text-blue-200">
              Ryo Higashionna
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            フルスタック開発者 | React / React Native / Excel VBA
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Higash37"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              🔗 GitHub を見る
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              📂 プロジェクト一覧
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
