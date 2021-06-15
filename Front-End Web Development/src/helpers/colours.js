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
  return `rgba(${colours[continent].red}, ${colours[continent].green}, ${
    colours[continent].blue
  }, ${"" + alpha})`;
};
