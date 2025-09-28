import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  type: "web" | "mobile" | "excel" | "other";
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "web":
        return "🌐";
      case "mobile":
        return "📱";
      case "excel":
        return "📊";
      default:
        return "💻";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "web":
        return "bg-blue-100 text-blue-800";
      case "mobile":
        return "bg-green-100 text-green-800";
      case "excel":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {project.title === "ポートフォリオサイト" ? (
            <img
              src="/icons/icon.png"
              alt="ポートフォリオ"
              className="w-8 h-8 rounded-full"
            />
          ) : project.title.includes("Shiftize") ? (
            <img
              src="/images/projects/ShiftizeIcon.png"
              alt="Shiftize"
              className="w-8 h-8 rounded-full"
            />
          ) : project.title.includes("AIでアンケート") ? (
            <img
              src="/images/projects/SciscitorAI.png"
              alt="Sciscitor AI"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <span className="text-2xl">{getIcon(project.type)}</span>
          )}
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
            project.type
          )}`}
        >
          {project.type.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto pt-4 border-t border-gray-200">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm transition-colors duration-200 flex-1 text-center"
          >
            🚀 アプリを開く
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded text-sm transition-colors duration-200 flex-1 text-center"
          >
            📚 ソースを見る
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
