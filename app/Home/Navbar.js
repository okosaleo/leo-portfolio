'use client';
import { useState } from "react"
import splitStringRegex from "../usregex.js"
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

export default function Navbar ({darkMode, toggleDarkMode}) {
  const [ projectsEntered, isProjectsEntered ] = useState(false)
  const [ articlesEntered, isArticlesEntered ] = useState(false)

  const getHomeStyles = (homeEntered) => ({
    transform: `translateY(${homeEntered ? "-100%" : "0%"})`,
  })
  return (
    <div className=" flex items-center justify-between bg-[#0f0f0f] dark:bg-[#fbfbfb] p-4">
      <div className=" flex items-center justify-center relative cursor-pointer " >
        <span className=" font-Sunage md:text-[1.2rem] text:[0.9rem] text-[#fbfbfb] dark:text-[#0f0f0f]">LennyTheDev</span>
      </div>
      <button className="rounded-full" onClick={toggleDarkMode}>{darkMode ? <div className="flex flex-row gap-2"><MdDarkMode className=" text-[#0f0f0f] text-2xl" /><span className="text-[#0f0f0f]">Dim the space</span></div> :
        <div className="flex flex-row gap-2"><BsBrightnessHighFill className=" text-[#fbfbfb] text-2xl" /><span className=" text-[#fbfbfb]">Let there be Light</span></div>}</button>
        <div  className=" text-[#fbfbfb]  dark:text-[#0f0f0f]">
        <div className=" flex justify-between font-Sunage md:text-[1.2rem] text-[0.9rem] font-light gap-6">
            <div
            onMouseEnter={() => isProjectsEntered(true)}
            onMouseLeave={() => isProjectsEntered(false)} className=" cursor-pointer">
              <span className="relative flex overflow-hidden">{splitStringRegex('Projects').map((character, index) => (<span key={index} className=" relative">
              <span style={getHomeStyles(projectsEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
              <span style={getHomeStyles(projectsEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s] text-[#fbfbfb]  dark:text-[#0f0f0f]">{character}</span>
            </span>))}</span></div>
            <div
             onMouseEnter={() => isArticlesEntered(true)}
             onMouseLeave={() => isArticlesEntered(false)}
            className=" cursor-pointer">
               <span className="relative flex overflow-hidden">{splitStringRegex('Blog').map((character, index) => (<span key={index} className=" relative">
              <span style={getHomeStyles(articlesEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
              <span style={getHomeStyles(articlesEntered, index)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s] text-[#fbfbfb]  dark:text-[#0f0f0f]">{character}</span>
            </span>))}</span>
            </div>
        </div>
        </div>
    </div>
  )
}