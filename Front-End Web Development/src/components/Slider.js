import React from "react";
import styles from "./Slider.module.scss";

export const Slider = ({ listData, min, max, value, handleChange }) => (
  <>
    <input
      className={styles.slider}
      type="range"
      min={min}
      max={max}
      value={value}
      list="slider-data"
      onChange={handleChange}
    />
    <datalist id="slider-data">
      {listData.map((d) => (
        <option key={d} value={d} aria-label={d} />
      ))}
    </datalist>
  </>
);
