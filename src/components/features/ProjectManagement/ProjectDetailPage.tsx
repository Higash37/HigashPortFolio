import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import {
  FaUserClock,
  FaChartBar,
  FaPalette,
  FaDownload,
  FaStar,
  FaCode,
  FaQuestionCircle,
  FaRegLightbulb,
  FaMobile,
  FaGlobe,
  FaRobot,
  FaBrain,
  FaChartPie,
  FaCog,
  FaEye,
  FaPlay,
  FaBell,
  FaCalendarAlt,
} from "react-icons/fa";

const excelIcon = (
  <span className="inline-flex w-6 h-6 bg-green-100 rounded-full items-center justify-center mr-2">
    📊
  </span>
);

const SubHeaderTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <div className="flex gap-4 border-b border-gray-200 bg-white sticky top-0 z-20 px-4 py-2 shadow-sm">
    {[
      {
        key: "overview",
        label: "概要",
        icon: <FaChartBar className="inline mr-1" />,
      },
      {
        key: "howto",
        label: "使い方",
        icon: <FaUserClock className="inline mr-1" />,
      },
      {
        key: "download",
        label: "ダウンロード",
        icon: <FaDownload className="inline mr-1" />,
      },
      {
        key: "promotion",
        label: "広告・特徴",
        icon: <FaStar className="inline mr-1" />,
      },
      {
        key: "faq",
        label: "FAQ",
        icon: <FaQuestionCircle className="inline mr-1" />,
      },
      {
        key: "tips",
        label: "Tips",
        icon: <FaRegLightbulb className="inline mr-1" />,
      },
    ].map((tab) => (
      <button
        key={tab.key}
        className={`px-4 py-2 font-semibold border-b-2 transition-colors duration-200 flex items-center gap-1 ${
          activeTab === tab.key
            ? "border-blue-500 text-blue-700 bg-blue-50"
            : "border-transparent text-gray-600 hover:text-blue-500"
        }`}
        onClick={() => setActiveTab(tab.key)}
      >
        {tab.icon}
        {tab.label}
      </button>
    ))}
  </div>
);

