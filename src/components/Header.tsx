const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="/Higash.jpg"
                alt="東恩納 良"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            東恩納 良
            <span className="block text-2xl md:text-3xl mt-2 text-blue-200">
              Ryo Higashionna
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            AI学習ループで成長中｜業務改善からコーディングへのターニングポイント探求者
          </p>
          <p className="text-md md:text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
            AIとペアコーディングしながらコードの仕組みを学習中です。業務効率化の過程でコーディングに辿り着き、将来的には最適な改善手段として使いこなせる人材を目指しています。人やチームの価値創造に強い関心があります。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#philosophy"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:text-white hover:font-bold hover:scale-105 transition-all duration-200"
            >
              🔄 AI学習ループとは
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:text-white hover:font-bold hover:scale-105 transition-all duration-200"
            >
              🛠️ プロダクトについて
            </a>
            <a
              href="https://github.com/Higash37"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              📚 github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
