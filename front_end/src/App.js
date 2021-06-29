import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Papa from "papaparse";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BubbleChart } from "./components/BubbleChart";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { LineChart } from "./components/LineChart";
import gapminder from "./data/gapminder_clean.csv";
import { getContinent } from "./helpers/getContinent";

// register Chart.js plugins globally
Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

function App() {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    Papa.parse(gapminder, {
      download: true,
      header: true,
      complete: (results) => {
        const filtered = results.data
          .filter((d) => !Number.isNaN(Number(d.year)))
          .map((res) => ({
            label: res.countryName,
            gdpPercap: res.gdpPercap,
            lifeExpectancy: res.lifeExpectancy,
            population: res.pop,
            fertilityRate: res.fertilityRate,
            co2: res.co2,
            continent: getContinent(res.continent),
            year: +res.year,
          }))
          .filter((d) => d.continent !== "Unknown")
          .filter((o) => Object.values(o).indexOf("") === -1);

        setAllData(filtered);
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/bubble`}>
          <BubbleChart allData={allData} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/line`}>
          <LineChart allData={allData} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
