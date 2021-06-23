import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const location = useLocation();

  return (
    <header className={`container df df-ai-c df-jc-c ${styles.header}`}>
      <Link to="/">
        <h1 className={styles.logo}>Gapminder</h1>
      </Link>

      <nav className={`df ${styles["nav-bar"]}`}>
        <Link
          to="/"
          className={`${styles["nav-link"]} ${
            location.pathname === "/" ? styles.current : null
          }`}
        >
          Home
        </Link>
        <Link
          to="/bubble"
          className={`${styles["nav-link"]} ${
            location.pathname === "/bubble" ? styles.current : null
          }`}
        >
          Bubble
        </Link>
        <Link
          to="/line"
          className={`${styles["nav-link"]} ${
            location.pathname === "/line" ? styles.current : null
          }`}
        >
          Line
        </Link>
      </nav>
    </header>
  );
};
