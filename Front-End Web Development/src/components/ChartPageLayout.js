import React from "react";
import styles from "./ChartPageLayout.module.css";

export const ChartPageLayout = ({ children }) => {
  return <main className={`container df df-ai-c ${styles["chart-layout"]}`}>{children}</main>;
};
