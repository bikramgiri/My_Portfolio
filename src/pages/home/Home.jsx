import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Achievements from '../components/Achievement'
import SEO from '../../components/SEO'

const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Project />
      <Skill />
      <Achievements />
      <Contact />
    </>
  )
}

export default Home
