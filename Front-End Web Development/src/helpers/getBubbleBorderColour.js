export const getBubbleBorderColour = (data, selected) => {
  if (Object.values(selected).indexOf(true) === -1) {
    return data.map((d) => "rgba(128, 128, 128, 0.8)");
  } else {
    return data.map(d => {
      if (selected[d.label]) {
        return "rgba(128, 128, 128, 0.8)";
      } else {
        return "rgba(128, 128, 128, 0.1)";
      }
    })

  }
};
