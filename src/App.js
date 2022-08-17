import React from "react";
import "./themes/index.scss";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <section className="t-light">
      <Navbar />
      <Hero />
      <About />
    </section>
  );
};

export default App;
