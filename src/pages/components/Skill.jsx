import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS/Tailwind", level: 85 },
        { name: "Next.js", level: 70 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 70 },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 70 },
        { name: "C++", level: 40 },
        { name: "C", level: 60 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 50 },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Canva", level: 80 },
        { name: "PowerPoint", level: 90 },
        { name: "Figma", level: 30 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-950 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-4">
            Skills
          </h2>
          <div className="w-20 sm:w-28 md:w-36 lg:w-44 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        {/* Responsive Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-900/30 to-blue-950/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-800/40 shadow-2xl hover:shadow-blue-500/40 hover:border-blue-600/70 hover:-translate-y-3 transition-all duration-500"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-300 mb-5 sm:mb-7 tracking-wide">
                {category.title}
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    {/* Skill Name & Percentage */}
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold text-sm sm:text-base">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Clean Single-Color Blue Progress Bar */}
                    <div className="relative w-full bg-gray-800/80 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                      <div
                        className="absolute inset-y-0 left-0 bg-blue-500 rounded-full shadow-lg shadow-blue-400/40"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 2s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {/* Subtle inner highlight for depth */}
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-blue-400/50 rounded-full"></div>
                        
                        {/* Soft glow effect */}
                        <div className="absolute inset-y-0 -right-2 w-4 bg-blue-400/30 blur-lg"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;