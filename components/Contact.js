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
        <div>
          <Formik
            initialValues={{ email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.input}
                  placeholder="Email"
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={styles.input}
                  placeholder="Ecrire un message"
                />
                {errors.password && touched.password && errors.password}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.buttonSubmit}
                >
                  Envoyer un message
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
