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
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-blue-500 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getIcon(project.type)}</span>
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

      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{project.description}</p>

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

      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200 w-full text-center"
          >
            デモ/ソースを見る
          </a>
        )}
        {project.github && project.link !== project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm transition-colors duration-200 w-full text-center"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
