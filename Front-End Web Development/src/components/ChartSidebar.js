import React, { useState } from "react";
import styles from "./ChartSidebar.module.css";

//TODO: make component for checkbox inputs?

export const ChartSidebar = ({ selected, toggleSelected, children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`df df-fc df-ai-c ${styles.sidebar}`}>
      <img src={process.env.PUBLIC_URL + "/world_colour_map.png"} alt="Colour legend map for plot points"/>
      <input
        type="text"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <div className={`df df-fc df-ai-fs ${styles.select}`}>
        {Object.entries(selected).filter((o) => o[1] === true).length > 0 ? (
          <div className={`df df-fc df-ai-fs ${styles["selected-countries"]}`}>
            {Object.entries(selected)
              .filter((o) => o[1] === true)
              .map((o) => o[0])
              .map((l) => {
                return (
                  <article className={styles["country-name"]} key={l}>
                    <input
                      type="checkbox"
                      id={l}
                      name={l}
                      defaultChecked={selected[l]}
                      onClick={() => toggleSelected(l)}
                    ></input>
                    <label htmlFor={l}>{l}</label>
                  </article>
                );
              })}
          </div>
        ) : null}

        <div className={`df df-fc df-ai-fs ${styles["unselected-countries"]}`}>
          {searchValue === ""
            ? Object.entries(selected)
                .filter((o) => o[1] === false)
                .map((o) => o[0])
                .map((l) => {
                  return (
                    <article className={styles["country-name"]} key={l}>
                      <input
                        type="checkbox"
                        id={l}
                        name={l}
                        defaultChecked={selected[l]}
                        onClick={() => toggleSelected(l)}
                      ></input>
                      <label htmlFor={l}>{l}</label>
                    </article>
                  );
                })
            : Object.entries(selected)
                .filter((o) => o[1] === false)
                .map((o) => o[0])
                .filter(
                  (n) => n.toLowerCase().search(searchValue.toLowerCase()) > -1
                )
                .map((l) => {
                  return (
                    <article className={styles["country-name"]} key={l}>
                      <input
                        type="checkbox"
                        id={l}
                        name={l}
                        defaultChecked={selected[l]}
                        onClick={() => toggleSelected(l)}
                      ></input>
                      <label htmlFor={l}>{l}</label>
                    </article>
                  );
                })}
        </div>
      </div>
      {children}
    </div>
  );
};
