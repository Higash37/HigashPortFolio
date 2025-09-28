import type { ModalContent } from "../../../types";
import { SKILLS_DATA } from "../../../constants/skills";

interface SkillsSectionProps {
  onCardClick: (content: ModalContent) => void;
}

const SkillsSection = ({ onCardClick }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-16 bg-white relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            利用したことのあるスキル・技術
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            基本的にAIでコーディングしているため、コーディングしてからそのコードを基に学習しています。
            そのライブラリが他とどう違うのかなどを比較し、それぞれの強みを理解していくことが非常に好きです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((skill, index) => (
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
                    className="text-gray-600 text-center py-2 px-3 bg-white rounded-full text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100"
                    onClick={() =>
                      onCardClick({
                        title: item.name,
                        description: item.description,
                      })
                    }
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
