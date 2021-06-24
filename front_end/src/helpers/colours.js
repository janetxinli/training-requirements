export const colours = {
  Asia: {
    red: 239,
    green: 84,
    blue: 106,
  },
  Americas: {
    red: 136,
    green: 229,
    blue: 25,
  },
  Europe: {
    red: 251,
    green: 226,
    blue: 34,
  },
  Africa: {
    red: 74,
    green: 206,
    blue: 228,
  },
  Unknown: {
    red: 0,
    green: 0,
    blue: 0,
  },
};

export const getColour = (continent, alpha = 1) => {
  if (colours[continent]) {
    return `rgba(${colours[continent].red}, ${colours[continent].green}, ${colours[continent].blue}, ${alpha})`;
  }
  return null;
};

export const getBubbleBackgroundColour = (data, selected) => {
  if (Object.values(selected).indexOf(true) === -1) {
    return data.map((d) => getColour(d.continent, 0.8));
  }
  return data.map((d) =>
    selected[d.label]
      ? getColour(d.continent, 0.8)
      : getColour(d.continent, 0.2),
  );
};

export const getBubbleBorderColour = (data, selected) => {
  if (Object.values(selected).indexOf(true) === -1) {
    return data.map(() => "rgba(128, 128, 128, 0.8)");
  }
  return data.map((d) => {
    if (selected[d.label]) {
      return "rgba(128, 128, 128, 0.8)";
    }
    return "rgba(128, 128, 128, 0.1)";
  });
};
