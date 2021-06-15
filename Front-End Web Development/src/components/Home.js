import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className={`container`}>
      <h2>Gapminder Data Visualization</h2>

      <article>
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
          Explore how GDP per capita changes over time in different countries
          here with a Line Chart <Link to="/line">here</Link>.
        </p>
      </article>
    </main>
  );
};
