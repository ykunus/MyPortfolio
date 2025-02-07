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
    <main style={{ minHeight: "200vh" }}>
      {/* <Router>
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
      </Router> */}
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
  );
}
