// スケルトンローダーメインコンポーネント
import type { SkeletonLoaderProps } from "../../../types";
const SKELETON_COUNTS = {
  navigation: 4,
  external: 2,
  cards: 6,
  features: 3,
} as const;

// スケルトンローダーメインコンポーネント
const SkeletonLoader = ({ type = "section" }: SkeletonLoaderProps) => {
  const renderHeaderSkeleton = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full animate-pulse">
      <div className="max-w-full px-4 py-16">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4"></div>
          </div>
          <div className="h-12 bg-white/20 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-white/20 rounded-lg mb-2 max-w-xs mx-auto"></div>
          <div className="h-6 bg-white/20 rounded-lg mb-8 max-w-lg mx-auto"></div>
          <div className="flex justify-center gap-4">
            <div className="h-12 w-40 bg-white/20 rounded-lg"></div>
            <div className="h-12 w-40 bg-white/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSidebarSkeleton = () => (
    <div className="bg-gray-100 w-80 h-full p-4 animate-pulse">
      <div className="flex items-center justify-center mb-6">
        <div className="h-6 bg-gray-300 rounded w-20"></div>
      </div>

      {/* プロフィール */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-28"></div>
          <div className="h-3 bg-gray-300 rounded w-36"></div>
        </div>
      </div>

      {/* ナビゲーション */}
      <div className="mb-6">
        <div className="h-5 bg-gray-300 rounded w-24 mb-3"></div>
        <div className="space-y-3">
          {Array.from({ length: SKELETON_COUNTS.navigation }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 外部リンク */}
      <div className="mb-6">
        <div className="h-5 bg-gray-300 rounded w-20 mb-3"></div>
        <div className="space-y-3">
          {Array.from({ length: SKELETON_COUNTS.external }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSectionSkeleton = () => (
    <div className="py-16 bg-white w-full animate-pulse">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: SKELETON_COUNTS.cards }, (_, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg">
              <div className="w-12 h-12 bg-gray-300 rounded mb-4"></div>
              <div className="h-5 bg-gray-300 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="w-12 h-12 bg-gray-300 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
      <div className="flex gap-2 mb-4">
        {Array.from({ length: SKELETON_COUNTS.features }, (_, i) => (
          <div key={i} className="h-6 bg-gray-300 rounded-full w-16"></div>
        ))}
      </div>
      <div className="flex gap-3">
        <div className="h-9 bg-gray-300 rounded w-20"></div>
        <div className="h-9 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  );

  switch (type) {
    case "header":
      return renderHeaderSkeleton();
    case "sidebar":
      return renderSidebarSkeleton();
    case "section":
      return renderSectionSkeleton();
    case "card":
      return renderCardSkeleton();
    default:
      return renderSectionSkeleton();
  }
};

export default SkeletonLoader;
