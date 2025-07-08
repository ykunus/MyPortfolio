"use client";
import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./pages/header";
import About from "./pages/about";
import { ScrollAnimationWrapper } from "./components/ScrollAnimation";
import Projects from "./pages/projects";
import Contact from "./pages/contact";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="min-h-[50vh] md:min-h-[200vh]">
        <Navbar/>
        <div id="top">
          <ScrollAnimationWrapper>
            <Header/>
          </ScrollAnimationWrapper>
        </div>
        <div id="about" className="scroll-mt-32">
          <ScrollAnimationWrapper>
            <About/>
          </ScrollAnimationWrapper>
        </div>
        <div id="projects" className="scroll-mt-32">
          <Projects/>
        </div>
        <div id="contact" className="scroll-mt-32">
          <ScrollAnimationWrapper>
            <Contact/>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <footer className="py-4 text-center text-gray-600 text-sm mt-auto font-semibold">
        © {new Date().getFullYear()} Yunus Kocaman. All Rights Reserved.
      </footer>
    </div>
  );
}
