import React from "react";
import styles from "./BubbleSizeDropdown.module.css";

//TODO make sure non-hovering categories aren't changed on hover
export const BubbleSizeDropdown = ({ sizeValue, setSizeValue, hoverValue }) => {
  return (
    <select
      name="pets"
      defaultValue={sizeValue}
      onChange={(e) => setSizeValue(e.target.value)}
      className={styles.dropdown}
    >
      <option value="population">
        {hoverValue ? hoverValue : "Population"}
      </option>
      <option value="babiesPerWoman">
        {hoverValue ? hoverValue : "Babies Per Woman"}
      </option>
      <option value="co2">
        {hoverValue ? hoverValue : "CO2 Emissions per Person"}
      </option>
    </select>
  );
};
