import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FaCss3Alt, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import styles from "./Projects.module.css";
import { languageContext } from "../store/langContext";
import { AiFillHtml5 } from "react-icons/ai";
import { Fade } from "react-reveal";

const Projects = () => {
  const langCtx = useContext(languageContext);

  return (
    <div className={styles.projects} id="projects">
      {/*  PROJECT TRACKER*/}
      {/*  PROJECT TRACKER*/}
      {/*  PROJECT TRACKER*/}

      <div className={styles.project__view}>
        <div className={styles.project__about}>
          <h1 className={styles.project__header}>Tracker</h1>
          <div className={styles.project__list}>
            <ul>
              <li className={styles.project__icon}>
                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#61DBFB" }}
                >
                  <SiReact />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "1.2rem", color: "#c69" }}>
                  <FaSass />
                </IconContext.Provider>
              </li>
            </ul>
          </div>
          <p className={styles.project__description}>
            {!langCtx.language ? "Personal project made with React, web app for organizing tasks also RWD." : "Personalny projekt, aplikacja stworzona w react do organizacji zadań. (RWD)"}
          </p>
          <div>
            <a
              href="https://cubedtracker.netlify.app/"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/FilipToczynski/Tracker"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <Fade>
          <div className={styles.project__watermark}>Tracker</div>
        </Fade>
        <Fade bottom>
          <div className={styles.project__right}>
              <video id="my-video" controls preload="auto" autoPlay>
                <source
                  className={styles.project__video}
                  src="https://filiptoczynski.netlify.app/img/tracker.mp4"
                  type="video/mp4"
                />
              </video>
          </div>
        </Fade>
      </div>

      {/*  PROJECT BELLYCIOUS*/}
      {/*  PROJECT BELLYCIOUS*/}
      {/*  PROJECT BELLYCIOUS*/}

      <div className={styles.project__view}>
        <Fade>
          <div
            className={
              styles.project__watermark + " " + styles.project__rightWM
            }
          >
            Bellycious
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.project__left + " " + styles.project__belly}>
              <video id="my-video" controls preload="auto" autoPlay>
                <source
                  className={styles.project__video}
                  src="https://filiptoczynski.netlify.app/img/Bellycious.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://filiptoczynski.netlify.app/img/Bellycious.mp4"
                  type="video/ogg"
                />
              </video>
          </div>
        </Fade>
        <div className={styles.project__about}>
          <h1 className={styles.project__header}>Bellycious</h1>
          <div className={styles.project__list}>
            <ul>
              <li className={styles.project__icon}>
                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#61DBFB" }}
                >
                  <SiReact />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#007acc" }}
                >
                  <SiTypescript />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#e93837" }}
                >
                  <SiTestinglibrary />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "1.2rem", color: "#c69" }}>
                  <FaSass />
                </IconContext.Provider>
              </li>
            </ul>
          </div>
          <p className={styles.project__description}>
            {!langCtx.language
              ? "App for browsing food recipes from forkify-API. Project I made to practice React, TypeScript, and unit testing. Also made a login functionality with firebase-API."
              : "Aplikacja do przeglądania przepisów z forkify-API. Projekt dla praktyki Reacta, TypeScripta i testów jednostkowych, również stworzyłem funcjonalość logowania."}
          </p>
          <div>
            <a
              href="https://bellycious.netlify.app/"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/FilipToczynski/Bellycious"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      {/*  PROJECT Cloud Host*/}
      {/*  PROJECT Cloud Host*/}
      {/*  PROJECT Cloud Host*/}

      <div className={styles.project__view}>
        <div className={styles.project__about}>
          <h1 className={styles.project__header}>Cloud Host</h1>
          <div className={styles.project__list}>
            <ul>
              <li className={styles.project__icon}>
                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#F0DB4F" }}
                >
                  <SiJavascript />
                </IconContext.Provider>

                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#e34c26" }}
                >
                  <AiFillHtml5 />
                </IconContext.Provider>

                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#264de4" }}
                >
                  <FaCss3Alt />
                </IconContext.Provider>
              </li>
            </ul>
          </div>
          <p className={styles.project__description}>
            {!langCtx.language
              ? "Practice website with modern features like sticky navigation, slide component, and some cool animations."
              : "Strona dla praktyki z modernistycznymi cechami jak sticky navigation, slide component i animacje"}
          </p>
          <div>
            <a
              href="https://cloudhostapp.netlify.app/"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/FilipToczynski/Cloud-Host"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <Fade>
          <div className={styles.project__watermark + " " + styles.scroll}>
            Cloud
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.project__right + " " + styles.project__cloud}>
              <video id="my-video" controls preload="auto" autoPlay>
                <source
                  className={styles.project__video}
                  src="https://filiptoczynski.netlify.app/img/cloud-host.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://filiptoczynski.netlify.app/img/cloud-host.mp4"
                  type="video/ogg"
                />
              </video>
          </div>
        </Fade>
      </div>

      {/*  PROJECT Spotify*/}
      {/*  PROJECT Spotify*/}
      {/*  PROJECT Spotify*/}

      <div className={styles.project__view}>
        <Fade>
          <div
            className={
              styles.project__watermark + " " + styles.project__rightWM
            }
          >
            Spotify
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.project__left + " " + styles.project__spotify}>
              <video id="my-video" controls preload="auto" autoPlay>
                <source
                  className={styles.project__video}
                  src="https://filiptoczynski.netlify.app/img/not-spotify.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://filiptoczynski.netlify.app/img/not-spotify.mp4"
                  type="video/ogg"
                />
              </video>
          </div>
        </Fade>
        <div className={styles.project__about}>
          <h1 className={styles.project__header}>Spotify</h1>
          <div className={styles.project__list}>
            <ul>
              <li className={styles.project__icon}>
                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#e34c26" }}
                >
                  <AiFillHtml5 />
                </IconContext.Provider>

                <IconContext.Provider
                  value={{ size: "1.2rem", color: "#264de4" }}
                >
                  <FaCss3Alt />
                </IconContext.Provider>
              </li>
            </ul>
          </div>
          <p className={styles.project__description}>
            {!langCtx.language
              ? "Personal project in which i recreated spotify's landing page to practice RWD (Note that they often change their layout)."
              : "Osobisty projekt w którym odtworzyłem stronę spotfiy dla praktyki RWD (może się różnić bo często zmieniają)"}
          </p>
          <div>
            <a
              href="https://not-spotify.netlify.app/"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <a
              href="https://github.com/FilipToczynski/Not-spotify"
              className={styles.project__link}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
