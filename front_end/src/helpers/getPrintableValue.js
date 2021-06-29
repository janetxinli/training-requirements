export const getPrintableValue = (value) => {
  if (value === 0) {
    return "0"
  }

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
