import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0er77rp', 'template_n118t5c', form.current, {
        publicKey: 'rOjAK0v3HoqH6XcUn',
      })
      .then(
        () => {
          // Display success message only for 3 seconds
          setSuccessMessage("Email sent successfully!");
          setErrorMessage("");
          form.current.reset(); // Reset the form after successful submission
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);
        },
        (error) => {
          // Display error message only for 3 seconds
          setErrorMessage("Failed to send email. Please try again.");
          setSuccessMessage("");
          console.error("EmailJS Error:", error);
          setTimeout(() => {
            setErrorMessage("");
          }, 4000); 
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-12 sm:py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-4">
            Contact Me
          </h2>
          <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        {/* Responsive Grid: Stack on mobile, side-by-side on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left: Get In Touch */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 border border-blue-800/50 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Get In Touch
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 md:mb-12 leading-relaxed">
              I’m actively seeking new opportunities to collaborate on exciting projects. Whether you have a question or simply want to connect, I’ll do my best to respond promptly.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-blue-500/20 rounded-2xl flex-shrink-0">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-400">Email</p>
                  <Link
                    to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=giribikram40@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    giribikram40@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-blue-500/20 rounded-2xl flex-shrink-0">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-400">Phone</p>
                  <Link
                    to="tel:98XXXXXXXX"
                    className="text-lg sm:text-xl text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    98XXXXXXXX
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-blue-500/20 rounded-2xl flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-400">Location</p>
                  <p className="text-lg sm:text-xl text-white">Itahari, Sunsari, Nepal</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 md:gap-6 mt-10 md:mt-14">
              <Link
                to="#"
                className="p-3 md:p-4 bg-blue-500/20 rounded-2xl hover:bg-blue-500/40 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </Link>
              <Link
                to="#"
                className="p-3 md:p-4 bg-blue-500/20 rounded-2xl hover:bg-blue-500/40 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </Link>
              <Link
                to="#"
                className="p-3 md:p-4 bg-blue-500/20 rounded-2xl hover:bg-blue-500/40 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </Link>
            </div>
          </div>

          {/* Right: Send Message Form */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 border border-blue-800/50 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-900/40 border border-blue-700/50 rounded-xl text-white placeholder-gray-400 text-base md:text-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-900/40 border border-blue-700/50 rounded-xl text-white placeholder-gray-400 text-base md:text-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-900/40 border border-blue-700/50 rounded-xl text-white placeholder-gray-400 text-base md:text-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-900/40 border border-blue-700/50 rounded-xl text-white placeholder-gray-400 text-base md:text-lg focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer w-full py-4 md:py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg md:text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
              {successMessage && (
                <p className="text-green-400 text-base md:text-lg text-center font-medium">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-base md:text-lg text-center font-medium">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;