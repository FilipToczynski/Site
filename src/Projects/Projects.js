import styles from "./Projects.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import languageContext from "../store/langContext";

const Projects = () => {
  const langctx = useContext(languageContext);

  return (
    <>
      <h1 id="projects" className={styles.projects__header}>
        <>
          {!langctx.language && 'my work'}
          {langctx.language && 'projekty'}
        </>
      </h1>
      <div className={styles.projects}>
        <NavLink to="bellycious">
          <div className={styles.projects__project}>
            <fig className={styles.projects__figure}>
              <img
                onClick="scroll(0, 100);"
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80"
                alt="project"
              ></img>
            </fig>
            <div className={styles.project__name}>
              <h1 className={styles.project__heading}>Bellycious</h1>
            </div>
          </div>
        </NavLink>
        <NavLink to="this">
          <div className={styles.projects__project}>
            <fig className={styles.projects__figure}>
              <img
                onClick="scroll(0, 100);"
                src="https://thumbs2.imgbox.com/d3/80/ULI4H71F_t.png"
                alt="project"
              ></img>
            </fig>
            <div className={styles.project__name}>
              <h1 className={styles.project__heading}>This</h1>
            </div>
          </div>
        </NavLink>
        <NavLink to="cloud">
          <div className={styles.projects__project}>
            <fig className={styles.projects__figure}>
              <img
                onClick="scroll(0, 100);"
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="project"
              ></img>
            </fig>
            <div className={styles.project__name}>
              <h1 className={styles.project__heading}>Cloud Host</h1>
            </div>
          </div>
        </NavLink>
        <NavLink to="spotify">
          <div className={styles.projects__project}>
            <fig className={styles.projects__figure}>
              <img
                onClick="scroll(0, 100);"
                src="https://images.unsplash.com/photo-1623018035231-ebe361a64c76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="project"
              ></img>
            </fig>
            <div className={styles.project__name}>
              <h1 className={styles.project__heading}>Spotify</h1>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Projects;
