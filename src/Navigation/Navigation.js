import styles from "./Navigation.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { IconContext } from "react-icons";
import { useContext, useState } from "react";
import languageContext from "../store/langContext";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {

  const [menu, setMenu] = useState(false);
  const langCtx = useContext(languageContext);

  const toggleMenu = () => {
    setMenu(!menu);
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const allowScroll = () => {
      window.onscroll = function() {};
      setMenu(!menu)
  }

  return (
    <>
    {menu && <div className={styles.overlay} onClick={allowScroll}></div>}
        <nav className={styles.burger}>
          <span onClick={toggleMenu}>
            <IconContext.Provider
              value={{
                size: "1.5rem",
                color: "#fff",
                className: styles.burgerIcon,
              }}
              >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </span>

              {menu && (
          <div className={styles.burgerMenu}>
            <span onClick={allowScroll}>
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  color: "#fff",
                  className: styles.burgerClose,
                }}
              >
                <AiOutlineClose />
              </IconContext.Provider>
              <ul className={styles.burgerList} id="navigation">
                <li className={styles.burgerList__Item}>
                  <a className={styles.burgerList__link} href="#projects">
                    Projects
                  </a>
                </li>
                <li className={styles.burgerList__Item}>
                  <a className={styles.burgerList__link} href="#skills">
                    Skills
                  </a>
                </li>
                <li className={styles.burgerList__Item}>
                  <a
                    className={styles.burgerList__link}
                    href="https://github.com/FilipToczynski"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li className={styles.burgerList__Item}>
                  <a className={styles.burgerList__link} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </span>
          </div>
      )}
        </nav>

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
        <nav id="blah">
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
