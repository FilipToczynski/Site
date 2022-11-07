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
        {!langCtx.language && <h1 className={styles.skills__header}>Skills</h1>}
        {langCtx.language && (
          <h1 className={styles.skills__header}>Pracuje z</h1>
        )}
      </>
      <ul className={styles.skills__list}>
        <IconContext.Provider value={{ size: "1.2rem", color: "#e34c26" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <AiFillHtml5 />
              <p className={styles.skills__skill}>HTML</p>
            </span>
          </li>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "1.2rem", color: "#264de4" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <FaCss3Alt />
              <p className={styles.skills__skill}>CSS</p>
            </span>
          </li>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "1.2rem", color: "#F0DB4F" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <SiJavascript />
              <p className={styles.skills__skill}>JavaScript</p>
            </span>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#61DBFB" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <SiReact />
              <p className={styles.skills__skill}>React.js</p>
            </span>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#007acc" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <SiTypescript />
              <p className={styles.skills__skill}>TypeScript</p>
            </span>
          </li>
        </IconContext.Provider>
      </ul>
      <ul className={styles.skills__list}>
        <IconContext.Provider value={{ size: "1.2rem", color: "#E33332" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <SiTestinglibrary />
              <p className={styles.skills__skill}>Testing library</p>
            </span>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#c69" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <FaSass />
              <p className={styles.skills__skill}>Sass</p>
            </span>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#CC3534" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <FaNpm />
              <p className={styles.skills__skill}>Npm</p>
            </span>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#0078d7" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <SiVisualstudiocode />
              <p className={styles.skills__skill}>Visual Studio Code</p>
            </span>
          </li>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem", color: "#fff" }}>
          <li className={styles.skills__item}>
            <span className={styles.skills_c}>
              <AiFillGithub />
              <p className={styles.skills__skill}>GitHub</p>
            </span>
          </li>
        </IconContext.Provider>
      </ul>
      <span className={styles.line__1}></span>
      <span className={styles.line__2}></span>
      <span className={styles.line__3}></span>
    </div>
  );
};

export default Skills;
