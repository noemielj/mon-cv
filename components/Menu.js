import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Découvrez mon CV</span>
      <div className={styles.linkContainer}>
        <Link href="/">
          <span className={styles.link}>Home</span>
        </Link>

        <Link href="/projet">
          <span className={styles.link}>Mes projets</span>
        </Link>

        <Link href="/contact">
          <span className={styles.link}>Contactez-moi</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
