import { NavLink } from "react-router-dom";
import styles from "./Project.module.css";
import { IconContext } from "react-icons/lib";
import { useContext } from "react";
import languageContext from "../../store/langContext";
import { MdLanguage } from "react-icons/md";

const Project = (props) => {
  const { v4: uuidv4 } = require("uuid");
  const langCtx = useContext(languageContext);





  return (
    <>
      <div className={styles.project__view}>
        <div className={styles.project__about}>
          <h1 className={styles.project__header}>{props.header}</h1>
          <div className={styles.project__list}>
            {props.stack.map((icon) => {
              return (
                <li key={uuidv4()} className={styles.project__icon}>
                  {icon}
                </li>
              );
            })}
            <div className={styles.project__icon} onClick={langCtx.switchLang}>
              <IconContext.Provider value={{ size: ".8rem" }}>
                <MdLanguage />
              </IconContext.Provider>
              {!langCtx.language ? "PL" : "EN"}
            </div>
          </div>
          <p className={styles.project__description}>{props.description}</p>
          <div>
            <a href={props.live} className={styles.project__link} target="_blank" rel="noreferrer">Live</a>
            <a href={props.code} className={styles.project__link} target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <video id="my-video" controls preload="auto" autoPlay>
          <source
            className={styles.project__video}
            src={props.video}
            type="video/mp4"
          />
          <source src={props.video} type="video/ogg" />
        </video>
      </div>

      <NavLink
        to={props.route}
        className={styles.project__button}
        onClick={"scroll(0, 100)"}
      >
        <p className={styles.project__btn}>
          <IconContext.Provider value={{ size: "4.5rem" }}>
            {props.icon}
          </IconContext.Provider>
        </p>
      </NavLink>
    </>
  );
};

export default Project;
