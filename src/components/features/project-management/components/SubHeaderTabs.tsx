import React from "react";
import {
  FaChartBar,
  FaUserClock,
  FaDownload,
  FaStar,
  FaQuestionCircle,
  FaRegLightbulb,
} from "react-icons/fa";
import type { TabConfig } from "../../../../types";

interface SubHeaderTabsProps {
  activeTab: string;
  onTabChange: (tabKey: string) => void;
  tabs?: TabConfig[];
}

const DEFAULT_TABS: TabConfig[] = [
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
];

const SubHeaderTabs: React.FC<SubHeaderTabsProps> = ({
  activeTab,
  onTabChange,
  tabs = DEFAULT_TABS,
}) => {
  return (
    <div className="flex gap-4 border-b border-gray-200 bg-white sticky top-0 z-20 px-4 py-2 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`px-4 py-2 font-semibold border-b-2 transition-colors duration-200 flex items-center gap-1 ${
            activeTab === tab.key
              ? "border-blue-500 text-blue-700 bg-blue-50"
              : "border-transparent text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SubHeaderTabs;
