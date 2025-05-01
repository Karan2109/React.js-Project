import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import PriceTag from "./components/PriceTag";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <PriceTag />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
