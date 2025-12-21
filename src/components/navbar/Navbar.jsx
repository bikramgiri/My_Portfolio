import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Education", path: "/#education" },
    { name: "Projects", path: "/#projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Achievements", path: "/#achievements" },
    {
      name: "Blog",
      path: "https://giribikram.com.np/",
      external: true, // Opens in new tab
    },
    { name: "Contact", path: "/#contact" },
  ];

  // Smooth scroll for internal hash links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Close mobile menu + handle smooth scroll for internal links
  const handleLinkClick = (path, isExternal = false) => {
    setIsMobileMenuOpen(false);

    if (!isExternal && path.includes("#")) {
      const id = path.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-800 backdrop-blur-xl border-b border-blue-900/60 shadow-xl">
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
              {navLinks.map((link) => (
                link.external ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    {/* <ExternalLink className="w-4 h-4 opacity-60" /> */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              ))}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-gradient-to-b bg-gray-800 shadow-2xl overflow-y-auto">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">Menu</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer p-3 rounded-xl hover:bg-blue-900/50 transition-colors"
                >
                  <X className="w-8 h-8 text-blue-400" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.external ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-4 text-2xl font-medium text-gray-200 hover:text-blue-400 hover:bg-blue-900/30 rounded-xl transition-all duration-300"
                    >
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className="px-4 py-4 text-2xl font-medium text-gray-200 hover:text-blue-400 hover:bg-blue-900/30 rounded-xl transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;