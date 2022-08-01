import Project from "../Project/Project";
import { CgChevronRightO } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { useContext } from "react";
import languageContext from "../../store/langContext";

const Cloud = () => {
  const icon = <CgChevronRightO />;
  const src = "https://filiptoczynski.netlify.app/img/cloud-host.mp4";
  const langCtx = useContext(languageContext);
  const live = 'https://cloudhostapp.netlify.app/';
  const code = 'https://github.com/FilipToczynski/Cloud-Host'
  const desc = `${
    !langCtx.language
      ? "Practice website with modern features like sticky navigation, slide component, and some cool animations."
      : "Strona dla praktyki z modernistycznymi cechami jak sticky navigation, slide component i animacje"
  }`;
  const stack = [
    <IconContext.Provider value={{ size: "1.2rem", color: "#F0DB4F" }}>
      <SiJavascript />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#264de4" }}>
      <FaCss3Alt />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#e34c26" }}>
      <AiFillHtml5 />
    </IconContext.Provider>,
  ];
  return (
    <Project
      header="Cloud Host"
      video={src}
      description={desc}
      route="/spotify"
      icon={icon}
      stack={stack}
      live={live}
      code={code}
    />
  );
};

export default Cloud;
