import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import PWAInstaller from "../components/features/pwa/PWAInstaller";
import SEO from "../components/features/seo/SEO";
import Modal from "../components/ui/modal/Modal";
import { useProgressiveLoading, useModal } from "../hooks";
import { SkeletonLayouts } from "../components/ui/loading/SkeletonLayouts";
import "../styles/App.css";

// Lazy load components for better performance
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

function App() {
  // カスタムフックの適用
  const { loadedSections } = useProgressiveLoading();
  const {
    isOpen: isModalOpen,
    content: modalContent,
    openModal,
    closeModal,
  } = useModal();

  // スケルトンローダーの統合
  const skeletons = SkeletonLayouts;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Layout>
        <SEO />
        <PWAInstaller />

        {/* Header Section */}
        <Suspense fallback={<skeletons.header />}>
          {loadedSections.header ? <Header /> : <skeletons.header />}
        </Suspense>

        {/* My Story Section - NEW */}
        <Suspense fallback={<skeletons.story />}>
          {loadedSections.story ? <MyStory /> : <skeletons.story />}
        </Suspense>

        {/* Development Philosophy Section */}
        <Suspense fallback={<skeletons.philosophy />}>
          {loadedSections.philosophy ? (
            <DevelopmentPhilosophy onCardClick={openModal} />
          ) : (
            <skeletons.philosophy />
          )}
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<skeletons.projects />}>
          {loadedSections.projects ? (
            <ProjectsSection />
          ) : (
            <skeletons.projects />
          )}
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<skeletons.skills />}>
          {loadedSections.skills ? (
            <SkillsSection onCardClick={openModal} />
          ) : (
            <skeletons.skills />
          )}
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<skeletons.about />}>
          {loadedSections.about ? <AboutSection /> : <skeletons.about />}
        </Suspense>

        {/* Footer Section */}
        <Suspense fallback={<skeletons.footer />}>
          {loadedSections.footer ? <Footer /> : <skeletons.footer />}
        </Suspense>
      </Layout>

      {/* Modal for detailed content */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent && (
          <div>
            <h2 className="text-3xl font-bold mb-4">{modalContent.title}</h2>
            <div className="text-gray-700 whitespace-pre-line">
              {modalContent.description}
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
}

export default App;
