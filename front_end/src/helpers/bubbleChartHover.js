import { getBubbleBackgroundColour, getBubbleBorderColour } from "./colours";
import { getPrintableValue } from "./getPrintableValue";

const inverseRadiusScale = {
  population: (v) => Math.PI * (300 * v) ** 2,
  fertilityRate: (v) => Math.PI * (v / 25) ** 2,
  co2: (v) => Math.PI * v ** 2,
};

export const bubbleChartHover = (
  e,
  data,
  chart,
  radiusCategory,
  selected,
  setHoverValue,
) => {
  if (data.length) {
    // hovering over a data point
    // set hover value to size value
    setHoverValue(
      getPrintableValue(
        inverseRadiusScale[radiusCategory](
          data[0].element.$context.parsed._custom,
        ),
      ),
    );

    // update chart colours to darken hovered bubble
    // and lighten others
    chart.data.datasets[0].backgroundColor =
      chart.data.datasets[0].backgroundColor.map((c, i) =>
        i === data[0].index
          ? c.replace(/0.[0-9]\)/, "1)")
          : c.replace(/0.[0-9]\)|1\)/, "0.1)"),
      );

    // lighten borders
    chart.data.datasets[0].borderColor = chart.data.datasets[0].data.map(
      (d, i) =>
        i === data[0].index
          ? "rgba(128, 128, 128, 0.8)"
          : "rgba(128, 128, 128, 0.1)",
    );

    // add line annotation
    chart.config.options.plugins.annotation = {
      ...chart.config.options.plugins.annotation,
      annotations: {
        line2: {
          type: "line",
          drawTime: "beforeDraw",
          yMin: data[0].element.$context.parsed.y,
          yMax: data[0].element.$context.parsed.y,
          xMax: data[0].element.$context.parsed.x,
          borderColor: "rgb((255, 99, 132)",
          borderWidth: 2,
          borderDash: [4],
        },
        line3: {
          type: "line",
          drawTime: "beforeDraw",
          xMin: data[0].element.$context.parsed.x,
          xMax: data[0].element.$context.parsed.x,
          yMin: 0,
          yMax: data[0].element.$context.parsed.y,
          borderColor: "rgb((255, 99, 132)",
          borderWidth: 2,
          borderDash: [4],
        },
      },
    };

    chart.update();
  } else {
    // hovering over plot background

    // remove hover value
    setHoverValue(null);

    // darken all bubbles to the background colour
    chart.data.datasets[0].backgroundColor = getBubbleBackgroundColour(
      chart.data.datasets[0].data,
      selected,
    );

    // darken border
    chart.data.datasets[0].borderColor = getBubbleBorderColour(
      chart.data.datasets[0].data,
      selected,
    );

    // remove hover annotations
    if (
      chart.config.options.plugins.annotation &&
      chart.config.options.plugins.annotation.annotations.line2
    ) {
      delete chart.config.options.plugins.annotation.annotations.line2;
      delete chart.config.options.plugins.annotation.annotations.line3;
    }

    chart.update();
  }
};
