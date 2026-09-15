import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationList = [
    {
      degree:
        "BSc CSIT (Bachelor of Science in Computer Science and Information Technology)",
      institution: "Tribhuvan University (TU), Sushma Godawari College",
      location: "Itahari-7, Sunsari",
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
      institution:
        "Gyanodya Academy || Samata Shikshya Niketan Secondary School",
      location: "Itahari-4, Sunsari",
      period: "May 2012 - March 2021",
      description: null,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gray-950/94 py-12 sm:py-16 md:py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4">
            Education
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/40"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-transparent" />

          {/* Education Timeline */}
          <div className="relative space-y-12 md:space-y-13 lg:space-y-14">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 md:gap-8 pl-14 sm:pl-16 md:pl-20 lg:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] lg:left-[42px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-700 border-4 border-white shadow-lg shadow-blue-500/50 z-10" />

                {/* Education Card */}
                <div className="flex-1">
                  <div className="bg-gradient-to-r bg-blue-900/30 to-transparent backdrop-blur-sm rounded-2xl md:rounded-2xl p-6 md:p-8 border border-blue-800/30 hover:border-blue-600/25 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/10">
                    {/* Header with Icon */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="p-3 md:p-4 bg-blue-500/20 rounded-2xl flex-shrink-0">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-base sm:text-xl md:text-2xl text-gray-300">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex sm:flex-row gap-8 text-gray-400 font-medium mb-5 md:mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg text-blue-400 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-lg text-blue-400 font-medium">
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <p className="text-base md:text-lg text-gray-300/80 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
