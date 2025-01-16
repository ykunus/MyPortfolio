"use client";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main> 
      <Router>
        <Navbar/>
        <Routes> 
        </Routes>
      </Router>

    </main>
  );
}
