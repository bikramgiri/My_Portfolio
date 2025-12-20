import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-400 mb-4">About Me</h2>
          <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 max-w-full">
              <div className="rounded-3xl overflow-hidden border-8 border-blue-400 shadow-2xl shadow-blue-500/30">
                <img
                  src="/Bikram Giri.jpeg" 
                  alt="Bikram Giri"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional subtle glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Text & Contact Info */}
          <div className="space-y-8 text-gray-300">
            <p className="text-xl leading-relaxed">
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

            {/* Contact Details */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <Mail className="w-7 h-7 text-blue-400" />
                <span className="text-lg">giribikram40@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-blue-400" />
                <span className="text-lg">98XXXXXXXX</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-7 h-7 text-blue-400" />
                <span className="text-lg">Itahari, Sunsari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;