import { useState } from "react";
import NavigationHeader from "./NavigationHeader";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      <NavigationHeader onMenuToggle={toggleSidebar} />

      <div className="flex">
        {/* サイドバー */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* メインコンテンツ */}
        <main className="flex-1 lg:ml-80 pt-20">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
