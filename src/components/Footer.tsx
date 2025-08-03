const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gray-800 text-white py-8 relative z-50 w-full"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              東恩納 良 | Ryo Higashionna
            </h3>
            <p className="text-gray-400">
              AI学習中 | 業務改善志向 | 神奈川県川崎市在住
            </p>
            <p className="text-gray-400 text-sm mt-1">
              コーディングを手段とした業務改善・効率化の最適解を探求中
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Higash37"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>📚</span> 学習記録
            </a>
            <a
              href="mailto:higashionna37@icloud.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>💬</span> 相談メール
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ryo Higashionna. All rights reserved. |
            <span className="ml-2">
              🤖 AI支援で学習中 | React + TypeScript + Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
