import { useState, useEffect } from "react";
import NavigationHeader from "./NavigationHeader";
import Sidebar from "./Sidebar";
import SkeletonLoader from "./SkeletonLoader";

interface LayoutProps {
  children: React.ReactNode;
}

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
        <main className="flex-1 lg:ml-80 pt-20">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
