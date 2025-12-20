import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    { name: "Contact", path: "/#contact" },
  ];

  // Smooth scroll when navigating to hash links (/#about, /#contact, etc.)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  // Handle mobile link click: close menu + smooth scroll if hash link
  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);

    if (path.includes("#")) {
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
      <nav className="sticky top-0 z-50 bg-gray-900 backdrop-blur-xl border-b border-blue-900/80 shadow-lg shadow-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              B
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Bikram Giri
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="cursor-pointer lg:hidden p-3 rounded-xl hover:bg-blue-900/30 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 text-blue-400" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90%] bg-gradient-to-b from-black to-blue-950 shadow-2xl overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-bold text-blue-400">Menu</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer p-3 rounded-xl hover:bg-blue-900/50 transition-colors"
                >
                  <X className="w-8 h-8 text-blue-400" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2 border-b border-blue-900/30 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Call to Action Button */}
              {/* <div className="mt-12">
                <Link
                  to="/#contact"
                  onClick={() => handleLinkClick("/#contact")}
                  className="block w-full text-center py-4 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300"
                >
                  Get In Touch
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;