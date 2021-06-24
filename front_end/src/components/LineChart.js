import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { getColour } from "../helpers/colours";
import {
  getAxisFontSize,
  getDatalabelFontSize,
  getTitleFontSize,
} from "../helpers/getFontSize";
import { lineChartHover } from "../helpers/lineChartHover";
import { useChartData } from "../hooks/useChartData";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { ChartAndSliderContainer } from "./ChartAndSliderContainer";
import { ChartPageLayout } from "./ChartPageLayout";
import { ChartSidebar } from "./ChartSidebar";
import { Loading } from "./Loading";
import { Slider } from "./Slider";

export const LineChart = ({ allData }) => {
  const chartData = useChartData(allData, ["Canada", "Indonesia", "Nigeria"]);
  const width = useWindowWidth();

  const [maxYear, setMaxYear] = useState(2007);

  const chartRef = useRef(null);

  // update chartData once loaded
  useEffect(() => {
    if (allData) {
      chartData.initializeData(allData.filter((d) => d.year <= maxYear));
    }
  }, [allData]);

  // filter chartData when maxYear changes
  useEffect(() => {
    chartData.filterData((d) => d.year <= maxYear);
  }, [maxYear]);

  // update chart to resize font on window resize
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [width]);

  if (chartData.data && chartData.selected) {
    // data available to render

    const data = {
      labels: chartData.allYears,
      datasets: Object.entries(chartData.selected)
        .filter((o) => o[1] === true)
        .map((o) => o[0])
        .map((c) => chartData.data.filter((d) => d.label === c))
        .filter((c) => c.length > 0)
        .map((c) => ({
          label: c[0].label,
          data: c.map((p) => ({ x: p.year, y: p.gdpPercap })),
          borderColor: getColour(c[0].continent),
          borderWidth: 5,
          pointBorderWidth: 3,
          pointBackgroundColor: getColour(c[0].continent),
          pointBorderColor: "rgb(0, 0, 0)",
          pointRadius: c.map((p) => (p.year === maxYear ? 8 : 0)),
          pointHoverRadius: c.map((p) => (p.year === maxYear ? 8 : 0)),
          pointHoverBorderWidth: 3,
        })),
    };

    const chartOptions = {
      aspectRatio: 1,
      layout: {
        padding: {
          top: getTitleFontSize() * 2,
          right: 60,
        },
      },
      animation: {
        duration: 0,
      },
      onHover: lineChartHover,
      scales: {
        x: {
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
            align: "center",
          },
          ticks: {
            font: {
              family: "'Work Sans', sans-serif",
            },
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
              xMin: maxYear,
              xMax: maxYear,
              borderColor: "rgb(128, 128, 128)",
              borderWidth: 1,
              borderDash: [3],
            },
          },
        },
        datalabels: {
          formatter: (value, context) => {
            if (context.dataIndex === context.dataset.data.length - 1) {
              const { label } = context.dataset;
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
          backgroundColor: () => "rgba(0, 0, 0, 0.8)",
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

  return <Loading />;
};
