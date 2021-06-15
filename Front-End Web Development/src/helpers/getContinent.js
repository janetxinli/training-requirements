export const getContinent = (continent) => {
  switch (continent) {
    case "Oceania":
      return "Asia";
    case "":
      return "Unknown";
    default:
      return continent;
  }
};
