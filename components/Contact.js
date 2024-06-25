import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";

function Contact() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Contactez-moi</h1>
        <div className="coordonnees">
          <div>
            <FontAwesomeIcon icon={faPhone} color="black" />
            <span className="info-text">07.81.83.19.29</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} color="black" />
            <span className="info-text">noemie.louisjoseph1@gmail.com</span>
          </div>
          <p>
            Git Hub : <a href="https://github.com/noemielj">noemielj</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
