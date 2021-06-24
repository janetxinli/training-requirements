export const lineChartHover = (e, data, chart) => {
  if (data.length) {
    // fade non-hovered datalabel backgrounds
    chart.config.options.plugins.datalabels.backgroundColor = (d) =>
      d.datasetIndex === data[0].datasetIndex
        ? "rgba(0, 0, 0, 0.8)"
        : "rgba(0, 0, 0, 0.1)";

    chart.config.options.plugins.datalabels.color = (d) =>
      d.datasetIndex === data[0].datasetIndex
        ? "rgba(255, 255, 255, 1)"
        : "rgba(255, 255, 255, 0.1)";

    // fade colour of non-hovered lines/points
    chart.data.datasets = chart.data.datasets.map((d, i) => {
      if (i === data[0].datasetIndex) {
        return d;
      }
      return {
        ...d,
        borderColor: d.borderColor.replace(/[0.]?1\)/, "0.1)"),
        pointBackgroundColor: d.pointBackgroundColor.replace(
          /[0.]?1\)/,
          "0.1)",
        ),
        pointBorderColor: "rgba(128, 128, 128, 0.1)",
      };
    });

    chart.update();
  } else {
    // darken datalabel background colour
    chart.config.options.plugins.datalabels.backgroundColor = () =>
      "rgba(0, 0, 0, 0.8)";

    chart.config.options.plugins.datalabels.color = () =>
      "rgba(255, 255, 255, 1)";

    // darken lines/points
    chart.data.datasets = chart.data.datasets.map((d) => ({
      ...d,
      borderColor: d.borderColor.replace(/0.1\)/, "1)"),
      pointBackgroundColor: d.pointBackgroundColor.replace(/0.1\)/, "1)"),
      pointBorderColor: "rgb(0, 0, 0)",
    }));

    chart.update();
  }
};
