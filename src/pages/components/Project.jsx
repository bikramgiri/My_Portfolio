import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const Project = () => {
  const projects = [
    {
      title: "ChatGPT Clone",
      description: "A full-featured clone of ChatGPT developed using React.js, TypeScript, and OpenAI API integration.",
      tech: "Full Stack",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Node.js", "OpenAI API"],
      liveDemo: "https://your-chatgpt-clone.com",
      sourceCode: "https://github.com/yourusername/chatgpt-clone",
      image: "/Project.png",
    },
    {
      title: "Kalakriti E-Commerce",
      description: "Multi-user e-commerce platform built with MERN stack featuring authentication, cart, and payment gateway.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
      liveDemo: "https://kalakriti-demo.com",
      sourceCode: "https://github.com/yourusername/kalakriti-ecommerce",
      image: "/Project.png",
    },
    {
      title: "Wanderlust",
      description: "Airbnb-like web app for booking hotels, rooms, and experiences. Built with MERN stack and Map integration.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Mapbox"],
      liveDemo: "https://wanderlust-demo.com",
      sourceCode: "https://github.com/yourusername/wanderlust",
      image: "/Project.png",
    },
    {
      title: "Task Manager Pro",
      description: "Advanced task management app with real-time collaboration, drag-and-drop, and team features.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      liveDemo: "https://taskmanager-demo.com",
      sourceCode: "https://github.com/yourusername/task-manager",
      image: "/Project.png",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React, Tailwind CSS, and smooth animations showcasing projects and skills.",
      tech: "Frontend",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://your-portfolio.com",
      sourceCode: "https://github.com/yourusername/portfolio",
      image: "/Project.png",
    },
  ];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalProjects]);

  // Smooth scroll to current index
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 400;
      const gap = 32; // gap-8 = 32px
      const offset = currentIndex * (cardWidth + gap);
      scrollRef.current.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-4">
            Projects
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-black/60 backdrop-blur-md rounded-full text-blue-400 hover:bg-blue-900/60 hover:text-white hover:scale-110 transition-all duration-300 shadow-2xl"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-black/60 backdrop-blur-md rounded-full text-blue-400 hover:bg-blue-900/60 hover:text-white hover:scale-110 transition-all duration-300 shadow-2xl"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Scrollable Projects */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-80 sm:w-96 md:w-[420px] snap-start"
              >
                <div className="group bg-gradient-to-br from-blue-900/20 to-blue-950/40 backdrop-blur-md rounded-3xl overflow-hidden border border-blue-800/50 shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 md:h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    {/* Full Stack Badge */}
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full shadow-lg">
                      {project.tech}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech Stack Badges - Matching Image Style */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-blue-900/60 text-blue-300 text-sm font-medium rounded-full border border-blue-700/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-blue-800/40">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800/70 text-gray-200 rounded-xl hover:bg-gray-700 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex justify-center gap-3 mt-10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-blue-400 w-10 h-3"
                    : "bg-gray-600 w-3 h-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Project;