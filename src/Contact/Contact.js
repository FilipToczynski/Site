import { useContext } from "react";
import styles from "./Contact.module.css";
import languageContext from "../store/langContext";
const Contact = () => {
  const langCtx = useContext(languageContext);

  return (
    <section className={styles.contact}>
      {!langCtx.language && (
        <h1 className={styles.contact__header}>Send me a message!</h1>
      )}
      {langCtx.language && (
        <h1 className={styles.contact__header}>Wyślij mi Wiadomość!</h1>
      )}
      <form
        action="https://formsubmit.co/ftoczynski1998@gmail.com"
        method="POST"
        id="contact"
        className={styles.contact__form}
      >
        <input type="hidden" name="_subject" value="Wiadomosc"></input>
        <input
          type="email"
          name="email"
          required
          placeholder="your email"
        ></input>
        <input
          type="hidden"
          name="_next"
          value="https://toczynski.netlify.app/thanks"
        ></input>
        <textarea
          type="text"
          name="message"
          required
          placeholder="your message"
        ></textarea>
        <button type="submit" className={styles.contact__button}>
          <p className={styles.contact__buttonText}>{!langCtx.language ? 'Send' : 'Wyślij'}</p>
        </button>
      </form>
    </section>
  );
};

export default Contact;
