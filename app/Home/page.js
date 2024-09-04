'use client';
import Hero from "./Hero"
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <About />
      <Projects />
        
    </div>
  )
}
