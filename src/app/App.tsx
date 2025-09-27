import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import SkeletonLoader from "../components/ui/Loading/SkeletonLoader";
import PWAInstaller from "../components/features/PWA/PWAInstaller";
import SEO from "../components/features/SEO/SEO";
import Modal from "../components/ui/Modal/Modal";
import "../styles/App.css";

// Lazy load components for better performance
const Header = lazy(() => import("../components/layout/Header/Header"));
const DevelopmentPhilosophy = lazy(
  () => import("../components/sections/Philosophy/DevelopmentPhilosophy")
);
const MyStory = lazy(() => import("../components/sections/Story/MyStory"));
const ProjectsSection = lazy(
  () => import("../components/sections/ProjectsSection")
);
const SkillsSection = lazy(
  () => import("../components/sections/Skills/SkillsSection")
);
const AboutSection = lazy(
  () => import("../components/sections/About/AboutSection")
);
const Footer = lazy(() => import("../components/layout/Footer/Footer"));

export interface ModalContent {
  title: string;
  description: React.ReactNode;
}

// Section loading state type
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
  const [loadedSections, setLoadedSections] = useState<LoadedSections>({
    header: false,
    story: false,
    philosophy: false,
    projects: false,
    skills: false,
    about: false,
    footer: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const handleOpenModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Progressive loading animation
  useEffect(() => {
    const loadSections = async () => {
      const sections: (keyof LoadedSections)[] = [
        "header",
        "story",
        "philosophy",
        "projects",
        "skills",
        "about",
        "footer",
      ];

      const delays = [500, 400, 400, 400, 300, 300, 200];

      for (let i = 0; i < sections.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, delays[i]));
        setLoadedSections((prev) => ({ ...prev, [sections[i]]: true }));
      }
    };

    loadSections();
  }, []);

  // Skeleton loader components for each section
  const skeletons = {
    header: <SkeletonLoader type="header" />,
    story: (
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
    philosophy: <SkeletonLoader type="section" />,
    projects: (
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
    skills: <SkeletonLoader type="section" />,
    about: (
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
    footer: (
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
        <Suspense fallback={skeletons.header}>
          {loadedSections.header ? <Header /> : skeletons.header}
        </Suspense>

        {/* My Story Section - NEW */}
        <Suspense fallback={skeletons.story}>
          {loadedSections.story ? <MyStory /> : skeletons.story}
        </Suspense>

        {/* Development Philosophy Section */}
        <Suspense fallback={skeletons.philosophy}>
          {loadedSections.philosophy ? (
            <DevelopmentPhilosophy onCardClick={handleOpenModal} />
          ) : (
            skeletons.philosophy
          )}
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={skeletons.projects}>
          {loadedSections.projects ? <ProjectsSection /> : skeletons.projects}
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={skeletons.skills}>
          {loadedSections.skills ? (
            <SkillsSection onCardClick={handleOpenModal} />
          ) : (
            skeletons.skills
          )}
        </Suspense>

        {/* About Section */}
        <Suspense fallback={skeletons.about}>
          {loadedSections.about ? <AboutSection /> : skeletons.about}
        </Suspense>

        {/* Footer Section */}
        <Suspense fallback={skeletons.footer}>
          {loadedSections.footer ? <Footer /> : skeletons.footer}
        </Suspense>
      </Layout>

      {/* Modal for detailed content */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
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
