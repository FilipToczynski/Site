import { useContext } from "react";
import { CgChevronRightO } from "react-icons/cg";
import { FaCss3Alt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { SiJavascript, SiReact } from "react-icons/si";
import languageContext from "../../store/langContext";
import Project from "../Project/Project";

const This = () => {
  const icon = <CgChevronRightO />;
  const src = "xd";
  const langCtx = useContext(languageContext);
  const desc = `${
    !langCtx.language
      ? "My portfolio website made with React."
      : "Moja strona portfolio zrobiona w React"
  }`;
  const stack = [
    <IconContext.Provider value={{ size: "1.2rem", color: "#61DBFB" }}>
      <SiReact />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#F0DB4F" }}>
      <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#264de4" }}>
      <FaCss3Alt />
    </IconContext.Provider>,
  ];
  return (
    <Project
      header="personal website"
      description={desc}
      video={src}
      route="/cloud"
      icon={icon}
      stack={stack}
    />
  );
};

export default This;
