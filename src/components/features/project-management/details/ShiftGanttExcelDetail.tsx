import React from "react";
import { FaStar, FaChartPie, FaCog } from "react-icons/fa";
import { useProjectTabs } from "../../../../hooks";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const ShiftGanttExcelDetail: React.FC = () => {
  const { activeTab, switchTab } = useProjectTabs("overview");

  const excelIcon = (
    <span className="inline-flex w-6 h-6 bg-green-100 rounded-full items-center justify-center mr-2">
      📊
    </span>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              ツール概要
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  {excelIcon}
                  <span className="font-bold text-green-700 text-lg">
                    Excelライク
                  </span>
                </div>
                <p className="text-green-600 text-sm">
                  使い慣れたインターフェース
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <FaChartPie className="text-blue-500 text-xl mr-2" />
                  <span className="font-bold text-blue-700 text-lg">
                    ガントチャート
                  </span>
                </div>
                <p className="text-blue-600 text-sm">
                  視覚的なスケジュール管理
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <FaCog className="text-purple-500 text-xl mr-2" />
                  <span className="font-bold text-purple-700 text-lg">
                    CSV/PDF出力
                  </span>
                </div>
                <p className="text-purple-600 text-sm">多様な形式での出力</p>
              </div>
            </div>
          </div>
        );

      case "howto":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">使用方法</h2>
            <p>ShiftGanttExcel ツールの基本的な使用方法について説明します。</p>
          </div>
        );

      case "download":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">ダウンロード</h2>
            <p>ツールのダウンロードとセットアップ手順について。</p>
          </div>
        );

      case "promotion":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">主要機能</h2>
            <p>ツールの主要機能と利点について詳しく説明します。</p>
          </div>
        );

      case "faq":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
            <p>ツールに関するよくある質問と回答。</p>
          </div>
        );

      case "tips":
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">使用のコツ</h2>
            <p>ツールをより効率的に使用するためのコツ。</p>
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
          {excelIcon}
          ShiftGanttExcel - シフト表管理ツール
        </h1>
        <p className="text-gray-500 mb-6">
          React
          で開発したシフト表作成・管理ツール。Excelライクなインターフェースでガントチャート表示が可能。
        </p>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </ProjectDetailLayout>
  );
};

export default ShiftGanttExcelDetail;
