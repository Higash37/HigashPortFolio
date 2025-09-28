import React from "react";
import { FaGlobe, FaStar, FaEye, FaPlay } from "react-icons/fa";
import { useProjectTabs } from "../../../../hooks";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const ShiftizePortfolioDetail: React.FC = () => {
  const { activeTab, switchTab } = useProjectTabs("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              サイト概要
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <FaGlobe className="text-blue-500 text-xl mr-2" />
                  <span className="font-bold text-blue-700 text-lg">
                    ランディングページ
                  </span>
                </div>
                <p className="text-blue-600 text-sm">Shiftizeの魅力を伝える</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <FaEye className="text-green-500 text-xl mr-2" />
                  <span className="font-bold text-green-700 text-lg">
                    レスポンシブ
                  </span>
                </div>
                <p className="text-green-600 text-sm">
                  モバイルファーストデザイン
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <FaPlay className="text-purple-500 text-xl mr-2" />
                  <span className="font-bold text-purple-700 text-lg">
                    デモ機能
                  </span>
                </div>
                <p className="text-purple-600 text-sm">実際の動作を体験可能</p>
              </div>
            </div>
          </div>
        );

      case "howto":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">サイト構成</h2>
            <p>ShiftizePortfolio サイトの構成と設計について説明します。</p>
          </div>
        );

      case "download":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">ソースコード</h2>
            <p>サイトのソースコードとデプロイ方法について。</p>
          </div>
        );

      case "promotion":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">デザイン特徴</h2>
            <p>サイトのデザインコンセプトと技術的特徴について。</p>
          </div>
        );

      case "faq":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
            <p>サイトに関するよくある質問と回答。</p>
          </div>
        );

      case "tips":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">開発のポイント</h2>
            <p>ランディングページ開発で重視したポイントを共有。</p>
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
          ShiftizePortfolio - プロジェクト紹介サイト
        </h1>
        <p className="text-gray-500 mb-6">
          Shiftize
          アプリの機能や使い方を紹介するランディングページ。モバイルファーストデザインでレスポンシブ対応。
        </p>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </ProjectDetailLayout>
  );
};

export default ShiftizePortfolioDetail;
