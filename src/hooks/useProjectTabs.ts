import { useState } from "react";

/**
 * プロジェクト詳細ページのタブ管理フック
 */
export const useProjectTabs = (initialTab: string = "overview") => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const switchTab = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  const isActiveTab = (tabKey: string) => {
    return activeTab === tabKey;
  };

  return {
    activeTab,
    switchTab,
    isActiveTab,
  };
};
