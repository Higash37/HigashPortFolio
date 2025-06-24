const skills = [
  {
    category: "フロントエンド",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    icon: "🎨",
  },
  {
    category: "モバイル開発",
    items: ["React Native", "Expo", "Android", "iOS"],
    icon: "📱",
  },
  {
    category: "バックエンド",
    items: ["Node.js", "Express", "MongoDB", "Firebase"],
    icon: "⚙️",
  },
  {
    category: "ツール・その他",
    items: ["Git", "Excel VBA", "Power Query", "Vite", "Webpack"],
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
                    className="text-gray-600 text-center py-1 px-3 bg-white rounded-full text-sm"
                  >
                    {item}
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
