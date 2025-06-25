import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/SkeletonLoader";
import PWAInstaller from "./components/PWAInstaller";
import SEO from "./components/SEO";
import "./App.css";

function App() {
  const [loadedSections, setLoadedSections] = useState({
    header: false,
    projects: false,
    skills: false,
    about: false,
    footer: false,
  });

  useEffect(() => {
    // 段階的にセクションを読み込む
    const loadSections = async () => {
      // ヘッダーを読み込み
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoadedSections((prev) => ({ ...prev, header: true }));

      // プロジェクトセクションを読み込み
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoadedSections((prev) => ({ ...prev, projects: true }));

      // スキルセクションを読み込み
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoadedSections((prev) => ({ ...prev, skills: true }));

      // 自己紹介セクションを読み込み
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoadedSections((prev) => ({ ...prev, about: true }));

      // フッターを読み込み
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoadedSections((prev) => ({ ...prev, footer: true }));
    };

    loadSections();
  }, []);
  return (
    <Layout>
      {/* SEO設定 */}
      <SEO />

      {/* PWA インストールプロンプト */}
      <PWAInstaller />

      {/* ヘッダーセクション */}
      {loadedSections.header ? <Header /> : <SkeletonLoader type="header" />}

      {/* プロジェクトセクション */}
      {loadedSections.projects ? (
        <ProjectsSection />
      ) : (
        <div className="py-16 bg-gray-50 w-full animate-pulse">
          <div className="max-w-6xl mx-auto px-4">
            <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <SkeletonLoader key={i} type="card" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* スキルセクション */}
      {loadedSections.skills ? (
        <SkillsSection />
      ) : (
        <SkeletonLoader type="section" />
      )}

      {/* 自己紹介セクション */}
      {loadedSections.about ? (
        <AboutSection />
      ) : (
        <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 w-full">
          <div className="max-w-6xl mx-auto px-4 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
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
      )}

      {/* フッター */}
      {loadedSections.footer ? (
        <Footer />
      ) : (
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
                <div className="h-4 bg-gray-700 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
