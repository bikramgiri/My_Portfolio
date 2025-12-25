import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      degree: "BSc CSIT (Bachelor of Science in Computer Science and Information Technology)",
      institution: "Tribhuvan University (TU)",
      location: "Sushma Godawari College, Itahari",
      period: "February 2023 - Present",
      description:
        "This program provides a comprehensive foundation in computing, covering key areas such as software development, database management, networking, cybersecurity, and artificial intelligence. The course emphasizes practical application, problem-solving, and industry-relevant skills.",
    },
    {
      degree: "Higher Education (+2) in Science",
      institution: "Koshi St. James College & Higher Secondary School",
      location: "Itahari-9, Sunsari",
      period: "May 2021 - April 2023",
      description: null,
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Gyanodya Academy || Samata Shikshya Niketan Secondary School",
      location: "Itahari-4, Sunsari",
      period: "May 2012 - March 2021",
      description: null,
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-gray-950/94 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4">
            Education
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/40"></div>
        </div>

        {/* Education Timeline - Vertical stack on all screens */}
        <div className="space-y-12 md:space-y-16 lg:space-y-10">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* Timeline Line & Dot */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full ring-8 ring-black shadow-xl shadow-blue-500/50 z-10"></div>
                
                {/* Line - Hidden on last item */}
                {index < educationList.length - 1 && (
                  <div className="w-1 bg-gradient-to-b from-blue-500 to-transparent flex-1 mt-4 -mb-4 opacity-50"></div>
                )}
              </div>

              {/* Education Card */}
              <div className="flex-1 pb-12 md:pb-2">
                <div className="bg-gradient-to-r bg-blue-900/30 to-transparent backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  
                  {/* Header with Icon */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 mb-4">
                    <div className="p-3 md:p-4 bg-blue-500/20 rounded-2xl flex-shrink-0">
                      <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300">
                        {edu.institution}
                        {edu.location && (
                          <span className="text-gray-500">, {edu.location}</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-3 text-blue-400 font-medium mb-6">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-base md:text-lg">{edu.period}</span>
                  </div>

                  {/* Description - Only shown for current degree */}
                  {edu.description && (
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;