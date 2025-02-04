"use client";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import { ScrollAnimationWrapper } from "./components/ScrollAnimation";
import Projects from "./components/projects";
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
        <Routes>
        </Routes>
      </Router>
    </main>
  );
}
