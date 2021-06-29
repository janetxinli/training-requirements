import { getAxisFontSize } from "./getFontSize";
import { getPrintableValue } from "./getPrintableValue";

export const getAxis = (category, chartData) => {
  switch (category) {
    case "gdpPercap":
      return {
        type: "logarithmic",
        offset: false,
        min: 100,
        max: 120000,
        title: {
          display: true,
          text: "Income per person (GDP/capita)",
          font: {
            size: getAxisFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            family: "'Work Sans', sans-serif",
          },
          autoSkip: false,
          includeBounds: false,
          backdropPadding: 0,
        },
      };
    case "year":
      return {
        type: "category",
        labels: chartData.allYears.map((d) => d).concat("", "", "Today"),
        title: {
          display: true,
          text: "Time",
          font: {
            size: getAxisFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            family: "'Work Sans', sans-serif",
          },
        },
      };
    case "fertilityRate":
      return {
        type: "linear",
        min: 0,
        max: 9,
        title: {
          display: true,
          text: "Babies per Woman",
          font: {
            size: getAxisFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            family: "'Work Sans', sans-serif",
          },
          autoSkip: false,
          includeBounds: false,
          backdropPadding: 0,
        },
      };
    case "co2":
      return {
        type: "logarithmic",
        offset: false,
        min: 0.001,
        max: 200,
        title: {
          display: true,
          text: "CO2 Emissions per Person",
          font: {
            size: getAxisFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            family: "'Work Sans', sans-serif",
          },
          callback: (v, i, ticks) => {
            if (ticks[i].major) {
              return ticks[i].value;
            }
            return null;
          },
          autoSkip: true,
          includeBounds: false,
          backdropPadding: 0,
        },
      };
    case "population":
      return {
        type: "linear",
        min: 0,
        max: 1750000000,
        title: {
          display: true,
          text: "Population",
          font: {
            size: getAxisFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            family: "'Work Sans', sans-serif",
          },
          callback: (v, i, ticks) => getPrintableValue(ticks[i].value),
          autoSkip: false,
          includeBounds: false,
          backdropPadding: 0,
        },
      };
    case "lifeExpectancy":
      return {
        type: "linear",
        min: 20,
        max: 90,
        title: {
          display: true,
          text: "Life expectancy (years)",
          font: {
            size: getAxisFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        ticks: {
          font: {
            family: "'Work Sans', sans-serif",
          },
          autoSkip: false,
          includeBounds: false,
          backdropPadding: 0,
        },
      };
    default:
      return {};
  }
};
