import "./App.module.css";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import React from "react";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { LanguageContextProvider } from "./store/langContext";
import { BreakpointProvider, useCurrentWidth } from "react-socks";
import Navigation700px from "./Navigation/Navigation700px/Navigation700px";
import Hero1100px from "./Hero/Hero1100px/Hero1100px";
import Hero700px from "./Hero/Hero700px/Hero700px";
import { Fade } from "react-reveal";

function App() {
  const NavigationComponents = () => {
    const width = useCurrentWidth();
    if (width > 700) {
      return <Navigation />;
    } else {
      return <Navigation700px />;
    }
  };

  const HeroComponents = () => {
    const width = useCurrentWidth();
    if (width > 1100) {
      return <Hero />;
    } else if (width < 700) {
      return <Hero700px />;
    } else {
      return <Hero1100px />;
    }
  };

  return (
    <React.Fragment>
      <BreakpointProvider>
        <LanguageContextProvider>
          <NavigationComponents />
          <Fade>
            <HeroComponents />
          </Fade>
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </LanguageContextProvider>
      </BreakpointProvider>
    </React.Fragment>
  );
}

export default App;
