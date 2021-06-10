import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Papa from "papaparse";
import gapminder from "./data/gapminder_clean.csv";
import { BubbleChart } from "./components/BubbleChart";
import { LineChart } from "./components/LineChart";
import "./App.css";

const getContinent = (continent) => {
  switch (continent) {
    case "Oceania":
      return "Asia";
    case "":
      return "Unknown";
    default:
      return continent;
  }
};

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
              x: res.gdpPercap,
              y: res.lifeExpectancy,
              r: res.pop / 15000000,
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
      <div className="App">
        <h1>Gapminder</h1>
        <Switch>
          {allData && (
            <Route path="/bubble">
              <BubbleChart allData={allData} />
            </Route>
          )}
          {allData && (
            <Route path="/line">
              <LineChart allData={allData} />
            </Route>
          )}
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
