import "./App.module.css";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import React from "react";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { LanguageContextProvider } from "./store/langContext";

function App() {
  return (
    <React.Fragment>
      <LanguageContextProvider>
        <Navigation />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </LanguageContextProvider>
    </React.Fragment>
  );
}

export default App;
