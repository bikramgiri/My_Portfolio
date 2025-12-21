import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  const projects = [
    {
      title: "Content Management System",
      description: "A powerful CMS built with modern technologies for managing digital content efficiently.",
      tech: "Full Stack",
      liveDemo: "https://your-cms-demo.com",
      sourceCode: "https://github.com/bikramgiri/content-management-system",
      image: "/Project.png",
    },
    {
      title: "Online Food Ordering System",
      description: "Full-featured food delivery platform with restaurant menu, cart, and payment integration.",
      tech: "Full Stack",
      liveDemo: "https://your-food-demo.com",
      sourceCode: "https://github.com/bikramgiri/food-ordering-system",
      image: "/Project.png",
    },
    {
      title: "Real-Time ChatApp",
      description: "Full-stack real-time chatting application with socket.io for instant messaging.",
      tech: "Full Stack",
      liveDemo: "https://your-chatapp-demo.com",
      sourceCode: "https://github.com/bikramgiri/chatapp",
      image: "/Project.png",
    },
    {
      title: "BookStore E-commerce",
      description: "Online bookstore with search, cart, wishlist, and secure checkout features.",
      tech: "Full Stack",
      liveDemo: "https://your-bookstore-demo.com",
      sourceCode: "https://github.com/bikramgiri/bookstore",
      image: "/Project.png",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-4">
            My Projects
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/40"></div>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Here are some of the projects I've worked on
          </p>
        </div>

        {/* Projects Grid - Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-900/30 to-blue-950/60 backdrop-blur-md  rounded-2xl md:rounded-3xl overflow-hidden border border-blue-900/40 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 md:h-56 lg:h-64">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Tech Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-gray-700 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                  {project.tech}
                </div>
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 md:p-6 lg:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons - Stack on mobile, row on larger */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/70 text-gray-300 rounded-xl hover:bg-gray-700 hover:text-white transition-all duration-300 text-sm md:text-base"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                    Code
                  </a>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Hover Glow Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;