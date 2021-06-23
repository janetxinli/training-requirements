export const getTitleFontSize = () => {
  if (window.innerWidth > 1280) {
    return 36;
  }
  if (window.innerWidth > 720) {
    return 30;
  }
  return 24;
};

export const getAxisFontSize = () => {
  if (window.innerWidth > 1280) {
    return 28;
  }
  if (window.innerWidth > 720) {
    return 24;
  }
  return 16;
};

export const getDatalabelFontSize = () => {
  if (window.innerWidth > 1280) {
    return 20;
  }
  if (window.innerWidth > 720) {
    return 16;
  }
  return 12;
};
