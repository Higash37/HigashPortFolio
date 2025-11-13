/**
 * メインアプリケーションコンポーネント
 *
 * ディレクトリ構造最適化の提案：
 * 1. 型定義を src/types/ に統一
 * 2. 定数を src/constants/ に統一
 * 3. ユーティリティ関数を src/utils/ に統一
 * 4. コンポーネントを機能別に整理
 *
 * ファイル命名規則：
 * - コンポーネント: PascalCase
 * - ユーティリティ関数: camelCase
 * - 定数: UPPER_SNAKE_CASE
 * - ファイル名: kebab-case (ディレクトリ) / PascalCase (コンポーネント)
 */
import { useState, useEffect, lazy, Suspense } from "react";
// アニメーションライブラリ - 重いアニメーションはパフォーマンスに注意
import { motion } from "framer-motion";

// 共通型定義
import type { ModalContent } from "../types";

// 基本レイアウト - 常に必要なため直接インポート
import Layout from "../components/layout/Layout";
// UI共通コンポーネント
import SkeletonLoader from "../components/ui/loading/SkeletonLoader";
// PWA機能 - ユーザー体験向上のため
import PWAInstaller from "../components/features/pwa/PWAInstaller";
// SEO対応 - 検索エンジン最適化
import SEO from "../components/features/seo/SEO";
// モーダル機能 - プロジェクト詳細表示用
import Modal from "../components/ui/modal/Modal";

// メインスタイル
import "../styles/App.css";

// 【重要】Lazy Loading - 初期表示速度向上のため段階的にコンポーネントを読み込み
// 注意: dynamic importのため、コンポーネントが見つからない場合はエラーになる
const Header = lazy(() => import("../components/layout/header/Header"));
const DevelopmentPhilosophy = lazy(
  () => import("../components/sections/philosophy/DevelopmentPhilosophy")
);
const MyStory = lazy(() => import("../components/sections/story/MyStory"));
const ProjectsSection = lazy(
  () => import("../components/sections/projects/ProjectsSection")
);
const SkillsSection = lazy(
  () => import("../components/sections/skills/SkillsSection")
);
const AboutSection = lazy(
  () => import("../components/sections/about/AboutSection")
);
const Footer = lazy(() => import("../components/layout/footer/Footer"));

// セクション読み込み状態管理用の型定義
// 各セクションの読み込み完了状態を個別に追跡
interface LoadedSections {
  header: boolean;
  story: boolean;
  philosophy: boolean;
  projects: boolean;
  skills: boolean;
  about: boolean;
  footer: boolean;
}

