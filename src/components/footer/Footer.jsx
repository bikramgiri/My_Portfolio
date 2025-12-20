import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-12 sm:py-16 md:py-20 px-6 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          {/* Left: Name & Description */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Bikram Giri
            </h3>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-sm">
              Web Developer & AI/ML Enthusiast passionate about building innovative digital solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 sm:gap-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-900/20 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/40 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-900/20 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/40 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=giribikram40@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-900/20 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/40 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="tel:98XXXXXXXX"
                className="p-3 bg-blue-900/20 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/40 hover:scale-110 transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl sm:text-2xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/#${link.toLowerCase()}`}
                    className="text-base sm:text-lg text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl sm:text-2xl font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "AI/ML Solutions", "UI/UX Design", "Consulting"].map((service) => (
                <li key={service}>
                  <span className="text-base sm:text-lg text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl sm:text-2xl font-semibold text-white">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg text-gray-400">
                  Itahari, Sunsari, Nepal
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=giribikram40@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  giribikram40@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:98XXXXXXXX"
                  className="text-base sm:text-lg text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  98XXXXXXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-blue-800/70 text-center">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Bikram Giri. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;