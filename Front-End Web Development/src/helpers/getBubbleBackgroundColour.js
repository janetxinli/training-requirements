import { colours } from "./colours";

export const getBubbleBackgroundColour = (data, selected) => {
  if (Object.values(selected).indexOf(true) === -1) {
    return data.map(
      (d) =>
        `rgba(${colours[d.continent].red}, ${colours[d.continent].green}, ${
          colours[d.continent].blue
        }, 0.8)`
    );
  }
  return data.map((d) =>
    selected[d.label]
      ? `rgba(${colours[d.continent].red}, ${colours[d.continent].green}, ${
          colours[d.continent].blue
        }, 0.8)`
      : `rgba(${colours[d.continent].red}, ${colours[d.continent].green}, ${
          colours[d.continent].blue
        }, 0.2)`
  );
};
