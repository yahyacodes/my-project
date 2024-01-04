import React from "react";
import Hero from "./Hero";
import About from "./About";
import Logos from "./Logos";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="relative bg-color">
      <div className="relative">
        <Hero />
        <Logos />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
