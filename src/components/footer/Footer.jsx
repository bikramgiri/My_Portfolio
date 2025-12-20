import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t bg-gray-900 py-16 px-6 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          {/* Left: Name & Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Bikram Giri
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Web Developer & AI/ML Enthusiast.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </Link>
              <Link
                to="mailto:giribikram40@gmail.com"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </Link>
              <Link
                to="tel:98XXXXXXXX"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-7 h-7" />
              </Link>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Services Links */}
            <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'AI/ML Solutions', 'UI/UX Design', 'Consulting'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-white">Contact</h4>
            <div className="space-y-5 text-gray-400">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-lg">Itahari, Sunsari, Nepal</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <Link to="mailto:giribikram4040@gmail.com" className="text-lg hover:text-blue-400 transition">
                  giribikram40@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <Link to="tel:98XXXXXXXX" className="text-lg hover:text-blue-400 transition">
                  98XXXXXXXX
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-blue-900/50 text-center">
          <p className="dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Bikram Giri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;