import React from 'react'
import {Facebook, Linkedin, Github, Mail} from 'lucide-react'

const Hero = () => {
  return (
      <section className="flex-1 flex flex-col items-center justify-center px-12 text-white bg-gray-900 min-h-screen">
        {/* Profile Image */}
        <div className="relative mb-4">
          <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-blue-400 shadow-2xl shadow-blue-400/50">
            <img 
              src="/Bikram Giri.jpeg" // Replace with your actual profile image URL
              alt="Bikram Giri"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Optional glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-3xl -z-10"></div>
        </div>

        {/* Name and Title */}
        <h2 className="text-5xl font-bold text-blue-400 mb-2">Bikram Giri</h2>
        <p className="text-2xl text-blue-300 mb-6">Web Developer || AI/ML Enthusiast</p>

        {/* Description */}
        <p className="text-center text-gray-400 max-w-2xl mb-10">
          I'm currently pursuing my Bachelor's Degree at Sushma Godawari College.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6 mb-8">
          <button className="cursor-pointer px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition shadow-lg">
            VIEW MY WORK
          </button>
          <button className="cursor-pointer px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition">
            CONTACT ME
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 ">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition rounded-4xl p-4 bg-gray-700/50 shadow-lg shadow-blue-400/20">
            <Facebook className="w-8 h-8"/>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition rounded-4xl p-4 bg-gray-700/50 shadow-lg shadow-blue-400/20">
            <Linkedin className="w-8 h-8"/>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition rounded-4xl p-4 bg-gray-700/50 shadow-lg shadow-blue-400/20">
            <Github className="w-8 h-8"/>
          </a>
          <a href="mailto:your.email@gmail.com" className="text-gray-400 hover:text-blue-400 transition rounded-4xl p-4 bg-gray-700/50 shadow-lg shadow-blue-400/20 " target="_blank"
            rel="noopener noreferrer">
            <Mail className="w-8 h-8"/>
          </a>
        </div>
      </section>
  )
}

export default Hero
