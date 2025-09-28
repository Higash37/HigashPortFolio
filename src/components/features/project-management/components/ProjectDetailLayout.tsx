import React from "react";
import Layout from "../../../layout/Layout";
import SubHeaderTabs from "./SubHeaderTabs";
import type { TabConfig } from "../../../../types";

interface ProjectDetailLayoutProps {
  activeTab: string;
  onTabChange: (tabKey: string) => void;
  children: React.ReactNode;
  tabs?: TabConfig[];
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({
  activeTab,
  onTabChange,
  children,
  tabs,
}) => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <SubHeaderTabs
          activeTab={activeTab}
          onTabChange={onTabChange}
          tabs={tabs}
        />
        <div className="container mx-auto px-4 py-6">{children}</div>
      </div>
    </Layout>
  );
};

export default ProjectDetailLayout;
