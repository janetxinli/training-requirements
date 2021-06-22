import React from "react";
import styles from "./ChartAndSliderContainer.module.scss";

export const ChartAndSliderContainer = ({ children }) => (
  <section className={`df df-fc df-ai-c ${styles["chart-container"]}`}>
    {children}
  </section>
);
