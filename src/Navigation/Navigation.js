import styles from "./Navigation.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { IconContext } from "react-icons";
import { useContext } from "react";
import languageContext from "../store/langContext";

const Navigation = () => {
  const langCtx = useContext(languageContext);
  return (
    <>
      {!langCtx.language && (
        <nav>
          <ul className={styles.list} id="navigation">
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#projects">
                <span className={styles.list__line}>Projects</span>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#skills">
                <span className={styles.list__line}>Skills</span>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a
                className={styles.list__link}
                href="https://github.com/FilipToczynski"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.list__line}>Github</span>

                <IconContext.Provider
                  value={{ size: "12px", className: styles.list__linkIcon }}
                >
                  <BsBoxArrowUpRight />
                </IconContext.Provider>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#contact">
                <span className={styles.list__line}>Contact</span>
              </a>
            </li>
            <li className={styles.list__Item} onClick={langCtx.switchLang}>
              <span className={styles.list__link}>
                <span className={styles.list__line}>
                  <IconContext.Provider
                    value={{ size: "1rem", className: styles.list__linkIcon }}
                  >
                    <MdLanguage />
                  </IconContext.Provider>
                  {langCtx.language ? "EN" : "PL"}
                </span>
              </span>
            </li>
          </ul>
        </nav>
      )}

      {langCtx.language && (
        <nav>
          <ul className={styles.list} id="navigation">
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#projects">
                <span className={styles.list__line}>Projekty</span>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#skills">
                <span className={styles.list__line}>Umiejętności</span>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a
                className={styles.list__link}
                href="https://github.com/FilipToczynski"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.list__line}>Github</span>

                <IconContext.Provider
                  value={{ size: "12px", className: styles.list__linkIcon }}
                >
                  <BsBoxArrowUpRight />
                </IconContext.Provider>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#contact">
                <span className={styles.list__line}>Kontakt</span>
              </a>
            </li>
            <li className={styles.list__Item} onClick={langCtx.switchLang}>
              <span className={styles.list__link}>
                <span className={styles.list__line}>
                  <IconContext.Provider
                    value={{ size: "1rem", className: styles.list__linkIcon }}
                  >
                    <MdLanguage />
                  </IconContext.Provider>
                  {langCtx.language ? "EN" : "PL"}
                </span>
              </span>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
