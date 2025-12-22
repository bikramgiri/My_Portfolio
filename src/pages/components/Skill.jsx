import React from "react";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiFastapi,
  // SiRestapi,
  SiJavascript,
  SiPython,
  SiCplusplus,
  // SiJupiternootebook,
  SiC,
  // SiCharp,
  SiMongodb,
  SiMysql,
  SiCanva,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiWordpress,
  // SiMicrosoftpowerpoint,
  // SiMicrosoftword,
  SiFigma,
  SiGit,
  SiGithub,
  SiVite,
  // SiWebpack,
  SiRender,
  SiNetlify,
  SiRailway,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: <SiReact className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "HTML", icon: <SiHtml5 className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "CSS3", icon: <SiCss3 className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "WordPress", icon: <SiWordpress className="w-6 h-6 md:w-8 md:h-8" /> },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Express.js", icon: <SiExpress className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-6 h-6 md:w-8 md:h-8" /> },
        {name: "WordPress", icon: <SiWordpress className="w-6 h-6 md:w-8 md:h-8" />},
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Python", icon: <SiPython className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "C++", icon: <SiCplusplus className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "C", icon: <SiC className="w-6 h-6 md:w-8 md:h-8" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "MySQL", icon: <SiMysql className="w-6 h-6 md:w-8 md:h-8" /> },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Canva", icon: <SiCanva className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Figma", icon: <SiFigma className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="w-6 h-6 md:w-8 md:h-8" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "GitHub", icon: <SiGithub className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Vite", icon: <SiVite className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Render", icon: <SiRender className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Netlify", icon: <SiNetlify className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Railway", icon: <SiRailway className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6 md:w-8 md:h-8" /> },
        { name: "Redux", icon: <SiRedux className="w-6 h-6 md:w-8 md:h-8" /> },
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

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-900/30 to-blue-950/60 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-blue-800/40 shadow-2xl hover:shadow-blue-500/40 hover:border-blue-600/60 hover:-translate-y-4 transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300 mb-8 md:mb-10 text-center">
                {category.title}
              </h3>

              {/* Skills Grid Inside Card */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 group/item"
                  >
                    <div className="p-4 md:p-5 bg-blue-900/30 rounded-2xl text-blue-400 group-hover/item:bg-blue-800/50 group-hover/item:scale-110 transition-all duration-300 shadow-lg">
                      {skill.icon}
                    </div>
                    <span className="text-sm md:text-base text-gray-300 text-center font-medium">
                      {skill.name}
                    </span>
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