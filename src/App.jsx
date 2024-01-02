import React from "react";
import Hero from "./Hero";
import About from "./About";
import Logos from "./Logos";

const App = () => {
  return (
    <div className="relative bg-color">
      <div className="relative">
        <Hero />
        <Logos />
        <About />
      </div>
    </div>
  );
};

export default App;
