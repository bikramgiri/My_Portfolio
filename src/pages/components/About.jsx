import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-950/94 py-12 px-6 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-4">
            About Me
          </h2>
          <div className="w-24 md:w-32 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8 text-gray-300 order-2 lg:order-1">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              I am a passionate Web Developer with experience in creating{' '}
              <span className="text-blue-400 font-semibold">
                responsive and easy-to-use websites
              </span>
              . I am skilled in{' '}
              <span className="text-blue-400 font-semibold">
                React.js, Node.js, Next.js, and Tailwind CSS
              </span>
              . I have worked with teams to build fast and scalable web solutions. I am excited to use my technical skills and creativity in a dynamic development team.
            </p>

            {/* Contact Details - Stack vertically on mobile */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                </div>
                <Link to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=giribikram40@gmail.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg lg:text-xl hover:text-blue-400 transition-colors duration-300">
                  giribikram40@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                </div>
                <Link to="tel:98XXXXXXXX" className="text-base md:text-lg lg:text-xl hover:text-blue-400 transition-colors duration-300">
                  98XXXXXXXX
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
                </div>
                <span className="text-base md:text-lg lg:text-xl">
                  Itahari, Sunsari
                </span>
              </div>
            </div>
          </div>

          {/* Profile Image - Centered on mobile, aligned properly on larger screens */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-30 blur-3xl -z-10 animate-pulse"></div>

              {/* Image Container */}
              <div className="rounded-xl overflow-hidden border-4 md:border-6 border-blue-400 shadow-lg">
                <img
                  src="/Bikram Giri Portfolio.jpg"
                  alt="Bikram Giri Portfolio"
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;