function App() {
  // 【重要】Progressive Loading - 段階的なセクション読み込み状態管理
  // 初期値はすべてfalse = まだ読み込まれていない状態
  const [loadedSections, setLoadedSections] = useState<LoadedSections>({
    header: false,
    story: false,
    philosophy: false,
    projects: false,
    skills: false,
    about: false,
    footer: false,
  });

  // モーダル表示状態管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  // モーダル開く処理 - プロジェクト詳細表示等で使用
  // 注意: contentが未定義の場合はエラーになるため、呼び出し元で検証必要
  const handleOpenModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // モーダル閉じる処理 - 状態を初期化
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null); // メモリリーク防止のためnullに戻す
  };

  // 【メインロジック】Progressive Loading Effect - 段階的セクション読み込み
  useEffect(() => {
    const loadSections = async () => {
      // 読み込み順序を定義 - UXを考慮した順番
      const sections: (keyof LoadedSections)[] = [
        "header", // 最初にヘッダー
        "story", // ストーリー部分
        "philosophy", // 開発理念
        "projects", // プロジェクト一覧
        "skills", // スキル情報
        "about", // 自己紹介
        "footer", // 最後にフッター
      ];

      // 各セクションの読み込み遅延時間（ミリ秒）
      // 注意: あまり長すぎるとユーザビリティが悪化
      const delays = [500, 400, 400, 400, 300, 300, 200];

      // 順次読み込み実行
      for (let i = 0; i < sections.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, delays[i]));
        // 前の状態を保持しながら特定セクションのみ更新
        setLoadedSections((prev) => ({ ...prev, [sections[i]]: true }));
      }
    };

    // 初回レンダリング時のみ実行（依存配列が空）
    loadSections();
  }, []); // 注意: 依存配列を空にしているので、コンポーネントの再レンダリングでは実行されない

  // 【UI定義】各セクション用のスケルトンローダー
  // 実際のコンテンツが読み込まれるまでの間、ユーザーに視覚的フィードバックを提供
  const skeletons = {
    header: <SkeletonLoader type="header" />, // 共通ローダー使用
    // ストーリーセクション専用スケルトン
    story: (
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 w-full animate-pulse">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
          <div className="space-y-8">
            {/* タイムライン形式のスケルトン表示 */}
            {Array.from({ length: 3 }, (_, i) => (
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
    philosophy: <SkeletonLoader type="section" />, // 共通セクションローダー使用
    // プロジェクトセクション専用スケルトン - カード形式
    projects: (
      <div className="py-16 bg-gray-50 w-full animate-pulse">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* プロジェクトカードのスケルトンを４つ表示 */}
            {Array.from({ length: 4 }, (_, i) => (
              <SkeletonLoader key={i} type="card" />
            ))}
          </div>
        </div>
      </div>
    ),
    skills: <SkeletonLoader type="section" />, // 共通セクションローダー使用
    // Aboutセクション専用スケルトン - グラデーション背景
    about: (
      <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 w-full">
        <div className="max-w-6xl mx-auto px-4 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ２カラムレイアウトのスケルトン */}
            {Array.from({ length: 2 }, (_, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg">
                <div className="w-12 h-12 bg-white/20 rounded mb-4"></div>
                <div className="h-6 bg-white/20 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  {/* 複数行のテキストスケルトン */}
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
    // フッター専用スケルトン - ダークテーマ
    footer: (
      <div className="bg-gray-800 py-8 w-full animate-pulse">
        <div className="max-w-full px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 左側: メイン情報 */}
            <div className="mb-4 md:mb-0">
              <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-32 mb-1"></div>
              <div className="h-3 bg-gray-700 rounded w-64"></div>
            </div>
            {/* 右側: ナビゲーションリンク */}
            <div className="flex gap-6">
              <div className="h-4 bg-gray-700 rounded w-16"></div>
              <div className="h-4 bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  // 【レンダリング部】メインコンポーネント
  return (
    // 全体のフェードインアニメーション - 0.4秒で実行
    <motion.div
      initial={{ opacity: 0 }} // 初期状態: 透明
      animate={{ opacity: 1 }} // 最終状態: 不透明
      transition={{ duration: 0.4 }} // アニメーション時間
    >
      <Layout>
        {/* SEO対応 - メタタグ等を設定 */}
        <SEO />
        {/* PWA機能 - インストール促進 */}
        <PWAInstaller />

        {/* ヘッダーセクション - 最初に表示される重要な部分 */}
        <Suspense fallback={skeletons.header}>
          {/* 読み込み完了時は実際のコンポーネント、未完了時はスケルトン表示 */}
          {loadedSections.header ? <Header /> : skeletons.header}
        </Suspense>

        {/* ストーリーセクション - 自己紹介的なコンテンツ */}
        <Suspense fallback={skeletons.story}>
          {loadedSections.story ? <MyStory /> : skeletons.story}
        </Suspense>

        {/* 開発理念セクション - モーダル機能付き */}
        <Suspense fallback={skeletons.philosophy}>
          {loadedSections.philosophy ? (
            // 注意: onCardClickでモーダル表示機能を提供
            <DevelopmentPhilosophy onCardClick={handleOpenModal} />
          ) : (
            skeletons.philosophy
          )}
        </Suspense>

        {/* プロジェクトセクション - 作品一覧 */}
        <Suspense fallback={skeletons.projects}>
          {loadedSections.projects ? <ProjectsSection /> : skeletons.projects}
        </Suspense>

        {/* スキルセクション - モーダル機能付き */}
        <Suspense fallback={skeletons.skills}>
          {loadedSections.skills ? (
            // 注意: onCardClickでスキル詳細をモーダル表示
            <SkillsSection onCardClick={handleOpenModal} />
          ) : (
            skeletons.skills
          )}
        </Suspense>

        {/* 自己紹介セクション - 詳細なプロフィール */}
        <Suspense fallback={skeletons.about}>
          {loadedSections.about ? <AboutSection /> : skeletons.about}
        </Suspense>

        {/* フッターセクション - 最後に表示 */}
        <Suspense fallback={skeletons.footer}>
          {loadedSections.footer ? <Footer /> : skeletons.footer}
        </Suspense>
      </Layout>

      {/* 【重要】モーダル表示部 - 詳細コンテンツ表示用 */}
      {/* 注意: isModalOpenがfalseの時は完全に非表示になる */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent && ( // modalContentが存在する場合のみレンダリング
          <div>
            <h2 className="text-3xl font-bold mb-4">{modalContent.title}</h2>
            {/* whitespace-pre-lineで改行文字を適切に表示 */}
            <div className="text-gray-700 whitespace-pre-line">
              {modalContent.description}
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
}

// 【注意事項】
// 1. Lazy Loadingにより初期バンドルサイズを削減
// 2. Progressive Loadingでユーザー体験を向上
// 3. 各セクションは独立してレンダリング可能
// 4. モーダルはグローバル状態で管理
// 5. スケルトンローダーでローディング状態を視覚化
// 6. Suspenseによりエラーハンドリングが可能

export default App;
