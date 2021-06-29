import React from "react";

export const AxisDropdown = ({ choice, handleChange, label }) => (
  <div className="select-container">
    <p className="select-label">{label}</p>
    <select defaultValue={choice} onChange={handleChange}>
      <option value="fertilityRate">Babies per Woman</option>
      <option value="co2">CO2 Emissions per Person</option>
      <option value="gdpPercap">Income per Person</option>
      <option value="lifeExpectancy">Life Expectancy</option>
      <option value="population">Population</option>
      <option value="year">Time</option>
    </select>
  </div>
);
