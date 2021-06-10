import React, { useState, useImperativeHandle, useEffect } from "react";
import styles from "./SelectCountries.module.css";

//TODO: make component for checkbox input

export const SelectCountries = React.forwardRef((props, ref) => {
  const { selected, toggleSelected, sizeValue, setSizeValue } = props;

  const [value, setValue] = useState("");
  const [hover, setHover] = useState(null);

  useImperativeHandle(ref, () => ({
    setHover,
  }));

  return (
    <div className={`df df-fc df-ai-c ${styles.sidebar}`}>
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
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
          {value === ""
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
                .filter((n) => n.toLowerCase().search(value.toLowerCase()) > -1)
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
      <select
        className="dropdown"
        name="pets"
        defaultValue={sizeValue}
        onChange={(e) => setSizeValue(e.target.value)}
      >
        <option value="population">{hover ? hover : "Population"}</option>
        <option value="babiesPerWoman">
          {hover ? hover : "Babies Per Woman"}
        </option>
        <option value="co2">
          {hover ? hover : "CO2 Emissions per Person"}
        </option>
      </select>
    </div>
  );
});
