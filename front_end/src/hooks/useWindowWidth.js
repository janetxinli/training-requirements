import { useLayoutEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // respond to changes in window width
  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    // cleanup
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
};
