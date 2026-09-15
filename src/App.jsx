import React from "react";

import ParticleNetwork from "./components/ParticleNetwork"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Skills from "./components/pages/Skills"
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-[#080a12] dark:text-white">

      <div className="pointer-events-none fixed inset-0 z-0">
        <ParticleNetwork />
      </div>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-1 bg-white/72 transition-colors duration-500 dark:bg-[#080a12]/68"/>

      <div className="relative z-10">
        <Navbar />

        <main>
          <Home />
          <About />
          <Skills />
          <Contact />
        </main>

        <Footer />
        
      </div>
    </div>
  );
};

export default React.memo(App);