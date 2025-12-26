import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, ShieldCheckIcon, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  const [filter, setFilter] = useState("all"); // "all" or "featured"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 3 projects per page (3 per row on lg+)

  const projects = [
    {
      title: "ChatGPT Clone",
      description: "A full-featured clone of ChatGPT developed using React.js, TypeScript, and OpenAI API integration.",
      tech: "Full Stack",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Node.js", "OpenAI API"],
      liveDemo: "https://your-chatgpt-clone.com",
      sourceCode: "https://github.com/yourusername/chatgpt-clone",
      image: "/Project.png",
      featured: false,
    },
    {
      title: "Kalakriti E-Commerce",
      description: "Multi-user e-commerce platform built with MERN stack featuring authentication, cart, and payment gateway.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
      liveDemo: "https://kalakriti-demo.com",
      sourceCode: "https://github.com/yourusername/kalakriti-ecommerce",
      image: "/Project.png",
      featured: true,
    },
    {
      title: "Wanderlust",
      description: "Airbnb-like web app for booking hotels, rooms, and experiences. Built with MERN stack and Map integration.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Mapbox"],
      liveDemo: "https://wanderlust-demo.com",
      sourceCode: "https://github.com/yourusername/wanderlust",
      image: "/Project.png",
      featured: false,
    },
    {
      title: "Task Manager Pro",
      description: "Advanced task management app with real-time collaboration, drag-and-drop, and team features.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      liveDemo: "https://taskmanager-demo.com",
      sourceCode: "https://github.com/yourusername/task-manager",
      image: "/Project.png",
      featured: false,
    },
    {
      title: "Todo App",
      description: "A sleek and responsive todo application with CRUD operations, local storage, and dark mode support.",
      tech: "Full Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://todo-demo.com",
      sourceCode: "https://github.com/yourusername/todo-app",
      image: "/Project.png",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React, Tailwind CSS, and smooth animations showcasing projects and skills.",
      tech: "Frontend",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      liveDemo: "https://your-portfolio.com",
      sourceCode: "https://github.com/yourusername/portfolio",
      image: "/Project.png",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location search, forecasts, and beautiful UI using OpenWeather API.",
      tech: "Frontend",
      techStack: ["React", "Tailwind CSS", "OpenWeather API"],
      liveDemo: "https://weather-demo.com",
      sourceCode: "https://github.com/yourusername/weather-app",
      image: "/Project.png",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "Full-featured blogging platform with user auth, rich text editor, and comment system.",
      tech: "Full Stack",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      liveDemo: "https://blog-demo.com",
      sourceCode: "https://github.com/yourusername/blog-platform",
      image: "/Project.png",
      featured: true,
    },
  ];

  // Filter projects
  const filteredProjects = filter === "featured"
    ? projects.filter(p => p.featured)
    : projects;

  // Pagination logic
  const totalItems = filteredProjects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const allCount = projects.length;
  const featuredCount = projects.filter(p => p.featured).length;

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // Reset page when filter changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-4">
            Projects
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mt-4">
            Here are some of the projects I’ve worked on recently. If you have a project in mind, feel free to get in touch.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 md:mb-12">
          <button
            onClick={() => handleFilterChange("all")}
            className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
              filter === "all"
                ? "bg-blue-600 text-white hover:bg-blue-800"
                : "bg-blue-900/95 text-gray-300 hover:bg-blue-900/60"
            }`}
          >
            All Projects ({allCount})
          </button>
          <button
            onClick={() => handleFilterChange("featured")}
            className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === "featured"
                ? "bg-blue-600 text-white hover:bg-blue-800"
                : "bg-blue-900/95 text-gray-300 hover:bg-blue-900/60"
            }`}
          >
            <Star className="w-5 h-5" />
            Featured ({featuredCount})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {paginatedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-900/20 to-blue-950/40 backdrop-blur-md rounded-3xl overflow-hidden border border-blue-800/50 shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div> */}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-48">
                  <span className="px-2 py-1 bg-green-600 dark:text-white text-sm font-medium rounded-full flex items-center gap-1.5 border border-green-500/50">
                    <ShieldCheckIcon className="w-3 h-3 dark:text-white" />
                    Verified
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-orange-600 dark:text-white text-sm font-medium rounded-full flex items-center gap-1.5 border border-orange-500/50">
                      <StarIcon className="w-3 h-3 dark:text-white" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Tech Badge */}
                <div className="absolute top-45 left-75 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 dark:text-white text-sm font-bold rounded-full shadow-lg">
                  {project.tech}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-6 space-y-6">
                <h3 className="text-2xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-900/60 text-blue-300 text-sm font-small rounded-full border border-blue-700/50 shadow-sm"
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
                  <Link
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-2 py-3 bg-gray-900 text-gray-200 rounded-xl hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </Link>
                  <Link
                    to={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-2 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              disabled={currentPage === 1}
              className={`cursor-pointer p-3 rounded-full transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-800/50 text-gray-600 cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-900/60 text-blue-400 hover:bg-blue-800/80 hover:scale-110 shadow-lg"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Pagination */}
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === i + 1
                      ? "bg-blue-400 w-6 h-3 shadow-lg shadow-blue-500/50"
                      : "bg-gray-600 w-3 h-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={goNext}
              disabled={currentPage === totalPages}
              className={`cursor-pointer p-3 rounded-full transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-800/50 text-gray-600 cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-900/60 text-blue-400 hover:bg-blue-800/80 hover:scale-110 shadow-lg"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;