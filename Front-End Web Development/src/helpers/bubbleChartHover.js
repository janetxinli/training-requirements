import { getBubbleBackgroundColour } from "./getBubbleBackgroundColour";
import { getBubbleBorderColour } from "./getBubbleBorderColour";

const getPrintableValue = (value) => {
  let suffix;
  const log = Math.log10(value);
  const e = Math.floor(log / 3);

  switch (e) {
    case 0:
      suffix = "";
      break;
    case 1:
      suffix = "k";
      break;
    case 2:
      suffix = "M";
      break;
    case 3:
      suffix = "B";
      break;
    default:
      break;
  }

  const prefix = String(value / 10 ** (3 * e))
    .slice(0, 4)
    .replace(/\.$/, "");
  return prefix + suffix;
};

// handle hovering for bubble chart
export const bubbleChartHover = (
  e,
  data,
  chart,
  radiusScale,
  selected,
  ref
) => {
  if (data.length) {
    if (ref.current) {
      ref.current.setHover(
        getPrintableValue(data[0].element.$context.parsed._custom / radiusScale)
      );
    }

    // update chart colours to darken hovered bubble
    // and lighten others
    chart.data.datasets[0].backgroundColor =
      chart.data.datasets[0].backgroundColor.map((c, i) => {
        return i === data[0].index
          ? c.replace(/0.[0-9]\)/, "1)")
          : c.replace(/0.[0-9]\)|1\)/, "0.1)");
      });

    // lighten borders
    chart.data.datasets[0].borderColor = chart.data.datasets[0].data.map(
      (d, i) => {
        return i === data[0].index
          ? "rgba(128, 128, 128, 0.8)"
          : "rgba(128, 128, 128, 0.1)";
      }
    );

    // add annotation
    chart.config.options.plugins.annotation = {
      annotations: {
        line1: {
          type: "line",
          drawTime: "beforeDraw",
          yMin: data[0].element.$context.parsed.y,
          yMax: data[0].element.$context.parsed.y,
          xMax: data[0].element.$context.parsed.x,
          borderColor: "rgb((255, 99, 132)",
          borderWidth: 2,
          borderDash: [4],
        },
        line2: {
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
    if (ref.current) {
      ref.current.setHover(null);
    }

    // darken all bubbles to the background colour
    chart.data.datasets[0].backgroundColor = getBubbleBackgroundColour(
      chart.data.datasets[0].data,
      selected
    );

    // darken border
    chart.data.datasets[0].borderColor = getBubbleBorderColour(
      chart.data.datasets[0].data,
      selected
    );

    // remove annotation
    chart.config.options.plugins.annotation = undefined;
    chart.update();
  }
};
