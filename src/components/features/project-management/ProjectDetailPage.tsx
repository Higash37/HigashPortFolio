import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../ui/loading/SkeletonLoader";

// Lazy load project detail components
const PortfolioDetail = lazy(() => import("./details/PortfolioDetail"));
const ShiftizeDetail = lazy(() => import("./details/ShiftizeDetail"));
const ShiftGanttExcelDetail = lazy(
  () => import("./details/ShiftGanttExcelDetail")
);
const ShiftizePortfolioDetail = lazy(
  () => import("./details/ShiftizePortfolioDetail")
);
const AIQuestionnaireDetail = lazy(
  () => import("./details/AIQuestionnaireDetail")
);

// Project ID to component mapping
const PROJECT_COMPONENTS = {
  "1": PortfolioDetail,
  "2": ShiftizeDetail,
  "3": ShiftGanttExcelDetail,
  "4": ShiftizePortfolioDetail,
  "5": AIQuestionnaireDetail,
} as const;

const NotFoundProject: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        プロジェクトが見つかりません
      </h1>
      <p className="text-gray-600">
        指定されたプロジェクトは存在しないか、削除された可能性があります。
      </p>
    </div>
  </div>
);

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || !(id in PROJECT_COMPONENTS)) {
    return <NotFoundProject />;
  }

  const ProjectComponent =
    PROJECT_COMPONENTS[id as keyof typeof PROJECT_COMPONENTS];

  return (
    <Suspense fallback={<SkeletonLoader type="section" />}>
      <ProjectComponent />
    </Suspense>
  );
};

export default ProjectDetailPage;
