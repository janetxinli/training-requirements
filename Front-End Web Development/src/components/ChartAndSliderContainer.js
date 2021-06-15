import React from "react";
import styles from "./ChartAndSliderContainer.module.css";

export const ChartAndSliderContainer = ({ children }) => {
  return <section className={`df df-fc df-ai-c ${styles["chart-container"]}`}>{children}</section>;
};
