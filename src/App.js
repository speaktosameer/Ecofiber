import React from "react";
import About from "./components/About";
import Banana from "./components/Banana";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";


const App = () => {

  return (
      <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Banana/>
      <Contact/>
      </>
  )
};

export default App;
