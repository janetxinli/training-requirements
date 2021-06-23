import React from "react";
import styles from "./ChartPageLayout.module.scss";

export const ChartPageLayout = ({ children }) => (
  <main className={`container df df-ai-c ${styles["chart-layout"]}`}>
    {children}
  </main>
);
