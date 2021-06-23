import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => (
  <main className="container">
    <h2>Gapminder Data Visualization</h2>

    <article className={`df df-fc df-ai-c df-jc-c ${styles.text}`}>
      <p>
        <a
          href="https://www.gapminder.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gapminder
        </a>{" "}
        is a Swedish organization that fights ignorance and promotes a better
        understanding of the world by making data available and accessible.
        <br />
        <br />
        Explore the relationship between GDP per capita, life expectancy and
        other attributes with a Bubble Chart <Link to="/bubble">here</Link>.
        <br />
        <br />
        Explore how GDP per capita changes over time in different countries here
        with a Line Chart <Link to="/line">here</Link>.
        <br />
      </p>
    </article>
  </main>
);
