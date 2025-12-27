import React, { useEffect, useState } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Facebook,
  Youtube,
  YoutubeIcon,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToExplore from "../../components/ScrollToExplore";

const titles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Software Developer",
  "Content Creator",
];

const Hero = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
<<<<<<< HEAD
  const phoneNumber = import.meta.env.VITE_PHONE_Number;
  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello Bikram`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hello Bikram&type=phone_number&app_absent=0`
=======

  const phoneNumber = "98XXXXXXXX";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello Bikram`;
>>>>>>> 58a1cffe73d92ffa53f9058867e2725d3df0af0e

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const typingSpeed = 100; // ms per character
  const deletingSpeed = 60; // faster delete
  const pauseDuration = 2000; // pause after full text

  useEffect(() => {
    let timer;

    const type = () => {
      if (displayText.length < titles[currentIndex].length) {
        setDisplayText((prev) =>
          titles[currentIndex].slice(0, prev.length + 1)
        );
      }
    };

    const deleteText = () => {
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
      }
    };

    const nextTitle = () => {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    };

    if (!isDeleting) {
      if (displayText.length < titles[currentIndex].length) {
        timer = setTimeout(type, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(deleteText, deletingSpeed);
      } else {
        timer = setTimeout(nextTitle, 500); // small delay before next type
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 600);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          {/* Left - Text Content */}
          <div className="w-[55%] text-center lg:text-left space-y-6 md:space-y-7">
            {/* Greeting */}
            <div className="inline-flex items-center justify-center gap-3 text-blue-600 text-4xl sm:text-5xl font-bold">
              <span>👋</span>
              <span>Hi, I'm a</span>
            </div>

            {/* Display Full stack Developer, AI/ML Enthauisast, Software Developer, and Content Creator one by one*/}
            <h1
              className={`text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-blue-600 tracking-tight min-h-[1em] transition-all duration-300
            `}
            >
              {displayText}
              <span
                className={`
            inline-block w-1 h-[1em]  
            ml-1 rounded-sm
            ${blink ? "opacity-100" : "opacity-0"}
            transition-opacity duration-150
          `}
              ></span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building modern, scalable web applications with cutting-edge
              technologies. I create high-performance, user-focused digital
              experiences with clean architecture, strong UX, and accessibility
              driven by a passion for AI, automation, and real-world solutions.
            </p>

            {/* Main content box */}
            <div className="border border-gray-600/70 rounded-xl md:rounded-xl w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl  p-3 sm:p-4 md:p-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
                {/* Green dot + Available for projects */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-40"></div>
                  </div>
                  <span className="text-green-400 font-semibold text-base sm:text-md md:text-md">
                    Available for projects
                  </span>
                </div>

                {/* Divider - hidden on mobile */}
                <div className="hidden sm:block w-px h-8 bg-gray-600/70"></div>

                {/* Blue dot + Open for freelance */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                  </div>
                  <span className="text-blue-400 font-semibold text-base sm:text-md md:text-md">
                    Open for freelance
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center lg:justify-start">
              <Link
                to="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center block"
              >
                View My Projects
                <ArrowRight className="inline-block w-6 h-6 ml-2 " />
              </Link>
              <Link
                to="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold text-lg rounded-xl hover:bg-blue-500 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-center block"
              >
                Get In Touch
                <Mail className="inline-block w-6 h-6 ml-2 " />
              </Link>
            </div>

            {/* Connect with me */}
            <div className="mt-5">
              <p className="text-gray-200 font-medium text-lg mb-2 md:mb-2">
                Connect with me:
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-4 md:gap-4">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    to: "https://www.linkedin.com/in/bikram-giri/",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    to: "https://github.com/bikramgiri",
                  },
                  { icon: FaWhatsapp, label: "WhatsApp", to: whatsappUrl },
                  {
                    icon: Mail,
                    label: "Email",
                    to: "https://mail.google.com/mail/u/0/#compose?to=giribikram40@gmail.com",
                  },
                  {
                    icon: YoutubeIcon,
                    label: "YouTube",
                    to: "https://www.youtube.com/@technologyknowledgee",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    to: "https://x.com/bikram__giri/",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    to={social.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 sm:p-3.5 
                             bg-blue-900/30 backdrop-blur-sm 
                             border border-gray-400
                             rounded-xl sm:rounded-2xl 
                             text-gray-400
                             hover:text-blue-400 
                             hover:bg-blue-900/50
                             hover:border-blue-400/50 
                             hover:shadow-md hover:shadow-blue-400/30 
                             transition-all duration-300 
                             hover:-translate-y-1 active:scale-95"
                    aria-label={social.label}
                  >
                    <social.icon
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      strokeWidth={2.1}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
      
          {/* Right - Image */}
          <div className="w-[40%] flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-3xl -z-10 animate-pulse"></div>
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[24rem] md:h-96 lg:w-md lg:h-112 
                            rounded-full overflow-hidden 
                            shadow-2xl shadow-blue-500/20 
                            ring-1 ring-gray-200/50
                            border-2 md:border-6 border-blue-400"
              >
                <img
                  src="/bikram-giri.png"
                  alt="Bikram Giri – Web Developer and AI/ML Enthusiast"
                  loading="lazy"
                  className="w-full h-full object-cover object-top 
                           grayscale-20 
                           hover:grayscale-0 
                           transition-all duration-500 scale-105 hover:scale-100"
                />
              </div>

              {/* Decorative background */}
              <div
                className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 
                            w-40 h-40 sm:w-64 sm:h-64 
                            bg-blue-500/10 rounded-full blur-3xl -z-10"
              />
            </div>
          </div>
              <ScrollToExplore />
        </div>
      </div>
    </section>
  );
};

export default Hero;
