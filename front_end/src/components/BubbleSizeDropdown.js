import React from "react";
import styles from "./BubbleSizeDropdown.module.scss";

export const BubbleSizeDropdown = ({ sizeValue, setSizeValue, hoverValue }) => (
  <select
    name="pets"
    defaultValue={sizeValue}
    onChange={(e) => setSizeValue(e.target.value)}
    className={styles.dropdown}
  >
    <option value="population">
      {sizeValue === "population" && hoverValue ? hoverValue : "Population"}
    </option>
    <option value="babiesPerWoman">
      {sizeValue === "babiesPerWoman" && hoverValue
        ? hoverValue
        : "Babies per Woman"}
    </option>
    <option value="co2">
      {sizeValue === "co2" && hoverValue
        ? hoverValue
        : "CO2 Emissions per Person"}
    </option>
  </select>
);
