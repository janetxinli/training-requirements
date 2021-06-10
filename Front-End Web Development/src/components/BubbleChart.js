import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { Bubble } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { bubbleChartHover } from "../helpers/bubbleChartHover";
import { getBubbleBackgroundColour } from "../helpers/getBubbleBackgroundColour";
import { getBubbleBorderColour } from "../helpers/getBubbleBorderColour";
import { Slider } from "./Slider";
import { SelectCountries } from "./SelectCountries";
import styles from "./BubbleChart.module.css";

Chart.register(annotationPlugin);

const radiusScale = {
  population: 1 / 15000000,
  babiesPerWoman: 3,
  co2: 1,
};

//TODO move datalist to slider component
//TODO chart.setActiveElements to show tooltips programmatically (with selected state?)
//TODO createRef to set selected so chart doesn't re-render

export const BubbleChart = ({ allData }) => {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(2007);
  const [allYears, setAllYears] = useState([]);
  const [selected, setSelected] = useState(null);
  const [sizeValue, setSizeValue] = useState("population");
  const ref = React.createRef();

  useEffect(() => {
    const filteredData = allData
      .filter((d) => d.year === year)
      .filter((d) => {
        return (
          d.x !== undefined && d.y !== undefined && d[sizeValue] !== undefined
        );
      });
    setData(filteredData);
  }, [allData, year, sizeValue]);

  useEffect(() => {
    if (data) {
      setAllYears([...new Set(allData.map((d) => d.year))]);
      setSelected(
        [...new Set(data.map((d) => d.label))].reduce((o, a) => {
          o[a] = false;
          return o;
        }, {})
      );
    }
  }, [allData, data]);

  const toggleSelected = (country) => {
    setSelected({ ...selected, [country]: !selected[country] });
  };

  if (data && selected) {
    const chartData = {
      datasets: [
        {
          label: "Population",
          data: data.map((d) => {
            return {
              x: d.x,
              y: d.y,
              label: d.label,
              r: radiusScale[sizeValue] * d[sizeValue],
              continent: d.continent,
            };
          }),
          backgroundColor: getBubbleBackgroundColour(data, selected),
          borderWidth: 1,
          borderColor: getBubbleBorderColour(data, selected),
        },
      ],
    };

    const chartOptions = {
      onHover: (e, data, chart) =>
        bubbleChartHover(
          e,
          data,
          chart,
          radiusScale[sizeValue],
          selected,
          ref
        ),
      onClick: (e, data, chart) => {
        if (data.length) {
          setSelected({
            ...selected,
            [`${chart.data.datasets[0].data[data[0].index].label}`]:
              !selected[`${chart.data.datasets[0].data[data[0].index].label}`],
          });
        }
      },
      scales: {
        x: {
          type: "logarithmic",
          min: 500,
          max: 100000,
          title: {
            display: true,
            text: "Income",
            font: {
              size: 24,
            },
          },
        },
        y: {
          min: 20,
          max: 90,
          title: {
            display: true,
            text: "Life expectancy",
            font: {
              size: 24,
            },
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              return ctx.dataset.data[ctx.dataIndex].label;
            },
          },
          displayColors: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: year,
          font: {
            size: 36,
          },
        },
      },
    };

    return (
      <main className={`container df df-ai-c ${styles["bubble-main"]}`}>
        <div className={`df df-fc ${styles["bubble-chart"]}`}>
          <Bubble data={chartData} options={chartOptions} height={300} />
          <Slider
            min="0"
            max={allYears.length - 1}
            value={allYears.indexOf(year)}
            handleChange={({ target }) => setYear(allYears[target.value])}
            listId="year-values"
          />
          <datalist id="year-values">
            {[...new Set(data.map((d) => d.year))].map((v) => (
              <option key={v} value={v}></option>
            ))}
          </datalist>
        </div>
        <SelectCountries
          selected={selected}
          toggleSelected={toggleSelected}
          sizeValue={sizeValue}
          setSizeValue={setSizeValue}
          ref={ref}
        />
      </main>
    );
  }

  return <h2>Loading...</h2>;
};
