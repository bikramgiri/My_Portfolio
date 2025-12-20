import React from "react";
import { 
  ExternalLink, 
  Calendar, 
  Play, 
  BookOpen 
} from "lucide-react";
import { Link } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      title: "Content Creator",
      company: "YouTube",
      period: "2021 - Present",
      icon: <Play className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />,
      link: "https://www.youtube.com/@technologyknowledgee",
      linkText: "View Channel",
      responsibilities: [
        "Creating engaging tech tutorials, web development guides, and programming content",
        "Growing and managing a tech-focused audience on YouTube",
        "Scripting, filming, editing, and optimizing videos for better reach"
      ]
    },
    {
      title: "Blog Writer",
      company: "Bikram's Blog",
      period: "2020 - Present",
      icon: <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />,
      link: "https://giribikram.com.np/",
      linkText: "View Blogs",
      responsibilities: [
        "Writing in-depth articles on web development, React.js, Tailwind CSS, and modern frontend technologies",
        "Sharing personal projects, learning experiences, and coding tips",
        "Building a personal brand through consistent, high-quality technical content"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br  bg-gray-900 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4">
            Experience
          </h2>
          <div className="w-32 sm:w-40 md:w-48 h-1 bg-blue-400 mx-auto rounded-full shadow-md shadow-blue-500/50"></div>
        </div>

        {/* Experience Items - Stack vertically on mobile */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="relative flex flex-col items-center"
            >
              {/* Timeline Dot - Always centered on mobile */}
              <div className="absolute top-0 z-10">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full ring-8 ring-blue-900/50 shadow-xl shadow-blue-500/40"></div>
              </div>

              {/* Vertical Timeline Line - Hidden on mobile, shown on large screens */}
              {index < experiences.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent -z-10"></div>
              )}

              {/* Experience Card */}
              <div className="w-full max-w-3xl mt-8">
                <div className="group bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="p-4 bg-blue-500/20 rounded-2xl flex-shrink-0">
                        {experience.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl text-gray-300">
                          <span className="font-semibold text-blue-400">{experience.company}</span>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-400">{experience.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button - Full width on mobile */}
                    <Link
                      to={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      {experience.linkText}
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-2xl hover:bg-blue-500/15 transition-colors">
                        <div className="flex-shrink-0 w-2.5 h-2.5 bg-blue-400 rounded-full mt-2.5"></div>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;