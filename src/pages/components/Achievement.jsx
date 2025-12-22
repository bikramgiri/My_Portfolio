import React, { useState } from "react";
import { ShieldCheck, Star, GraduationCap, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const Achievements = () => {
  const [filter, setFilter] = useState("all"); // "all" or "featured"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 6 certificates per page (3 per row on lg+)

  const certifications = [
    {
      title: "Full Stack Development with MERN Stack",
      issuer: "Digital Pathshala",
      date: "May 24, 2023",
      verified: true,
      featured: true,
      image: "/Certificate.png",
      techs: ["Node.js", "MongoDB", "React", "Express"],
      description: "Completed comprehensive full-stack training covering MongoDB, Express, React, and Node.js.",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Simplilearn",
      date: "June 10, 2024",
      verified: true,
      featured: false,
      image: "/Certificate.png",
      techs: ["Python", "Machine Learning"],
      description: "Gained foundational knowledge in machine learning concepts and algorithms using Python.",
    },
    {
      title: "30 Days of Next.js Workshop",
      issuer: "Digital Pathshala",
      date: "October 1, 2024",
      verified: true,
      featured: false,
      image: "/Certificate.png",
      techs: ["Next.js", "NextAuth.js"],
      description: "Participated in advanced workshop focused on Next.js 14, server actions, and authentication.",
    },
    {
      title: "Advanced Python Programming",
      issuer: "DataCamp",
      date: "September 1, 2024",
      verified: true,
      featured: true,
      image: "/Certificate.png",
      techs: ["Python", "Data Analysis"],
      description: "Completed advanced courses in Python programming and data analysis techniques.",
    },
    {
      title: "Introduction to Backend Development",
      issuer: "Great Learning",
      date: "August 15, 2024",
      verified: true,
      featured: true,
      image: "/Certificate.png",
      techs: ["Node.js", "Express", "Databases"],
      description: "Gained foundational knowledge in backend development using Node.js and Express framework.",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "June 10, 2024",
      verified: true,
      featured: false,
      image: "/Certificate.png",
      techs: ["HTML", "CSS", "JavaScript"],
      description: "Completed comprehensive web development training covering HTML, CSS, and JavaScript fundamentals.",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Coursera",
      date: "April 5, 2024",
      verified: true,
      featured: false,
      image: "/Certificate.png",
      techs: ["AI", "Machine Learning"],
      description: "Completed foundational courses in artificial intelligence and machine learning concepts.",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google UX Design",
      date: "March 20, 2024",
      verified: true,
      featured: false,
      image: "/Certificate.png",
      techs: ["Figma", "User Research"],
      description: "Professional certificate in UX design principles and user-centered design process.",
    },
  ];

  // Filter certifications
  const filteredCerts = filter === "featured"
    ? certifications.filter(cert => cert.featured)
    : certifications;

  // Pagination logic
  const totalItems = filteredCerts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCerts = filteredCerts.slice(startIndex, startIndex + itemsPerPage);

  const allCount = certifications.length;
  const featuredCount = certifications.filter(c => c.featured).length;

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <section id="achievements" className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-14">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-blue-400 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 md:mb-12">
          <button
            onClick={() => { setFilter("all"); setCurrentPage(1); }}
            className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center gap-2 ${
              filter === "all"
                ? "bg-blue-600 text-white hover:bg-blue-800"
                : "bg-blue-900/95 text-gray-300 hover:bg-blue-900/60"
            }`}
          >
            All Certificates ({allCount})
          </button>
          <button
            onClick={() => { setFilter("featured"); setCurrentPage(1); }}
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {paginatedCerts.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-900/20 to-blue-950/40 backdrop-blur-md rounded-3xl overflow-hidden border border-blue-800/50 shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-48">
                  <span className="px-2 py-1 bg-green-600 dark:text-white text-sm font-medium rounded-full flex items-center gap-1.5 border border-green-500/50">
                    <ShieldCheck className="w-3 h-3 dark:text-white" />
                    Verified
                  </span>
                  {cert.featured && (
                    <span className="px-2 py-1 bg-orange-600 dark:text-white text-sm font-medium rounded-full flex items-center gap-1.5 border border-orange-500/50">
                      <Star className="w-3 h-3 dark:text-white" />
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-6 space-y-5">
                <h3 className="text-xl md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex sm:flex-row md:justify-between gap-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-base md:text-md">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-base md:text-md">{cert.date}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {cert.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-900/60 text-blue-300 text-sm font-semibold rounded-full border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
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

export default Achievements;