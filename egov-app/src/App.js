import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import CTA from "./CTA";
import Latest from "./Latest";
import Supporters from "./Supporters";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Latest />
      <Supporters />
      <Footer />
    </>
  );
}

export default App;
