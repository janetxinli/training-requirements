import React, { useEffect, useRef, useState } from "react";
import { Bubble } from "react-chartjs-2";
import { bubbleChartHover } from "../helpers/bubbleChartHover";
import {
  getBubbleBackgroundColour,
  getBubbleBorderColour,
} from "../helpers/colours";
import { getAxis } from "../helpers/getAxis";
import { getDatalabelFontSize, getTitleFontSize } from "../helpers/getFontSize";
import { useChartData } from "../hooks/useChartData";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { AxisDropdown } from "./AxisDropdown";
import { BubbleSizeDropdown } from "./BubbleSizeDropdown";
import { ChartAndSliderContainer } from "./ChartAndSliderContainer";
import { ChartPageLayout } from "./ChartPageLayout";
import { ChartSidebar } from "./ChartSidebar";
import { Loading } from "./Loading";
import { Slider } from "./Slider";

export const BubbleChart = ({ allData }) => {
  const chartData = useChartData(allData);
  const width = useWindowWidth();

  const [radiusCategory, setRadiusCategory] = useState("population");
  const [currentYear, setCurrentYear] = useState(2007);
  const [hoverValue, setHoverValue] = useState(null);
  const [xAxis, setXAxis] = useState("gdpPercap");
  const [yAxis, setYAxis] = useState("lifeExpectancy");
  const [useConstant, setUseConstant] = useState(false);

  const chartRef = useRef(null);

  // define how bubble radii are scaled
  const radiusScale = {
    population: (v) => (1 / 300) * Math.sqrt(v / Math.PI),
    fertilityRate: (v) => 25 * Math.sqrt(v / Math.PI),
    co2: (v) => 15 * Math.sqrt(v / Math.PI),
  };

    // use a constant radius size
  const constantRadius = {
    population: () => 15,
    fertilityRate: () => 15,
    co2: () => 15,
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

  // toggle constant radius state
  const toggleConstantRadius = (e) => {
    e.preventDefault();
    setUseConstant(!useConstant);
  };

  if (chartData.data && chartData.selected) {
    // data available to render

    const bubbleChartData = {
      datasets: [
        {
          data: chartData.data.map((d) => ({
            x: d[xAxis],
            y: d[yAxis],
            label: d.label,
            r: useConstant
              ? constantRadius[radiusCategory](d[radiusCategory])
              : radiusScale[radiusCategory](d[radiusCategory]),
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
          clip: 0,
        },
      ],
    };

    const bubbleChartOptions = {
      aspectRatio: 1,
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 0,
      },
      onHover: (e, data, chart) =>
        bubbleChartHover(
          e,
          data,
          chart,
          radiusCategory,
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
        x: { ...getAxis(xAxis, chartData) },
        y: {
          ...getAxis(yAxis, chartData),
          ...(yAxis === "year" && { reverse: true }), // categorical y axis needs to be reversed
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
        ...(xAxis === yAxis && {
          // draw a line on the diagonal if x and y axes are the same
          annotation: {
            annotations: {
              line1: {
                type: "line",
                xMin: (chart) => chart.chart.scales.x.min,
                xMax: (chart) => chart.chart.scales.x.max,
                yMin: (chart) => chart.chart.scales.y.min,
                yMax: (chart) => chart.chart.scales.y.max,
                borderColor: "rgb((255, 99, 132)",
                borderWidth: 2,
                borderDash: [4],
                drawTime: "beforeDatasetsDraw",
              },
            },
          },
        }),
      },
    };

    return (
      <ChartPageLayout>
        <ChartAndSliderContainer>
          <Bubble
            data={bubbleChartData}
            options={bubbleChartOptions}
            ref={chartRef}
            height={300}
            width={300}
          />
          <button type="submit" onClick={toggleConstantRadius}>
            {
              useConstant ? "use value sizes" : "use constant sizes"
            }
          </button>
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
          <AxisDropdown
            choice={xAxis}
            handleChange={(e) => setXAxis(e.target.value)}
            label="x-axis"
          />
          <AxisDropdown
            choice={yAxis}
            handleChange={(e) => setYAxis(e.target.value)}
            label="y-axis"
          />
        </ChartSidebar>
      </ChartPageLayout>
    );
  }

  return <Loading />;
};
