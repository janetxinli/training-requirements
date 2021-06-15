import React from "react";

export const BubbleSizeDropdown = ({ sizeValue, setSizeValue, hoverValue }) => {
  return (
    <select
      className="dropdown"
      name="pets"
      defaultValue={sizeValue}
      onChange={(e) => setSizeValue(e.target.value)}
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
