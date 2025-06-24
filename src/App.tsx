import Layout from "./components/Layout";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Layout>
      <Header />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <Footer />
    </Layout>
  );
}

export default App;
