import React from "react";
import { Linkedin, Github, Mail, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-16 md:py-10"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-8">
        {/* Profile Image - Responsive sizing */}
        <div className="relative mx-auto w-48 sm:w-56 md:w-64 lg:w-72">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-3xl -z-10 animate-pulse"></div>

          {/* Image Container */}
          <div className="rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-blue-400 shadow-2xl">
            <img
              src="/bikram-giri.png"
              alt="Bikram Giri – Web Developer and AI/ML Enthusiast"
              loading="lazy" // Optimize image loading
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 tracking-tight">
          Bikram Giri
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-medium">
          Web Developer | AI/ML Enthusiast
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          Hi, I’m Bikram Giri – a Web Developer and AI/ML Enthusiast building modern, scalable web solutions.
        </p>

        {/* Buttons - Stack on mobile, side-by-side on larger screens */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            to="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center block"
          >
            VIEW MY WORK
          </Link>
          <Link
            to="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold text-lg rounded-xl hover:bg-blue-500 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-center block"
          >
            CONTACT ME
          </Link>
        </div>

        {/* Social Icons - Responsive spacing and size */}
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <Link
            to="https://www.linkedin.com/in/bikram-giri/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-blue-900/30 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            to="https://github.com/bikramgiri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-blue-900/30 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            to="https://www.youtube.com/@technologyknowledgee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-blue-900/30 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-110 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            to="https://mail.google.com/mail/u/0/#compose?to=giribikram40@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-blue-900/30 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            to="https://www.facebook.com/bikramgiriofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-blue-900/30 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-blue-400 hover:bg-blue-900/50 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;