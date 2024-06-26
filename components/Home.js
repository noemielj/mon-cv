import React from "react";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, Button, Modal } from "antd";

function Home() {
  const [projet, setProjet] = useState("");
  const imageUrl = "/photo-cv.jpg";

  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(true);
  };

  // Fonction pour gérer l'annulation de la modale
  const handleCancel = () => {
    setOpen(false);
  };

  // Effet pour ouvrir la modale au démarrage de l'application
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmit = () => {
    console.log(projet);
  };

  // Définir les animations
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.container}>
      <>
        <Modal
          title="J'ai un scoop !"
          visible={open}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Je prends note"
          cancelText="Je te contacte rapidement"
        >
          <p>
            Psss... Je suis à la recherche d'un poste de développeuse web en
            Vendée ou Remote !
          </p>
        </Modal>
      </>
      <div className={styles.header}>
        <img
          src="/illustration-1.png"
          alt="Image 1"
          className={styles.imageIllustation}
        />
        <div className={styles.avatarContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              height: "100%",
              position: "absolute",
              width: "auto",
              top: "20%",
              marginLeft: "30px",
            }}
          >
            <Avatar src={imageUrl} shape="circle" size={200} />
          </div>
        </div>
        <h1 className={styles.heading}>Noëmie Louis-Joseph</h1>
        <p className={styles.subheading}>Développeuse Web FullStack Junior</p>
      </div>

      <div className={styles.cardContainer}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h3>Mon parcours</h3>
          <ul>
            <li>
              Développeuse d'application web et web mobile - RNCP niveau 6 - La
              Capsule
            </li>
            <li>
              Licence Responsable des Unités Commerciales Spécialisée en
              Communication Digitale
            </li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h3>A propos de moi</h3>
          <p>
            Qui suis-je ? Une jeune passionnée par l'univers du web. Chargée de
            webmarketing depuis 3 ans, j'ai décidé de me reconvertir en suivant
            une formation intensive de Développeuse d'application web et web
            mobile.
          </p>
        </motion.div>
      </div>

      <h2>Mes compétences</h2>
      <div className={styles.imageContainer}>
        <img src="/img.css.png" alt="css" className={styles.image} />
        <img src="/img.html.png" alt="html" className={styles.image} />
        <img src="/img.js.png" alt="javascript" className={styles.image} />
        <img src="/img.nodejs.png" alt="nodejs" className={styles.image} />
        <img src="/img.react.png" alt="react" className={styles.image} />
        <img src="/wordpress.png" alt="Wordpress" className={styles.image} />
        <img src="/php.png" alt="php" className={styles.image} />
      </div>

      <h2>Mes projets</h2>
      <div className={styles.cardAndCarouselContainer}>
        <div className={styles.cardProjets}>
          <motion.div
            className={styles.card}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h3 className={styles.creation}>Découvrez mes créations ! </h3>
            <p>
              {" "}
              React, React Native, Javascript, TypeScript Wordpress ou Shopify,
              j'ai développé ces applications web et web mobile dans le cadre de
              ma formation où sur mon temps libre.
            </p>
            <div>
              <Link href="/projet">
                <motion.button
                  className={styles.button}
                  onClick={() => handleSubmit()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  Découvez plus de projet !
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className={styles.carouselContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
          >
            <SwiperSlide>
              <img
                src="/morningnews.png"
                alt="Image 1"
                className={styles.imageCarrousel}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/weather-app.jpg"
                alt="Image 2"
                className={styles.imageCarrousel}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/solstice-energie.png"
                alt="Image 3"
                className={styles.imageCarrousel}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/mymoviz.png"
                alt="Image 4"
                className={styles.imageCarrousel}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
