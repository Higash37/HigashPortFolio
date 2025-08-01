import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import DevelopmentPhilosophy from "./components/DevelopmentPhilosophy";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/SkeletonLoader";
import PWAInstaller from "./components/PWAInstaller";
import SEO from "./components/SEO";
import Modal from "./components/Modal";
import "./App.css";

export interface ModalContent {
  title: string;
  description: React.ReactNode;
}

function App() {
  const [loadedSections, setLoadedSections] = useState({
    header: false,
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

  useEffect(() => {
    const loadSections = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoadedSections((prev) => ({ ...prev, header: true }));
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoadedSections((prev) => ({ ...prev, philosophy: true }));
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoadedSections((prev) => ({ ...prev, projects: true }));
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoadedSections((prev) => ({ ...prev, skills: true }));
      await new Promise((resolve) => setTimeout(resolve, 300));
      setLoadedSections((prev) => ({ ...prev, about: true }));
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoadedSections((prev) => ({ ...prev, footer: true }));
    };
    loadSections();
  }, []);

  return (
    <>
      <Layout>
        <SEO />
        <PWAInstaller />
        {loadedSections.header ? <Header /> : <SkeletonLoader type="header" />}
        {loadedSections.philosophy ? <DevelopmentPhilosophy onCardClick={handleOpenModal} /> : <SkeletonLoader type="section" />}
        {loadedSections.projects ? <ProjectsSection /> : <div className="py-16 bg-gray-50 w-full animate-pulse"><div className="max-w-6xl mx-auto px-4"><div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-12"></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[1, 2, 3].map((i) => (<SkeletonLoader key={i} type="card" />))}</div></div></div>}
        {loadedSections.skills ? <SkillsSection onCardClick={handleOpenModal} /> : <SkeletonLoader type="section" />}
        {loadedSections.about ? <AboutSection /> : <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 w-full"><div className="max-w-6xl mx-auto px-4 animate-pulse"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{[1, 2, 3].map((i) => (<div key={i} className="bg-white/10 p-6 rounded-lg"><div className="w-12 h-12 bg-white/20 rounded mb-4"></div><div className="h-6 bg-white/20 rounded w-3/4 mb-4"></div><div className="space-y-2"><div className="h-4 bg-white/20 rounded w-full"></div><div className="h-4 bg-white/20 rounded w-5/6"></div><div className="h-4 bg-white/20 rounded w-4/5"></div></div></div>))}</div></div></div>}
        {loadedSections.footer ? <Footer /> : <div className="bg-gray-800 py-8 w-full animate-pulse"><div className="max-w-full px-4"><div className="flex flex-col md:flex-row justify-between items-center"><div className="mb-4 md:mb-0"><div className="h-6 bg-gray-700 rounded w-48 mb-2"></div><div className="h-4 bg-gray-700 rounded w-32 mb-1"></div><div className="h-3 bg-gray-700 rounded w-64"></div></div><div className="flex gap-6"><div className="h-4 bg-gray-700 rounded w-16"></div><div className="h-4 bg-gray-700 rounded w-20"></div><div className="h-4 bg-gray-700 rounded w-24"></div></div></div></div></div>}
      </Layout>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent && (
          <div>
            <h2 className="text-3xl font-bold mb-4">{modalContent.title}</h2>
            <div className="text-gray-700 whitespace-pre-line">{modalContent.description}</div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default App;
