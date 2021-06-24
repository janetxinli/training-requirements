import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const location = useLocation();

  return (
    <header className={`container df df-ai-c df-jc-c ${styles.header}`}>
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <h1 className={styles.logo}>Gapminder</h1>
      </Link>

      <nav className={`df ${styles["nav-bar"]}`}>
        <Link
          to={`${process.env.PUBLIC_URL}/`}
          className={`${styles["nav-link"]} ${
            location.pathname === `${process.env.PUBLIC_URL}/` ? styles.current : null
          }`}
        >
          Home
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/bubble`}
          className={`${styles["nav-link"]} ${
            location.pathname === `${process.env.PUBLIC_URL}/bubble` ? styles.current : null
          }`}
        >
          Bubble
        </Link>
        <Link
          to={`${process.env.PUBLIC_URL}/line`}
          className={`${styles["nav-link"]} ${
            location.pathname === `${process.env.PUBLIC_URL}/line` ? styles.current : null
          }`}
        >
          Line
        </Link>
      </nav>
    </header>
  );
};
