// Reactフック
import { useState, useEffect } from "react";
// 内部コンポーネント
import NavigationHeader from "./navigation/NavigationHeader.tsx";
import Sidebar from "./navigation/Sidebar.tsx";
import SkeletonLoader from "../ui/loading/SkeletonLoader.tsx";
// 共通型定義
import type { LayoutProps } from "../../types/index.ts";

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarLoaded, setIsSidebarLoaded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // サイドバーを少し遅れて読み込む
    const timer = setTimeout(() => {
      setIsSidebarLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationHeader onMenuToggle={toggleSidebar} />

      <div className="flex">
        {/* サイドバー */}
        {isSidebarLoaded ? (
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        ) : (
          <div className="hidden lg:block">
            <div className="fixed top-20 left-0 z-50">
              <SkeletonLoader type="sidebar" />
            </div>
          </div>
        )}

        {/* メインコンテンツ */}
        <main className="flex-1 lg:ml-80 pt-20">
          <div className="max-w-7xl mx-auto px-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
