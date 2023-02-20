import React from "react";
import About from "./components/About";
import Banana from "./components/Banana";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer/>
      </>
  )
};

export default App;
