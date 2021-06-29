import React from "react";

export const BubbleSizeDropdown = ({ sizeValue, setSizeValue, hoverValue }) => (
  <span className="select-container">
    <p className="select-label">bubble size</p>
    <select
      defaultValue={sizeValue}
      onChange={(e) => setSizeValue(e.target.value)}
    >
      <option value="population">
        {sizeValue === "population" && hoverValue ? hoverValue : "Population"}
      </option>
      <option value="fertilityRate">
        {sizeValue === "fertilityRate" && hoverValue
          ? hoverValue
          : "Babies per Woman"}
      </option>
      <option value="co2">
        {sizeValue === "co2" && hoverValue
          ? hoverValue
          : "CO2 Emissions per Person"}
      </option>
    </select>
  </span>
);
