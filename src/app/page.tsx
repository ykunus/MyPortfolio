"use client";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./pages/about";
import { ScrollAnimationWrapper } from "./components/ScrollAnimation";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
export default function Home() {
  return (
    <main style={{ minHeight: "200vh" }}>
      <Router>
        <Navbar/>
        <ScrollAnimationWrapper>
          <Header/>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <About/>
        </ScrollAnimationWrapper>
          <Projects/>
        <ScrollAnimationWrapper>
          <Contact/>
        </ScrollAnimationWrapper>

        
      </Router>
    </main>
  );
}
