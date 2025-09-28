import React from "react";
import { FaMobile, FaStar, FaBell, FaCalendarAlt } from "react-icons/fa";
import { useProjectTabs } from "../../../../hooks";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const ShiftizeDetail: React.FC = () => {
  const { activeTab, switchTab } = useProjectTabs("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              アプリ概要
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <FaMobile className="text-blue-500 text-xl mr-2" />
                  <span className="font-bold text-blue-700 text-lg">
                    React Native
                  </span>
                </div>
                <p className="text-blue-600 text-sm">
                  クロスプラットフォーム対応
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <FaBell className="text-green-500 text-xl mr-2" />
                  <span className="font-bold text-green-700 text-lg">
                    リアルタイム通知
                  </span>
                </div>
                <p className="text-green-600 text-sm">シフト変更を即座に通知</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-purple-500 text-xl mr-2" />
                  <span className="font-bold text-purple-700 text-lg">
                    スケジュール調整
                  </span>
                </div>
                <p className="text-purple-600 text-sm">
                  直感的な操作で簡単調整
                </p>
              </div>
            </div>
          </div>
        );

      case "howto":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">使い方</h2>
            <p>アプリの基本的な使い方と機能について説明します。</p>
          </div>
        );

      case "download":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">ダウンロード</h2>
            <p>アプリのダウンロード方法とインストール手順。</p>
          </div>
        );

      case "promotion":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">主な機能</h2>
            <p>アプリの主要機能と特徴について詳しく説明。</p>
          </div>
        );

      case "faq":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
            <p>アプリに関するよくある質問と回答。</p>
          </div>
        );

      case "tips":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">活用のコツ</h2>
            <p>アプリをより効果的に活用するためのコツを紹介。</p>
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
          <FaMobile className="text-blue-500 mr-2" />
          シフト管理アプリ「Shiftize」
        </h1>
        <p className="text-gray-500 mb-6">
          React Native
          で開発した直感的なシフト管理アプリ。スケジュール調整機能を実装。
        </p>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </ProjectDetailLayout>
  );
};

export default ShiftizeDetail;
