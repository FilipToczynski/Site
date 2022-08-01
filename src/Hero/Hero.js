import { useContext } from "react";
import styles from "./Heros.module.css";
import languageContext from "../store/langContext";

const Hero = () => {
  const langctx = useContext(languageContext);

  return (
    <>
      {!langctx.language && (
        <div className={styles.hero}>
          <p className={styles.hero__welcome}>
            <span className={styles.hero__span}>Welcome!</span> My name is
            Filip, I'm a web development enthusiast based in Wrocław, Poland.{" "}
            <br /> If you've time or interest to see my work, check below.
          </p>
          <div className={styles.hero__image}>s</div>
        </div>
      )}

      {langctx.language && (
        <div className={styles.hero}>
          <p className={styles.hero__welcome}>
              <span className={styles.hero__span}>Witam!</span> Mam na imię Filip,
              jestem  Front end developerem z Wrocławia. <br /> Jak masz czas i chęci możesz zobaczyć moją pracę poniżej!
          </p>
          <div className={styles.hero__image}>s</div>
        </div>
      )}
    </>
  );
};

export default Hero;