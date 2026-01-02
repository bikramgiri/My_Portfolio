import React, { useState } from "react";
import {
  ShieldCheck,
  Star,
  GraduationCap,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Achievements = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);
  const itemsPerPage = 6;

  const certifications = [
    {
      title: "Full Stack Development with MERN Stack",
      issuer: "Digital Pathshala",
      date: "May 24, 2025",
      verified: true,
      featured: true,
      image: "certifications/Certificate.png",
      Cerurl: "https://digitalpathshala.com/certificate/your-certificate-id",
      techs: [
        "Node.js",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "Express",
        "Redux ToolKit",
        "JWT",
        "Mongoose",
      ],
      description:
        "Completed comprehensive full-stack training covering MongoDB, Express, React, and Node.js.",
    },
    {
      title: "AI for Beginners",
      issuer: "HP LIFE",
      date: "April 14, 2025",
      verified: true,
      featured: true,
      image: "certifications/ai-for-beginners.png",
      cerurl: "https://drive.google.com/file/d/1bGkoznrNLCtqSM7gfRbE3oY7Ox_OqD-F/view",
      techs: ["AI", "ML", "Python"],
      description:
        "Completed introductory course on Artificial Intelligence and Machine Learning concepts.",
    },
    {
      title: "30 Days of React.js Workshop",
      issuer: "Digital Pathshala",
      date: "September 20, 2024",
      verified: true,
      featured: true,
      image: "certifications/react-js.png",
      cerurl: "https://drive.google.com/file/d/1VDwzy00mA-UUikv0KCgKYGf3tVHidgbO/view",
      techs: ["React.js"],
      description:
        "Participated in advanced workshop focused on React.js, server actions, and authentication.",
    },
    {
      title: "Intermediate Python",
      issuer: "DataCamp",
      date: "JUN 18, 2025",
      verified: true,
      featured: true,
      image: "certifications/intermediate-python.png",
      cerurl: "https://drive.google.com/file/d/1a9XdpJMpuXqr4pThvYH_dqmtUprcsx2A/view",
      techs: ["Python", "Data Analysis", "Pandas", "NumPy"],
      description:
        "Completed intermediate-level Python course focusing on data analysis and manipulation using Pandas and NumPy.",
    },
    {
      title: "30 Days of Node.js Workshop",
      issuer: "Digital Pathshala",
      date: "June 23, 2025",
      verified: true,
      featured: true,
      image: "certifications/node-js.png",
      cerurl: "https://drive.google.com/file/d/1UGN7R-BDUBw4w85ePhhSe19XvVf_u5WU/view",
      techs: ["Node.js", "Express"],
      description:
        "Completed intensive workshop on Node.js, covering server-side development and Express framework.",
    },
    {
      title: "7 Days Next.js workshop",
      issuer: "Tech Research and Innovation",
      date: "December 26, 2024",
      verified: true,
      featured: false,
      image: "certifications/next-js.png",
      cerurl: "https://drive.google.com/file/d/1h4Fy5YV3tBza1deZFnfxrqH2ujvvoFIm/view",
      techs: ["Next.js", "SSR", "React"], 
      description:
        "Completed a focused workshop on Next.js, exploring server-side rendering and React integration.",
    },
    {
      title: "4+ Hours Git and GitHub Session",
      issuer: "Digital Pathshala",
      date: "May 03, 2025",
      verified: true,
      featured: false,
      image: "certifications/git-github.png",
      cerurl: "https://drive.google.com/file/d/1jfVIaErbkDJQepf__STLalKrFeCyHFil/view",
      techs: ["Git", "GitHub"],
      description:
        "Completed an in-depth session on version control using Git and GitHub for collaborative development.",
    },
    {
      title: "Understanding Machine Learning",
      issuer: "DataCamp",
      date: "SEP 01, 2025",
      verified: true,
      featured: false,
      image: "certifications/machine-learning.png",
      cerurl: "https://drive.google.com/file/d/1f_UhpzCPX501RgMWxvYmNFERbC2TTFb-/view",
      techs: ["Machine Learning", "AI"],
      description:
        "Completed foundational course on machine learning algorithms and applications.",
    },
    {
      title: "Digital Marketing",
      issuer: "SHETECH PNC",
      date: "Ashj 11, 2082",
      verified: true,
      featured: false,
      image: "certifications/digital-marketing.png",
      cerurl: "https://drive.google.com/file/d/15PTm1XDGzS2qnT_IegkRjAr6SGQiaxQE/view",
      techs: ["Digital Marketing"],
      description:
        "Completed a comprehensive course on digital marketing strategies and tools.",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "SimpliLearn",
      date: "December 14, 2023",
      verified: true,
      featured: true,
      image: "certifications/generative-ai.png",
      cerurl: "https://drive.google.com/file/d/1aFEWhOdJk4siE2_8Ktdb_iTYSJ9C7DyW/view",
      techs: ["Generative AI", "AI"],
      description:
        "Completed an introductory course on generative AI technologies and applications.",
    },
    {
      title: "Search Engine Optimization (SEO) Fundamentals",
      issuer: "Sharing Mentorship",
      date: "December 17, 2022",
      verified: true,
      featured: false,
      image: "certifications/seo.png",
      cerurl: "https://drive.google.com/file/d/1qDutLUZlRPo3aNaf2d2N1Yrvw9dxwAM-/view",
      techs: ["SEO"],
      description:
        "Completed foundational training on search engine optimization techniques and best practices.",
    },
    {
      title: "Prompt Engineering",
      issuer: "DataCamp",
      date: "AUG 23, 2025",
      verified: true,
      featured: true,
      image: "certifications/prompt-engineering.png",
      cerurl: "https://drive.google.com/file/d/1jlYjMy4mUzfu67Xq1OkthXJf2Gss0lDT/view",
      techs: ["Prompt Engineering", "AI"],
      description:
        "Completed specialized course on crafting effective prompts for AI language models.",
    },
  ];

  // Filter
  const filteredCerts =
    filter === "featured"
      ? certifications.filter((c) => c.featured)
      : certifications;

  // Pagination
  const totalItems = filteredCerts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedCerts = filteredCerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const allCount = certifications.length;
  const featuredCount = certifications.filter((c) => c.featured).length;

  const goToPage = (page) => setCurrentPage(page);
  const goPrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goNext = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <section
      id="achievements"
      className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-10 lg:mb-10">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-blue-400 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my
            expertise
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 md:mb-10">
          <button
            onClick={() => handleFilterChange("all")}
            className={`cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center gap-2 ${
              filter === "all"
                ? "bg-blue-600 text-white hover:bg-blue-800"
                : "bg-blue-900/95 text-gray-300 hover:bg-blue-900/60"
            }`}
          >
            All Certificates ({allCount})
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {paginatedCerts.map((cert, index) => {
            const visibleTechs = cert.techs.slice(0, 3);
            const remainingCount = cert.techs.length - 3;

            return (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer group relative bg-gradient-to-br from-blue-900/20 to-blue-950/40 backdrop-blur-md rounded-xl overflow-hidden border border-blue-800/50 shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500"
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
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-32 sm:gap-34">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-green-600 dark:text-white text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 border border-green-500/50 ">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Verified
                    </span>
                    {cert.featured && (
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-orange-600 dark:text-white text-xs sm:text-sm font-medium rounded-full flex items-center gap-1.5 border border-orange-500/50">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-5">
                  <h3 className="text-xl md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="flex sm:flex-row justify-between gap-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-base md:text-md">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-base md:text-md">{cert.date}</span>
                    </div>
                  </div>

                  {/* Tech Stack - Show first 3 + "+n" if more */}
                  <div className="flex flex-wrap items-center gap-2">
                    {visibleTechs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-900/60 text-blue-300 text-sm font-medium rounded-full border border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="px-2 py-1 bg-gray-800/80 text-blue-300 text-sm font-bold rounded-full border border-blue-700/50">
                        +{remainingCount}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
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
                  ? "bg-gray-800/90 text-gray-400 cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-900/60 text-blue-400 hover:bg-blue-800/80"
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
                      ? "bg-blue-400 w-6 h-3"
                      : "bg-gray-500 w-3 h-3"
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
                  ? "bg-gray-800/90 text-gray-400 cursor-not-allowed disabled:cursor-not-allowed"
                  : "bg-blue-900/60 text-blue-400 hover:bg-blue-800/80"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Modal (unchanged - shows all techs) */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-gray-900 rounded-md shadow-2xl overflow-hidden border border-blue-800/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="cursor-pointer absolute top-4 right-7 z-10 p-3 bg-black/60 rounded-full text-gray-400 border border-gray-600 hover:text-white hover:bg-black/90 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
              <div className="p-6 md:p-6 bg-gradient-to-b from-blue-900/20 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
                  {selectedCert.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-green-500/30 text-green-400 font-sm rounded-full flex items-center gap-2 border border-green-500/50">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Credential
                  </span>
                </div>
              </div>

              <div className="px-6 md:px-6 pb-6">
                <div className="bg-gray-700/60 border border-gray-700 rounded-xl overflow-hidden shadow-md mx-auto max-w-5xl">
                  {/* Container with fixed aspect ratio to center image */}
                  <div className="relative w-full bg-black/20 flex items-center justify-center pl-25 md:pl-25 pr-25 md:pr-25">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="max-w-full max-h-full h-auto w-auto object-contain shadow-inner"
                      style={{ maxHeight: "110vh" }} // Prevents image from being too tall on small screens
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-6 pb-8 space-y-6">
                <div className="bg-gray-700/50 rounded-xl border border-gray-700 p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-12">
                    {/* Issuing Institution */}
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-blue-900/40 rounded-xl flex-shrink-0">
                        <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm md:text-base mb-1">
                          Issuing Institution
                        </p>
                        <p className="text-lg md:text-xl lg:text-xl text-white font-medium">
                          {selectedCert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Issue Date */}
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-blue-900/40 rounded-xl flex-shrink-0">
                        <Calendar className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm md:text-base mb-1">
                          Issue Date
                        </p>
                        <p className="text-lg md:text-xl lg:text-xl text-white font-medium">
                          {selectedCert.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 px-4 py-4 rounded-xl border border-gray-700">
                  <p className="dark:text-white text-2xl mb-3">
                    Skills & Competencies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedCert.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-900/60 text-blue-300 font-md rounded-full border border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                    <Link
                      to={selectedCert.cerurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 md:py-5 px-6 border border-blue-700 bg-gradient-to-r from-blue-500 to-blue-600 dark:text-white font-bold text-base sm:text-lg md:text-xl rounded-xl shadow-md hover:shadow-blue-500/50 hover:scale-102 transition-all duration-300"
                    >
                      <ExternalLinkIcon className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 flex-shrink-0" />
                      View & Verify Credential
                    </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
