import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaMobile,
  FaGitAlt,
  FaAndroid,
  FaApple,
  FaTable,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpo,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiWebpack,
} from "react-icons/si";

const skills = [
  {
    category: "フロントエンド",
    items: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-500" />,
      },
    ],
    icon: "🎨",
  },
  {
    category: "モバイル開発",
    items: [
      { name: "React Native", icon: <FaMobile className="text-blue-500" /> },
      { name: "Expo", icon: <SiExpo className="text-black" /> },
      { name: "Android", icon: <FaAndroid className="text-green-500" /> },
      { name: "iOS", icon: <FaApple className="text-gray-700" /> },
    ],
    icon: "📱",
  },
  {
    category: "バックエンド",
    items: [
      { name: "Node.js", icon: <FaNode className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
    ],
    icon: "⚙️",
  },
  {
    category: "ツール・その他",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Excel VBA", icon: <FaTable className="text-green-600" /> },
      { name: "Power Query", icon: <FaTable className="text-blue-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
    ],
    icon: "🛠️",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white relative z-10 w-full">
      <div className="max-w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            スキル・技術
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            使用できる技術スタックと開発ツールです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-2 block">{skill.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 text-center py-2 px-3 bg-white rounded-full text-sm flex items-center justify-center gap-2"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
