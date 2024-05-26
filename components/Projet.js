import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import styles from "../styles/Projet.module.css";

function Projet() {
  return (
    <div className={styles.container}>
      <h1>Découvrez quelques projets !</h1>
      <div>
        <LightGallery plugins={[lgThumbnail]} speed={500} mode="lg-fade">
          <a
            href="/mymoviz.png"
            data-lg-size="1200-800"
            data-sub-html="<h4>My moviz</h4><p>Application développée avec React, déployé avec Vercel</p>"
          >
            <img src="/mymoviz.png" alt="My moviz" className={styles.image} />
          </a>
          <a
            href="/tickethack.jpg"
            data-lg-size="1200-800"
            data-sub-html="<h4>Tickethack</h4><p>Création d’un site web de réservation de billets de train avec NodeJS, Express, implémentation de TDD et API externe</p>"
          >
            <img src="/tickethack.jpg" alt="Image 2" className={styles.image} />
          </a>

          <a
            href="/morningnews.png"
            data-lg-size="1200-800"
            data-sub-html="<h4>Morning News</h4><p>Bakend généré avec Express, Store Redux pour la persistance des données et API externe</p>"
          >
            <img
              src="/morningnews.png"
              alt="Image 2"
              className={styles.image}
            />
          </a>
          <a
            href="/solstice-energie.png"
            data-lg-size="1200-800"
            data-sub-html="<h4>Solstice Energie</h4><p>Site web créé avec WordPress pour un installateur de panneaux solaires</p>"
          >
            <img
              src="/solstice-energie.png"
              alt="Image 2"
              className={styles.image}
            />
          </a>
          <a
            href="/montessori.png"
            data-lg-size="1200-800"
            data-sub-html="<h4>Apprendre en s'Amusant</h4><p>Site e-commerce créé avec Shopify </p>"
          >
            <img src="/montessori.png" alt="Image 2" className={styles.image} />
          </a>
          <a
            href="/harmony-home.jpg"
            data-lg-size="600-800"
            data-sub-html="<h4>Harmony Home</h4><p>Application mobile de colocation intergénérationnelle développée avec React Native</p>"
          >
            <img
              src="/harmony-home.jpg"
              alt="Image 2"
              className={styles.imageMobile}
            />
          </a>
          <a
            href="/hps.png"
            data-lg-size="1200-800"
            data-sub-html="<h4>Habitat Pro Solution</h4><p>Site vitrine créé avec Wordpress </p>"
          >
            <img src="/hps.png" alt="Image 2" className={styles.image} />
          </a>
          <a
            href="/view-garden.png"
            data-lg-size="1200-800"
            data-sub-html="<h4>View Garden</h4><p>Site vitrine créé avec Wordpress </p>"
          >
            <img
              src="/view-garden.png"
              alt="Image 2"
              className={styles.image}
            />
          </a>
          <a
            href="/weather-app.jpg"
            data-lg-size="1200-800"
            data-sub-html="<h4>VWeather App </h4><p>Application web, API externe </p>"
          >
            <img
              src="/weather-app.jpg"
              alt="Image 2"
              className={styles.image}
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
}

export default Projet;