// ポートフォリオサイトの詳細ページ
const PortfolioDetail = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
          <FaGlobe className="text-blue-500 mr-2" />
          ポートフォリオサイト
        </h1>
        <p className="text-gray-500 mb-6">
          React + TypeScript + Tailwind
          CSSで開発したモダンなポートフォリオサイト。PWA対応でオフライン閲覧も可能。
        </p>
        <SubHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {activeTab === "overview" && (
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
                </div>
              </div>
            </div>
          )}
          {activeTab === "howto" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">開発プロセス</h2>
              <p>詳細な開発プロセスと技術的な実装について説明します。</p>
            </div>
          )}
          {activeTab === "download" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">ソースコード</h2>
              <a
                href="https://github.com/Higash37"
                className="text-blue-500 hover:underline"
              >
                GitHubでソースコードを確認
              </a>
            </div>
          )}
          {activeTab === "promotion" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">技術的な特徴</h2>
              <p>使用技術と実装の詳細について説明します。</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
              <p>ポートフォリオサイトに関するよくある質問と回答。</p>
            </div>
          )}
          {activeTab === "tips" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">開発のコツ</h2>
              <p>ポートフォリオサイト開発で学んだことやコツを共有。</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// シフト管理アプリ「Shiftize」の詳細ページ
const ShiftizeDetail = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
          <FaMobile className="text-blue-500 mr-2" />
          シフト管理アプリ「Shiftize」
        </h1>
        <p className="text-gray-500 mb-6">
          React Nativeで開発した直感的なシフト管理アプリ。
          スケジュール調整機能を実装。
        </p>
        <SubHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {activeTab === "overview" && (
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
                  <p className="text-green-600 text-sm">
                    シフト変更を即座に通知
                  </p>
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
          )}
          {activeTab === "howto" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">使い方</h2>
              <p>アプリの基本的な使い方と機能について説明します。</p>
            </div>
          )}
          {activeTab === "download" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">ダウンロード</h2>
              <p>アプリのダウンロード方法とインストール手順。</p>
            </div>
          )}
          {activeTab === "promotion" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">主な機能</h2>
              <p>アプリの主要機能と特徴について詳しく説明。</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
              <p>アプリに関するよくある質問と回答。</p>
            </div>
          )}
          {activeTab === "tips" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">活用のコツ</h2>
              <p>アプリをより効果的に活用するためのコツを紹介。</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// 自動反映シフトガントチャートExcelシートの詳細ページ（既存のまま）
const ShiftGanttExcelDetail = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
          {excelIcon}自動反映シフトガントチャートExcelシート
        </h1>
        <p className="text-gray-500 mb-6">
          VBA・マクロ不要、関数と条件付き書式だけで作れる現場向けシフト管理テンプレート。集計・印刷・クラウド共有も対応。
        </p>
        <SubHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {activeTab === "overview" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <FaStar className="text-yellow-400 mr-2" />
                プロジェクト概要
              </h2>
              <p>詳細な説明は既存の実装を参照してください。</p>
            </div>
          )}
          {activeTab === "howto" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">使い方</h2>
              <p>Excelテンプレートの使い方について説明します。</p>
            </div>
          )}
          {activeTab === "download" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">ダウンロード</h2>
              <a
                href="https://github.com/Higash37/shift-gantt-excel"
                className="text-blue-500 hover:underline"
              >
                GitHubでテンプレートをダウンロード
              </a>
            </div>
          )}
          {activeTab === "promotion" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">特徴</h2>
              <p>テンプレートの主な特徴と利点について説明。</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
              <p>Excelテンプレートに関するよくある質問と回答。</p>
            </div>
          )}
          {activeTab === "tips" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">活用のコツ</h2>
              <p>テンプレートをより効果的に活用するためのコツを紹介。</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// 「Shiftize」のポートフォリオサイトの詳細ページ
const ShiftizePortfolioDetail = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
          <FaGlobe className="text-blue-500 mr-2" />
          「Shiftize」のポートフォリオサイト
        </h1>
        <p className="text-gray-500 mb-6">
          シフト管理アプリ「Shiftize」の専用ポートフォリオサイト。アプリの機能紹介、デモ、ダウンロードリンクを提供。
        </p>
        <SubHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {activeTab === "overview" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <FaStar className="text-yellow-400 mr-2" />
                サイト概要
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <FaEye className="text-blue-500 text-xl mr-2" />
                    <span className="font-bold text-blue-700 text-lg">
                      機能紹介
                    </span>
                  </div>
                  <p className="text-blue-600 text-sm">
                    アプリの詳細な機能を紹介
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center mb-2">
                    <FaPlay className="text-green-500 text-xl mr-2" />
                    <span className="font-bold text-green-700 text-lg">
                      デモ
                    </span>
                  </div>
                  <p className="text-green-600 text-sm">実際の動作を確認可能</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex items-center mb-2">
                    <FaDownload className="text-purple-500 text-xl mr-2" />
                    <span className="font-bold text-purple-700 text-lg">
                      ダウンロード
                    </span>
                  </div>
                  <p className="text-purple-600 text-sm">
                    簡単なダウンロードリンク
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "howto" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">サイトの使い方</h2>
              <p>ポートフォリオサイトの使い方とナビゲーションについて説明。</p>
            </div>
          )}
          {activeTab === "download" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">アクセス方法</h2>
              <p>サイトへのアクセス方法とURLについて。</p>
            </div>
          )}
          {activeTab === "promotion" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">デザインの特徴</h2>
              <p>サイトのデザインとユーザーエクスペリエンスについて。</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
              <p>サイトに関するよくある質問と回答。</p>
            </div>
          )}
          {activeTab === "tips" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">開発のコツ</h2>
              <p>ポートフォリオサイト開発で学んだことやコツを共有。</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// AIでアンケートを生成するサイトの詳細ページ
const AIQuestionnaireDetail = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  return (
    <Layout>
      <div className="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 flex items-center">
          <FaRobot className="text-blue-500 mr-2" />
          AIでアンケートを生成するサイト
        </h1>
        <p className="text-gray-500 mb-6">
          AI技術を活用してアンケートを自動生成するWebアプリケーション。自然言語での指示から最適な質問項目を提案。
        </p>
        <SubHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {activeTab === "overview" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <FaStar className="text-yellow-400 mr-2" />
                アプリケーション概要
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <FaBrain className="text-blue-500 text-xl mr-2" />
                    <span className="font-bold text-blue-700 text-lg">
                      AI生成
                    </span>
                  </div>
                  <p className="text-blue-600 text-sm">
                    自然言語から質問を自動生成
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center mb-2">
                    <FaChartPie className="text-green-500 text-xl mr-2" />
                    <span className="font-bold text-green-700 text-lg">
                      回答分析
                    </span>
                  </div>
                  <p className="text-green-600 text-sm">回答データの自動分析</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex items-center mb-2">
                    <FaCog className="text-purple-500 text-xl mr-2" />
                    <span className="font-bold text-purple-700 text-lg">
                      カスタマイズ
                    </span>
                  </div>
                  <p className="text-purple-600 text-sm">
                    質問の詳細なカスタマイズ
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "howto" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">使い方</h2>
              <p>AIアンケート生成アプリの基本的な使い方について説明。</p>
            </div>
          )}
          {activeTab === "download" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">アクセス方法</h2>
              <p>アプリケーションへのアクセス方法について。</p>
            </div>
          )}
          {activeTab === "promotion" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">AI技術の詳細</h2>
              <p>使用しているAI技術と実装の詳細について説明。</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
              <p>AIアンケート生成に関するよくある質問と回答。</p>
            </div>
          )}
          {activeTab === "tips" && (
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">活用のコツ</h2>
              <p>より効果的なアンケート生成のためのコツを紹介。</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  switch (id) {
    case "1":
      return <PortfolioDetail />;
    case "2":
      return <ShiftizeDetail />;
    case "3":
      return <ShiftGanttExcelDetail />;
    case "4":
      return <ShiftizePortfolioDetail />;
    case "5":
      return <AIQuestionnaireDetail />;
    default:
      return <div>プロジェクトが見つかりません</div>;
  }
};

export default ProjectDetailPage;
