import styles from "./Footer.module.css";
import { useContext } from "react";
import languageContext from "../store/langContext";

const Footer = () => {
  const langCtx = useContext(languageContext);
  return (
    <>
      {!langCtx.language && (
        <footer className={styles.footer}>
          <a href="#navigation">
            <h1>Top</h1>
          </a>
        </footer>
      )}

      {langCtx.language && (
        <footer className={styles.footer}>
          <a href="#navigation">
            <h1>Góra</h1>
          </a>
        </footer>
      )}
    </>
  );
};

export default Footer;
