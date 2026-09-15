"use client";

import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    "About",
    "Experience",
    "Education",
    "Projects",
    "Skills",
    "Achievements",
    "Contact",
  ];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-t bg-gray-800 py-12 sm:py-16 md:py-6 px-6 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Left: Name & Description + Social Icons */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Bikram Giri
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                Web Developer & AI/ML Enthusiast passionate about building innovative digital solutions.
              </p>
            </div>

            {/* Social Icons - Centered on mobile */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/bikram-giri/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-blue-900/30 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/50 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile of Bikram Giri"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://github.com/bikramgiri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-blue-900/30 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/50 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile of Bikram Giri"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.youtube.com/@technologyknowledgee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-blue-900/30 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/50 hover:scale-110 transition-all duration-300"
                aria-label="YouTube Channel of Bikram Giri"
              >
                <Youtube className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=giribikram40@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-blue-900/30 rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-800/50 hover:scale-110 transition-all duration-300"
                aria-label="Email Bikram Giri"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links - Centered on mobile */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 inline-block">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleSmoothScroll(e, link.toLowerCase())}
                    className="text-base sm:text-lg text-gray-400 hover:text-blue-400 transition-colors duration-300 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://giribikram.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 block"
                  title="Bikram's Blog - Official Tech Blog by Bikram Giri"
                >
                  Bikram's Blog ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Services - Centered on mobile */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4 inline-block">
              {[
                "Frontend Development",
                "Backend Development",
                "WordPress Development",
                "AI/ML Solutions",
              ].map((service) => (
                <li key={service}>
                  <span className="text-base sm:text-lg text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-5 inline-block text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-400">
                  Itahari, Sunsari, Nepal
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4">
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
              <div className="flex items-center justify-center lg:justify-start gap-4">
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

        {/* Bottom Copyright & Links */}
        <div className="mt-12 pt-8 border-t border-blue-800/50 text-center">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Bikram Giri. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
