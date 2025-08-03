import React from 'react';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skill from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Education from '@/components/Education'
import Goal from '@/components/Goal'
import ScrollArrow from '@/components/ScrollArrow'
 

function App() {
  return (
    <>
      <Header />
      <Hero />
    < ScrollArrow />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Goal />
      <Contact />
      <Footer />
    </>
  )
}

export default App
