import { Link } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'

import styles from "./Thanks.module.css";
function Thanks() {
  return (
    <div className={styles.thanks}>
      <h1 className={styles.thanks__header}>Thanks for reaching out!</h1>
      <p className={styles.thanks__p}>I'll reply as soon as possible</p>
      <Link to="/" className={styles.thanks__btn}>
       <IoIosArrowBack /> Back
      </Link>
    </div>
  );
}

export default Thanks;
