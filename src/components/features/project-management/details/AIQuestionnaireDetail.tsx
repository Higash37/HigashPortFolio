import React from "react";
import { FaRobot, FaStar, FaBrain } from "react-icons/fa";
import { useProjectTabs } from "../../../../hooks";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const AIQuestionnaireDetail: React.FC = () => {
  const { activeTab, switchTab } = useProjectTabs("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              システム概要
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <FaRobot className="text-blue-500 text-xl mr-2" />
                  <span className="font-bold text-blue-700 text-lg">
                    OpenAI API
                  </span>
                </div>
                <p className="text-blue-600 text-sm">先進的AI技術を活用</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <FaBrain className="text-green-500 text-xl mr-2" />
                  <span className="font-bold text-green-700 text-lg">
                    自然言語処理
                  </span>
                </div>
                <p className="text-green-600 text-sm">高度な回答分析機能</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <FaStar className="text-purple-500 text-xl mr-2" />
                  <span className="font-bold text-purple-700 text-lg">
                    洞察抽出
                  </span>
                </div>
                <p className="text-purple-600 text-sm">
                  データから価値ある洞察
                </p>
              </div>
            </div>
          </div>
        );

      case "howto":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">使用方法</h2>
            <p>AIアンケートシステムの基本的な使用方法について説明します。</p>
          </div>
        );

      case "download":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">アクセス</h2>
            <p>システムへのアクセス方法とセットアップについて。</p>
          </div>
        );

      case "promotion":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">AI機能</h2>
            <p>システムのAI機能と自動分析能力について詳しく説明。</p>
          </div>
        );

      case "faq":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
            <p>AIアンケートシステムに関するよくある質問と回答。</p>
          </div>
        );

      case "tips":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">活用テクニック</h2>
            <p>システムを最大限活用するためのテクニックを紹介。</p>
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
          <FaRobot className="text-blue-500 mr-2" />
          AIアンケートシステム
        </h1>
        <p className="text-gray-500 mb-6">
          OpenAI API
          を活用したインテリジェントなアンケート生成・分析システム。自然言語処理による回答の自動分類と洞察抽出機能。
        </p>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </ProjectDetailLayout>
  );
};

export default AIQuestionnaireDetail;
