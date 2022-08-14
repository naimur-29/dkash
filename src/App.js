import React from "react";
import "./themes/index.scss";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section className="t-light">
      <Navbar />
      {/* <Hero /> */}
    </section>
  );
};

export default App;
