import styles from "./Footer.module.css";
import { SiReact } from "react-icons/si";
import { IconContext } from "react-icons";
import { useContext } from "react";
import languageContext from "../store/langContext";
const Footer = () => {
  const langCtx = useContext(languageContext);
  return (
    <>
      {!langCtx.language && <footer className={styles.footer}>
        <a href="#navigation">
          <h1>Top</h1>
        </a>

        <ul>
          <h1>credit for images</h1>
          <a href="https://www.pexels.com/pl-pl/@tima-miroshnichenko/">
            <li>Tima Miroshnichenko</li>
          </a>
          <a href="https://unsplash.com/@jannerboy62">
            <li>Nick Fewings</li>
          </a>
          <a href="https://unsplash.com/@alexbemore">
            <li>Alexander Shatov</li>
          </a>
        </ul>
      
        
      </footer>}

      {langCtx.language && <footer className={styles.footer}>
        <a href="#navigation">
          <h1>Góra</h1>
        </a>
        <h1 className={styles.footer__react}>
          Stworzone w
          <IconContext.Provider
            value={{ size: "1.2rem", color: "#61DBFB", className: styles.spin }}
          >
            <SiReact />
          </IconContext.Provider>
          React
        </h1>

        <ul>
          <h1>Zdjęcia od</h1>
          <a href="https://unsplash.com/@dav420">
           <li>David Pupaza</li>
          </a>
          <a href="https://unsplash.com/@brookelark">
            <li>Brooke Lark</li>
          </a>
          <a href="https://unsplash.com/@gradienta">
            <li>Gradienta</li>
          </a>
        </ul>
      </footer>}
    </>
  );
};

export default Footer;
