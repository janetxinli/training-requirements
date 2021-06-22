import React, { useState } from "react";
import styles from "./ChartSidebar.module.scss";

export const ChartSidebar = ({ selected, toggleSelected, children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className={`df df-fc df-ai-c ${styles.sidebar}`}>
      <img
        src={`${process.env.PUBLIC_URL}/world_colour_map.svg`}
        alt="Colour legend map for plot points"
        className={styles.map}
      />
      <input
        type="text"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        className={styles.search}
        placeholder="Search"
      />

      <article className={`df df-fc df-ai-fs ${styles.select}`}>
        {Object.entries(selected).filter((o) => o[1] === true).length > 0 ? (
          <article
            className={`df df-fc df-ai-fs ${styles["selected-countries"]}`}
          >
            {/* list of selected countries */}

            {Object.entries(selected)
              .filter((o) => o[1] === true)
              .map((o) => o[0])
              .map((l) => (
                <article className={styles["country-name"]} key={l}>
                  <input
                    type="checkbox"
                    id={l}
                    name={l}
                    defaultChecked={selected[l]}
                    onClick={() => toggleSelected(l)}
                  />
                  <label htmlFor={l}>{l}</label>
                </article>
              ))}
          </article>
        ) : null}

        <article
          className={`df df-fc df-ai-fs ${styles["unselected-countries"]}`}
        >
          {/* list of unselected countries or countries matching search value */}

          {searchValue === ""
            ? Object.entries(selected)
                .filter((o) => o[1] === false)
                .map((o) => o[0])
                .map((l) => (
                  <article className={styles["country-name"]} key={l}>
                    <input
                      type="checkbox"
                      id={l}
                      name={l}
                      defaultChecked={selected[l]}
                      onClick={() => toggleSelected(l)}
                    />
                    <label htmlFor={l}>{l}</label>
                  </article>
                ))
            : Object.entries(selected)
                .filter((o) => o[1] === false)
                .map((o) => o[0])
                .filter(
                  (n) => n.toLowerCase().search(searchValue.toLowerCase()) > -1,
                )
                .map((l) => (
                  <article className={styles["country-name"]} key={l}>
                    <input
                      type="checkbox"
                      id={l}
                      name={l}
                      defaultChecked={selected[l]}
                      onClick={() => toggleSelected(l)}
                    />
                    <label htmlFor={l}>{l}</label>
                  </article>
                ))}
        </article>
      </article>
      {children}
    </section>
  );
};
