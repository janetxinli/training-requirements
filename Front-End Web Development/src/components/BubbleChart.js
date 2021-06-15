import React, { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import { bubbleChartHover } from "../helpers/bubbleChartHover";
import { getBubbleBackgroundColour } from "../helpers/getBubbleBackgroundColour";
import { getBubbleBorderColour } from "../helpers/getBubbleBorderColour";
import { Slider } from "./Slider";
import { ChartSidebar } from "./ChartSidebar";
import { useChartData } from "../hooks/useChartData";
import { getColour } from "../helpers/colours";
import { ChartAndSliderContainer } from "./ChartAndSliderContainer";
import { ChartPageLayout } from "./ChartPageLayout";
import { BubbleSizeDropdown } from "./BubbleSizeDropdown";

export const BubbleChart = ({ allData }) => {
  const chartData = useChartData(allData);
  const [radiusCategory, setRadiusCategory] = useState("population");
  const [currentYear, setCurrentYear] = useState(2007);
  const [hoverValue, setHoverValue] = useState(null);

  // define how bubble radii are scaled
  const radiusScale = {
    population: 1 / 15000000,
    babiesPerWoman: 3,
    co2: 1,
  };

  useEffect(() => {
    if (allData) {
      chartData.initializeData(
        allData.filter((d) => {
          return d.year === currentYear;
        })
      );
    }
  }, [allData]);

  useEffect(() => {
    chartData.filterData((d) => {
      return d.year === currentYear;
    });
  }, [currentYear]);

  if (chartData.data && chartData.selected) {
    const chartObjectData = {
      datasets: [
        {
          label: "Population",
          data: chartData.data.map((d) => {
            return {
              x: d.gdpPercap,
              y: d.lifeExpectancy,
              label: d.label,
              r: radiusScale[radiusCategory] * d[radiusCategory],
              continent: d.continent,
            };
          }),
          backgroundColor: getBubbleBackgroundColour(
            chartData.data,
            chartData.selected
          ),
          borderWidth: 1,
          borderColor: getBubbleBorderColour(
            chartData.data,
            chartData.selected
          ),
          datalabels: {
            align: "top",
            font: {
              size: 16,
              family: "'Work Sans', sans-serif",
            },
            anchor: "end",
          },
        },
      ],
    };

    const chartOptions = {
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
          setHoverValue
        ),
      onClick: (e, data, chart) => {
        if (data.length) {
          chartData.toggleSelected(
            chart.data.datasets[0].data[data[0].index].label
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
              size: 24,
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
              size: 24,
              family: "'Work Sans', sans-serif",
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
          text: currentYear,
          font: {
            size: 36,
            family: "'Work Sans', sans-serif",
          },
        },
        datalabels: {
          formatter: (value, context) => {
            if (chartData.selected[value.label]) {
              return value.label;
            }
            return null;
          },
          color: (context) => {
            const continent = context.dataset.data[context.dataIndex].continent;
            return getColour(continent);
          },
        },
      },
    };

    return (
      <ChartPageLayout>
        <ChartAndSliderContainer>
          <Bubble data={chartObjectData} options={chartOptions} height={300} />
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

  return <h2>Loading...</h2>;
};
