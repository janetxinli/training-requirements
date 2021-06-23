import React, { useEffect, useRef, useState } from "react";
import { Bubble } from "react-chartjs-2";
import { bubbleChartHover } from "../helpers/bubbleChartHover";
import {
  getBubbleBackgroundColour,
  getBubbleBorderColour,
} from "../helpers/colours";
import {
  getAxisFontSize,
  getDatalabelFontSize,
  getTitleFontSize,
} from "../helpers/getFontSize";
import { useChartData } from "../hooks/useChartData";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { BubbleSizeDropdown } from "./BubbleSizeDropdown";
import { ChartAndSliderContainer } from "./ChartAndSliderContainer";
import { ChartPageLayout } from "./ChartPageLayout";
import { ChartSidebar } from "./ChartSidebar";
import { Loading } from "./Loading";
import { Slider } from "./Slider";

export const BubbleChart = ({ allData }) => {
  const chartData = useChartData(null);
  const width = useWindowWidth();

  const [radiusCategory, setRadiusCategory] = useState("population");
  const [currentYear, setCurrentYear] = useState(2007);
  const [hoverValue, setHoverValue] = useState(null);

  const chartRef = useRef(null);

  // define how bubble radii are scaled
  const radiusScale = {
    population: 1 / 15000000,
    babiesPerWoman: 3,
    co2: 1,
  };

  // update chartData once loaded
  useEffect(() => {
    if (allData) {
      chartData.initializeData(allData.filter((d) => d.year === currentYear));
    }
  }, [allData]);

  // filter chartData when currentYear changes
  useEffect(() => {
    chartData.filterData((d) => d.year === currentYear);
  }, [currentYear]);

  // update chart to resize font on window resize
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [width]);

  if (chartData.data && chartData.selected) {
    // data available to render

    const bubbleChartData = {
      datasets: [
        {
          label: "Population",
          data: chartData.data.map((d) => ({
            x: d.gdpPercap,
            y: d.lifeExpectancy,
            label: d.label,
            r: radiusScale[radiusCategory] * d[radiusCategory],
            continent: d.continent,
          })),
          backgroundColor: getBubbleBackgroundColour(
            chartData.data,
            chartData.selected,
          ),
          borderWidth: 1,
          borderColor: getBubbleBorderColour(
            chartData.data,
            chartData.selected,
          ),
        },
      ],
    };

    const bubbleChartOptions = {
      aspectRatio: 1,
      animation: {
        duration: 0,
      },
      onHover: (e, data, chart) =>
        bubbleChartHover(
          e,
          data,
          chart,
          radiusScale[radiusCategory],
          chartData.selected,
          setHoverValue,
        ),
      onClick: (e, data, chart) => {
        if (data.length) {
          chartData.toggleSelected(
            chart.data.datasets[0].data[data[0].index].label,
          );
        }
      },
      scales: {
        x: {
          type: "logarithmic",
          min: 0,
          max: 128000,
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
        y: {
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
          },
        },
      },
      plugins: {
        tooltip: {
          filter: (chart) => {
            // disable tooltip if data point is selected
            const { label } = chart.dataset.data[chart.dataIndex];
            return !chartData.selected[label];
          },
          callbacks: {
            label: (ctx) => ctx.dataset.data[ctx.dataIndex].label,
          },
          bodyFont: {
            family: "'Work Sans', sans-serif",
            size: getDatalabelFontSize(),
          },
          displayColors: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: currentYear,
          font: {
            size: getTitleFontSize(),
            family: "'Work Sans', sans-serif",
          },
        },
        datalabels: {
          formatter: (value) => {
            // apply labels to selected data points
            const { label } = value;
            if (chartData.selected[label]) {
              return value.label;
            }
            return null;
          },
          color: "rgb(255, 255, 255)",
          align: "top",
          font: {
            size: getDatalabelFontSize(),
            family: "'Work Sans', sans-serif",
          },
          anchor: "end",
          offset: 4,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderColor: "rgb(128, 128, 128)",
          borderRadius: 2,
          borderWidth: 1,
          clamp: true,
        },
      },
    };

    return (
      <ChartPageLayout>
        <ChartAndSliderContainer>
          <Bubble
            data={bubbleChartData}
            options={bubbleChartOptions}
            ref={chartRef}
          />
          <Slider
            listData={chartData.allYears}
            min="0"
            max={chartData.allYears.length - 1}
            value={chartData.allYears.indexOf(currentYear)}
            handleChange={({ target }) =>
              setCurrentYear(chartData.allYears[target.value])
            }
          />
        </ChartAndSliderContainer>
        <ChartSidebar
          selected={chartData.selected}
          toggleSelected={chartData.toggleSelected}
        >
          <BubbleSizeDropdown
            sizeValue={radiusCategory}
            setSizeValue={setRadiusCategory}
            hoverValue={hoverValue}
          />
        </ChartSidebar>
      </ChartPageLayout>
    );
  }

  return <Loading />;
};
