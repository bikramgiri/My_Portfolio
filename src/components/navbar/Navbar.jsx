import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", path: "#home", id: "home" },
    { name: "About", path: "#about", id: "about" },
    { name: "Experience", path: "#experience", id: "experience" },
    { name: "Education", path: "#education", id: "education" },
    { name: "Projects", path: "#projects", id: "projects" },
    { name: "Skills", path: "#skills", id: "skills" },
    { name: "Achievements", path: "#achievements", id: "achievements" },
    { name: "Blog", path: "https://giribikram.com.np/", external: true },
    { name: "Contact", path: "#contact", id: "contact" },
  ];

  // Track scroll position and update active section
  useEffect(() => {
    const sections = navLinks
      .filter((link) => link.id)
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height

      let current = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path, isExternal = false) => {
    setIsMobileMenuOpen(false);

    if (!isExternal && path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-blue-900/60 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                B
              </div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Bikram Giri
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = link.id === activeSection;

                return link.external ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full w-0" />
                  </Link>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-lg font-medium transition-colors duration-200 relative group ${
                      isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-500 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-xl hover:bg-blue-900/30 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-blue-400" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-gray-900/95 shadow-2xl overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">Menu</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl hover:bg-blue-900/50 transition-colors"
                >
                  <X className="w-8 h-8 text-blue-400" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = link.id === activeSection;

                  return link.external ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-6 py-4 text-2xl font-medium rounded-xl transition-all duration-300 hover:bg-blue-900/40"
                    >
                      <span className="text-gray-200 hover:text-blue-400">{link.name}</span>
                    </Link>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`px-6 py-4 text-2xl font-medium rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-blue-900/60 text-blue-400 shadow-inner shadow-blue-500/30"
                          : "text-gray-200 hover:bg-blue-900/30 hover:text-blue-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;