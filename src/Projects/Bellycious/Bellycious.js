import Project from "../Project/Project";
import { CgChevronRightO } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { SiReact, SiTestinglibrary, SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { useContext } from "react";
import languageContext from "../../store/langContext";

const Bellycious = () => {
  const icon = <CgChevronRightO />;
  const src = "https://filiptoczynski.netlify.app/img/Bellycious.mp4";
  const langCtx = useContext(languageContext);

  const desc = `${
    !langCtx.language
      ? "App for browsing food recipes from forkify-API. Project I made to practice React, TypeScript, and unit testing. Also made a login functionality with firebase-API."
      : "Aplikacja do przeglądania przepisów z forkify-API. Projekt dla praktyki Reacta, TypeScripta i testów jednostkowych, również stworzyłem funcjonalość logowania."
  }`;

  const stack = [
    <IconContext.Provider value={{ size: "1.2rem", color: "#61DBFB" }}>
      <SiReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#007acc" }}>
      <SiTypescript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#e93837" }}>
      <SiTestinglibrary />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#c69" }}>
      <FaSass />
    </IconContext.Provider>,
  ];
  return (
    <Project
      header="Bellycious"
      description={desc}
      video={src}
      route="/this"
      icon={icon}
      stack={stack}
    />
  );
};

export default Bellycious;
