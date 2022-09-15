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
                Projects
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#skills">
                Skills
              </a>
            </li>
            <li className={styles.list__Item}>
              <a
                className={styles.list__link}
                href="https://github.com/FilipToczynski"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <IconContext.Provider
                  value={{ size: "12px", className: styles.list__linkIcon }}
                >
                  <BsBoxArrowUpRight />
                </IconContext.Provider>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#contact">
                Contact
              </a>
            </li>
            <li className={styles.list__link} onClick={langCtx.switchLang}>
              <IconContext.Provider
                value={{ size: "1rem", className: styles.list__linkIcon }}
              >
                <MdLanguage />
              </IconContext.Provider>
              {langCtx.language ? "EN" : "PL"}
            </li>
          </ul>
        </nav>
      )}

      {langCtx.language && (
        <nav>
          <ul className={styles.list} id="navigation">
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#projects">
                Projekty
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#skills">
                Umiejętności
              </a>
            </li>
            <li className={styles.list__Item}>
              <a
                className={styles.list__link}
                href="https://github.com/FilipToczynski"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <IconContext.Provider
                  value={{ size: "12px", className: styles.list__linkIcon }}
                >
                  <BsBoxArrowUpRight />
                </IconContext.Provider>
              </a>
            </li>
            <li className={styles.list__Item}>
              <a className={styles.list__link} href="#contact">
                Kontakt
              </a>
            </li>
            <li className={styles.list__link} onClick={langCtx.switchLang}>
              <IconContext.Provider
                value={{ size: "1rem", className: styles.list__linkIcon }}
              >
                <MdLanguage />
              </IconContext.Provider>
              {!langCtx.language ? "PL" : "EN"}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
