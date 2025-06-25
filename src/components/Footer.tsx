const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gray-800 text-white py-8 relative z-50 w-full"
    >
      <div className="max-w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              東恩納 良 | Ryo Higashionna
            </h3>
            <p className="text-gray-400">フルスタック開発者 | 東京都在住</p>
            <p className="text-gray-400 text-sm mt-1">
              Web・モバイル・業務効率化のソリューションを提供
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/taro-tanaka-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>📱</span> GitHub
            </a>
            <a
              href="mailto:taro.tanaka.dev@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>✉️</span> Email
            </a>
            <a
              href="https://linkedin.com/in/taro-tanaka-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>💼</span> LinkedIn
            </a>
            <a
              href="https://twitter.com/taro_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span>🐦</span> Twitter
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ryo Higashionna. All rights reserved. |
            <span className="ml-2">
              🚀 Built with React + TypeScript + Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
