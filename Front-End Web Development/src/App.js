import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Papa from "papaparse";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import ChartDataLabels from "chartjs-plugin-datalabels";
import gapminder from "./data/gapminder_clean.csv";
import { getContinent } from "./helpers/getContinent";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BubbleChart } from "./components/BubbleChart";
import { LineChart } from "./components/LineChart";

Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

function App() {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    Papa.parse(gapminder, {
      download: true,
      header: true,
      complete: function (results) {
        const filtered = results.data
          .filter((d) => !isNaN(d.year))
          .map((res) => {
            return {
              label: res.countryName,
              gdpPercap: res.gdpPercap,
              lifeExpectancy: res.lifeExpectancy,
              population: res.pop,
              babiesPerWoman: res.fertilityRate,
              co2: res.co2,
              continent: getContinent(res.continent),
              year: +res.year,
            };
          })
          .filter((d) => d.continent !== "Unknown");

        setAllData(filtered);
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/bubble">
          <BubbleChart allData={allData} />
        </Route>
        <Route path="/line">
          <LineChart allData={allData} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
