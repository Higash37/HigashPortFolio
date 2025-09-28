import ProjectCard from "../../features/project-management/ProjectCard";
import { PROJECTS } from "../../../constants";

// プロジェクト表示用のマッピング（ProjectCardのインターフェースに合わせる）
const displayProjects = PROJECTS.map((project, index) => ({
  ...project,
  id: (index + 1).toString(), // ProjectCardで使用される数値ID
  link: project.demoUrl,
  github: project.githubUrl,
}));

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            プロジェクト一覧
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            これまでに開発したプロジェクトの一部をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
