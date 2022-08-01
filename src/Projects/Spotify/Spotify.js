import { useContext } from "react";
import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import languageContext from "../../store/langContext";
import Project from "../Project/Project";
const Spotify = () => {
  const icon = <SiHomebridge />;
  const src = "https://filiptoczynski.netlify.app/img/not-spotify.mp4";
  const langCtx = useContext(languageContext);
  const live = 'https://not-spotify.netlify.app/';
  const code = 'https://github.com/FilipToczynski/Not-spotify'
  const desc = `${
    !langCtx.language
      ? "Recreated Spotifys landing page to practice RWD."
      : "Odtworzyłem strone Spotify dla praktyki RWD"
  }`;
  const stack = [
    <IconContext.Provider value={{ size: "1.2rem", color: "#e34c26" }}>
      <AiFillHtml5 />
    </IconContext.Provider>,
    <IconContext.Provider value={{ size: "1.2rem", color: "#c69" }}>
      <FaSass />
    </IconContext.Provider>,
  ];
  return (
    <Project
      header="Spotify"
      description={desc}
      video={src}
      route="/"
      icon={icon}
      stack={stack}
      live={live}
      code={code}
    />
  );
};

export default Spotify;
