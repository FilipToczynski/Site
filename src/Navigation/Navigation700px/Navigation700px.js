import React, { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./navigation700px.module.css";
import { MdLanguage } from "react-icons/md";
import languageContext from "../../store/langContext";

function Navigation700px() {
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
              <p className={styles.skills__skill}></p>
            </IconContext.Provider>
          </span>

              {menu && (
          <div className={styles.burgerMenu}>
            <span onClick={allowScroll}>
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  color: "#fff",
                  className: styles.burgerIcon,
                }}
              >
                <AiOutlineClose />
                <p className={styles.skills__skill}></p>
              </IconContext.Provider>
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
            </span>
          </div>
      )}
        </nav>
    </>
  );
}

export default Navigation700px;
