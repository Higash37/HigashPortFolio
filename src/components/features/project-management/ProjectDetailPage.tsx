import React from "react";
import { useParams } from "react-router-dom";

// シンプルなプロジェクト詳細コンポーネント
const ProjectDetail: React.FC<{ id: string }> = ({ id }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        プロジェクト詳細 #{id}
      </h1>
      <p className="text-gray-600">
        プロジェクトの詳細情報はこちらに表示されます。
      </p>
    </div>
  </div>
);

// プロジェクトが見つからない場合のコンポーネント
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

  if (!id) {
    return <NotFoundProject />;
  }

  return <ProjectDetail id={id} />;
};

export default ProjectDetailPage;
