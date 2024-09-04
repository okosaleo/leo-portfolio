'use client';
import Lottie from "lottie-react";
import kimetsu from "../../public/Lottie/P37yueYwHL.json";
import yaiba from "../../public/Lottie/L5ORhK9t6t.json";
import splitStringRegex from "../usregex";
import { useState } from "react";
import scroll from "../../public/Lottie/uu8WnbdhU0.json";
import scrolldark from "../../public/Lottie/sss.json";



export default function Hero({darkMode}) {
  const [ contactEntered, setiscontactEntered ] = useState(false)
  const getContactStyles = (contactEntered) => ({
  transform: `translateY(${contactEntered ? "-100%" : "0%"})`,
})
 

  return (
    <div className='bg-[#0F0F0F] dark:bg-[#fbfbfb] w-full md:h-[97vh] h-[80vh] flex flex-col relative'>
      <div className=" flex items-center justify-center h-[55vh] w-full ">
        <div className=" lg:w-1/3 ">{darkMode ?
        <Lottie animationData={yaiba} className="h-[55vh]" />
      : <Lottie animationData={kimetsu} className="h-[55vh]" />  }
        </div>
        <div className=" z-10 absolute">
         <h1 className=" font-Sunage lg:text-[7rem] text-[2rem] text-[#fbfbfb] dark:text-[#0f0f0f]">Lenny The Dev</h1>
         </div>
      </div>
      <div className=" flex w-full justify-evenly items-center lg:flex-row flex-col-reverse lg:gap-0 gap-7 h-1/2">{darkMode ? <Lottie animationData={scrolldark} className=" lg:w-[11vw] w-24 " /> :
    <Lottie animationData={scroll} className=" lg:w-[11vw] w-24 " />}
     <div className=" md:w-2/3 w-4/5"> 
        <hr className=" w-full border-[2px] lg:block hidden dark:border-[#0f0f0f]" />
      </div>
     <div className=" lg:w-1/5 w-3/4 lg:flex-none flex justify-center items-center">
      <button className=' bg-[#FBFBFB] dark:bg-[#0f0f0f]  text-[#0F0F0F] dark:text-[#fbfbfb] font-Sunage lg:w-[270px] w-[260px] md:text-[1.8rem] text-[1.9rem] rounded-lg flex justify-evenly items-center' onMouseEnter={() => setiscontactEntered(true)}
       onMouseLeave={() => setiscontactEntered(false)}> <a href="mailto:okosaleonel@gmail.com"><span className="relative flex overflow-hidden">{splitStringRegex('Contact Me').map((character, index) => (<span key={index} className=" relative">
       <span style={getContactStyles(contactEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
       <span style={getContactStyles(contactEntered)} className=" inline-block whitespace-pre last:absolute last:top-full last:w-full last:left-0 transition-transform duration-[.5s]">{character}</span>
       </span>))}</span></a></button>
    </div>
  </div>
    </div>
  )
};

