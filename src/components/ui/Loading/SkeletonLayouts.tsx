import SkeletonLoader from "./SkeletonLoader";

export const SkeletonLayouts = {
  header: () => <SkeletonLoader type="header" />,

  story: () => (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 w-full animate-pulse">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-8"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-300 rounded w-48 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  philosophy: () => <SkeletonLoader type="section" />,

  projects: () => (
    <div className="py-16 bg-gray-50 w-full animate-pulse">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonLoader key={i} type="card" />
          ))}
        </div>
      </div>
    </div>
  ),

  skills: () => <SkeletonLoader type="section" />,

  about: () => (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 w-full">
      <div className="max-w-6xl mx-auto px-4 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-white/20 rounded mb-4"></div>
              <div className="h-6 bg-white/20 rounded w-3/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white/20 rounded w-full"></div>
                <div className="h-4 bg-white/20 rounded w-5/6"></div>
                <div className="h-4 bg-white/20 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  footer: () => (
    <div className="bg-gray-800 py-8 w-full animate-pulse">
      <div className="max-w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-32 mb-1"></div>
            <div className="h-3 bg-gray-700 rounded w-64"></div>
          </div>
          <div className="flex gap-6">
            <div className="h-4 bg-gray-700 rounded w-16"></div>
            <div className="h-4 bg-gray-700 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  ),
};
