'use client';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap";
import { useRef } from "react"
import SplitType from 'split-type'

export default function About() {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    const mmm = useRef()
    const dyy = useRef()
    const reveal = useRef()
    const revealCon = useRef()
    

    useGSAP(() => {
        const revealCurrent = reveal.current;
        const text = new SplitType(revealCurrent, { types: 'words, chars' })
        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: dyy.current,
                scrub: true,
                start: "top center",
                end: "bottom center",
                markers: false
            },
            opacity: 0.2,
            stagger: 0.1,
        })
        
    }, { scope: revealCon.current})
  return (
    <div ref={mmm} className="h-[90vh] bg-[#0f0f0f] dark:bg-[#fbfbfb] " id="mmm">
        <div className=" h-[60vh] w-full p-4 " ref={dyy}>
            <div className="h-[40vh] md:w-[95vw] max-w-[95vw]  mt-5 p-7" ref={revealCon}>
            <p ref={reveal} className="text-center lg:text-3xl text-xl font-akira text-[#fbfbfb] dark:text-[#0f0f0f] tracking-wide leading-10">Hi!, I&apos;m Okosa Leonard, a Web developer from Lagos, nigeria. i work with golang and javascript, adept at using modern web technologies to create dynamic, functional, efficient and exciting, user-friendly web applications. I&apos;m passionate about web3 and web development. Outside of coding, I love listening to music in my free time. </p>
            </div>
        </div>
        </div>
  )
}
