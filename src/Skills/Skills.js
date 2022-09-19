import styles from "./Skills.module.css";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiVisualstudiocode,
  SiTestinglibrary,
} from "react-icons/si";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaSass, FaNpm } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useContext } from "react";
import languageContext from "../store/langContext";
const Skills = () => {
  const langCtx = useContext(languageContext);
  return (
    <div className={styles.skills} id="skills">
      <>
        {!langCtx.language && (
          <h1 className={styles.skills__header}>Proficient with</h1>
        )}
        {langCtx.language && <h1 className={styles.skills__header}>Biegły</h1>}
      </>
      <ul className={styles.skills__list}>
        <IconContext.Provider value={{ size: "1.2rem", color: "#e34c26" }}>
          <li>
            <AiFillHtml5 />
            <p className={styles.skills__skill}>HTML</p>
          </li>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "1.2rem", color: "#264de4" }}>
          <li>
            <FaCss3Alt />
            <p className={styles.skills__skill}>CSS</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#F0DB4F" }}>
          <li>
            <SiJavascript />
            <p className={styles.skills__skill}>JavaScript</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#c69" }}>
          <li>
            <FaSass />
            <p className={styles.skills__skill}>Sass</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#fff" }}>
          <li>
            <AiFillGithub />
            <p className={styles.skills__skill}>GitHub</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#CC3534" }}>
          <li>
            <FaNpm />
            <p className={styles.skills__skill}>Npm</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#0078d7" }}>
          <li>
            <SiVisualstudiocode />
            <p className={styles.skills__skill}>Visual Studio Code</p>
          </li>
        </IconContext.Provider>
      </ul>
      <>
        {!langCtx.language && (
          <h1 className={styles.skills__header}>Familiar with</h1>
        )}
        {langCtx.language && <h1 className={styles.skills__header}>Znajomy</h1>}
      </>

      <ul className={styles.skills__list}>
        <IconContext.Provider value={{ size: "1.2rem", color: "#61DBFB" }}>
          <li>
            <SiReact />
            <p className={styles.skills__skill}>React.js</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#E33332" }}>
          <li>
            <SiTestinglibrary />
            <p className={styles.skills__skill}>Testing library</p>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#007acc" }}>
          <li>
            <SiTypescript />
            <p className={styles.skills__skill}>TypeScript</p>
          </li>
        </IconContext.Provider>
      </ul>
    </div>
  );
};

export default Skills;
