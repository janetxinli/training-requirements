import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useChartData } from "../hooks/useChartData";
import { colours } from "../helpers/colours";
import { ChartPageLayout } from "./ChartPageLayout";
import { ChartAndSliderContainer } from "./ChartAndSliderContainer";
import { Slider } from "./Slider";
import { ChartSidebar } from "./ChartSidebar";

//TODO styles
//TODO wrapping text

export const LineChart = ({ allData }) => {
  const chartData = useChartData(allData, [
    "United States",
    "China",
    "Ethiopia",
  ]);
  const [maxYear, setMaxYear] = useState(2007);

  useEffect(() => {
    chartData.filterData((d) => {
      return d.year <= maxYear;
    });
  }, [maxYear]);

  if (chartData.data && chartData.selected) {
    const data = {
      labels: chartData.allYears,
      datasets: Object.entries(chartData.selected)
        .filter((o) => o[1] === true)
        .map((o) => o[0])
        .map((c) => {
          const countryData = chartData.data.filter((d) => d.label === c);
          const continent = countryData[0].continent;
          return {
            label: c,
            data: countryData.map((p) => {
              return {
                x: p.year,
                y: p.gdpPercap,
              };
            }),
            borderColor: `rgba(${colours[continent].red}, ${colours[continent].green}, ${colours[continent].blue}, 1)`,
            borderWidth: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: `rgba(${colours[continent].red}, ${colours[continent].green}, ${colours[continent].blue}, 1)`,
            pointBorderColor: "rgb(0, 0, 0)",
            pointRadius: countryData.map((p) => (p.year === maxYear ? 8 : 0)),
            pointHoverRadius: countryData.map((p) =>
              p.year === maxYear ? 8 : 0
            ),
            pointHoverBorderWidth: 3,
            datalabels: {
              align: "right",
              font: {
                size: 16,
                family: "'Work Sans', sans-serif",
              },
              padding: {
                left: 10,
              },
            },
          };
        }),
    };

    const chartOptions = {
      layout: {
        padding: {
          right: 80,
        },
      },
      animation: {
        duration: 0,
      },
      onHover: (e, data, chart) => {
        if (data.length) {
          chart.data.datasets = chart.data.datasets.map((d, i) => {
            if (i === data[0].datasetIndex) {
              return d;
            } else {
              return {
                ...d,
                borderColor: d.borderColor.replace(/[0.]?1\)/, "0.1)"),
                pointBackgroundColor: d.pointBackgroundColor.replace(
                  /[0.]?1\)/,
                  "0.1)"
                ),
                pointBorderColor: "rgba(128, 128, 128, 0.1)",
              };
            }
          });
          chart.update();
        } else {
          chart.data.datasets = chart.data.datasets.map((d) => ({
            ...d,
            borderColor: d.borderColor.replace(/0.1\)/, "1)"),
            pointBackgroundColor: d.pointBackgroundColor.replace(/0.1\)/, "1)"),
            pointBorderColor: "rgb(0, 0, 0)",
          }));
          chart.update();
        }
      },
      scales: {
        x: {
          type: "category",
          labels: chartData.allYears.map((d) => "" + d).concat("2021"),
        },
        y: {
          type: "logarithmic",
          min: 0,
          max: 80000,
          title: {
            display: true,
            text: "Income per person (GDP/capita, PPP$ inflation-adjusted)",
          },
        },
      },
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        annotation: {
          annotations: {
            line1: {
              type: "line",
              mode: "vertical",
              drawTime: "beforeDraw",
              xMin: "" + maxYear,
              xMax: "" + maxYear,
              borderColor: "rgb(128, 128, 128)",
              borderWidth: 1,
              borderDash: [3],
            },
          },
        },
        datalabels: {
          formatter: (value, context) => {
            if (context.dataIndex === context.dataset.data.length - 1) {
              return context.dataset.label;
            }
            return null;
          },
          color: (context) => {
            return context.dataset.borderColor;
          },
        },
      },
    };

    return (
      <ChartPageLayout>
        <ChartAndSliderContainer>
          <Line data={data} options={chartOptions} height={300} />
          <Slider
            listData={chartData.allYears}
            min="0"
            max={chartData.allYears.length - 1}
            value={chartData.allYears.indexOf(maxYear)}
            handleChange={({ target }) =>
              setMaxYear(chartData.allYears[target.value])
            }
          />
        </ChartAndSliderContainer>
        <ChartSidebar
          selected={chartData.selected}
          toggleSelected={chartData.toggleSelected}
        />
      </ChartPageLayout>
    );
  }

  return <p>Loading</p>;
};
