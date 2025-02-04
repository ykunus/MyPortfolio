"use client";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import { ScrollAnimationWrapper } from "./components/ScrollAnimation";

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
        <Routes>
        </Routes>
      </Router>
    </main>
  );
}
