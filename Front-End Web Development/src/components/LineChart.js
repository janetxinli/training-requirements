import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useChartData } from "../hooks/useChartData";
import {
  getTitleFontSize,
  getAxisFontSize,
  getDatalabelFontSize,
} from "../helpers/getFontSize";
import { colours } from "../helpers/colours";
import { ChartPageLayout } from "./ChartPageLayout";
import { ChartAndSliderContainer } from "./ChartAndSliderContainer";
import { Slider } from "./Slider";
import { ChartSidebar } from "./ChartSidebar";

export const LineChart = ({ allData }) => {
  const chartData = useChartData(allData, ["Canada", "Indonesia", "Nigeria"]);
  const [maxYear, setMaxYear] = useState(2007);

  useEffect(() => {
    if (allData) {
      chartData.initializeData(
        allData.filter((d) => {
          return d.year <= maxYear;
        })
      );
    }
  }, [allData]);

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
          };
        }),
    };

    const chartOptions = {
      aspectRatio: 1,
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
          chart.config.options.plugins.datalabels.backgroundColor = (d) => {
            return d.datasetIndex === data[0].datasetIndex
              ? "rgba(0, 0, 0, 0.8)"
              : "rgba(0, 0, 0, 0.1)";
          };
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
          chart.config.options.plugins.datalabels.backgroundColor = (d) =>
            "rgba(0, 0, 0, 1)";
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
          labels: chartData.allYears.map((d) => "" + d).concat("", "", "Today"),
          title: {
            display: true,
            text: "Time",
            font: {
              size: window.innerWidth < 1280 ? 16 : 24,
              family: "'Work Sans', sans-serif",
            },
          },
          ticks: {
            font: {
              family: "'Work Sans', sans-serif",
            },
          },
        },
        y: {
          type: "logarithmic",
          min: 0,
          max: 80000,
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
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: `Until ${maxYear}`,
          font: {
            size: getTitleFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
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
              const label = context.dataset.label;
              const labelSplit = label.split(" ");
              if (label.split(" ").length > 2) {
                let wrappedLabel = "";
                for (let i = 0; i < labelSplit.length; i += 2) {
                  if (labelSplit[i + 1]) {
                    wrappedLabel += `${labelSplit[i]} ${labelSplit[i + 1]}`;
                  } else {
                    wrappedLabel += `${labelSplit[i]}`;
                  }
                  if (i < labelSplit.length - 2) {
                    wrappedLabel += "\n";
                  }
                }

                return wrappedLabel;
              }
              return labelSplit.join(" ");
            }
            return null;
          },
          color: "white",
          align: "right",
          font: {
            size: getDatalabelFontSize(),
            family: "'Work Sans', sans-serif",
          },
          offset: 14,
          backgroundColor: (d) => "rgba(0, 0, 0, 1)",
          borderRadius: 2,
          borderWidth: 1,
          clamp: true,
        },
      },
    };

    return (
      <ChartPageLayout>
        <ChartAndSliderContainer>
          <Line data={data} options={chartOptions} />
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
