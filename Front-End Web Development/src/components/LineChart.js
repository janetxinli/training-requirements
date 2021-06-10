import React, { useState } from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import { Slider } from "./Slider";
import SelectCountries from "./SelectCountries";

export const LineChart = ({ allData }) => {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(2007);


  return <p>Line Chart</p>;
};
