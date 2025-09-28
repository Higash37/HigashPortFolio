import React from "react";
import { FaGlobe, FaStar, FaCode, FaPalette, FaMobile } from "react-icons/fa";
import { useProjectTabs } from "../../../../hooks";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const PortfolioDetail: React.FC = () => {
  const { activeTab, switchTab } = useProjectTabs("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              プロジェクト概要
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <FaCode className="text-blue-500 text-xl mr-2" />
                  <span className="font-bold text-blue-700 text-lg">
                    React + TypeScript
                  </span>
                </div>
                <p className="text-blue-600 text-sm">
                  型安全性と開発効率を両立
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <FaPalette className="text-green-500 text-xl mr-2" />
                  <span className="font-bold text-green-700 text-lg">
                    Tailwind CSS
                  </span>
                </div>
                <p className="text-green-600 text-sm">モダンなデザイン</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <FaMobile className="text-purple-500 text-xl mr-2" />
                  <span className="font-bold text-purple-700 text-lg">
                    PWA対応
                  </span>
                </div>
                <p className="text-purple-600 text-sm">オフライン閲覧可能</p>
              </div>
            </div>
          </div>
        );

      case "howto":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">開発プロセス</h2>
            <p>詳細な開発プロセスと技術的な実装について説明します。</p>
          </div>
        );

      case "download":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">ソースコード</h2>
            <a
              href="https://github.com/Higash37"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHubでソースコードを確認
            </a>
          </div>
        );

      case "promotion":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">技術的な特徴</h2>
            <p>使用技術と実装の詳細について説明します。</p>
          </div>
        );

      case "faq":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
            <p>ポートフォリオサイトに関するよくある質問と回答。</p>
          </div>
        );

      case "tips":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">開発のコツ</h2>
            <p>ポートフォリオサイト開発で学んだことやコツを共有。</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ProjectDetailLayout activeTab={activeTab} onTabChange={switchTab}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
          <FaGlobe className="text-blue-500 mr-2" />
          ポートフォリオサイト
        </h1>
        <p className="text-gray-500 mb-6">
          React + TypeScript + Tailwind CSS
          で開発したモダンなポートフォリオサイト。PWA対応でオフライン閲覧も可能。
        </p>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </ProjectDetailLayout>
  );
};

export default PortfolioDetail;
