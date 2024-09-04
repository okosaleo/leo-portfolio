'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


export default function Projects() {



  return (
    <div className="w-full h-screen bg-[#fbfbfb] dark:bg-[#0f0f0f]">
      <div className="flex justify-center items-center font-akira pt-5 text-5xl dark:text-[#fbfbfb]"><h1>Projects</h1></div>
      <section className="card pinned dark:text-[#fbfbfb]"><div>One123456789?</div></section>
      <section className="card pinned"><div>One</div></section>
      <section className="card pinned"><div>One</div></section>
      <section className="card pinned"><div>One</div></section>
      <section className="card pinned"><div>One</div></section>
      <section className="card pinned"><div>One</div></section>
    </div>
  )
}
