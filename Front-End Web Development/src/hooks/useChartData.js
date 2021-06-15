import { useState, useEffect } from "react";

export const useChartData = (allData, defaultSelected = []) => {
  const [data, setData] = useState(allData);
  const [allYears, setAllYears] = useState([]);
  const [selected, setSelected] = useState({});

  // allows initialData to be updated once loaded
  useEffect(() => {
    setData(allData);
  }, [allData]);

  // set data properties
  useEffect(() => {
    if (allData) {
      setAllYears([...new Set(allData.map((d) => d.year))]);
    }
  }, [allData]);

  // reset selected
  useEffect(() => {
    // TODO filter out any undefined -- maybe in main app?
    if (data) {
      setSelected(
        [...new Set(data.map((d) => d.label))].reduce((o, a) => {
          if (defaultSelected.indexOf(a) === -1) {
            o[a] = false;
          } else {
            o[a] = true;
          }

          return o;
        }, {})
      );
    }
  }, [data]);

  // initialize selected data
  const initializeData = (data) => {
    setData(data);
  };

  // toggle a selected country
  const toggleSelected = (country) => {
    setSelected({ ...selected, [country]: !selected[country] });
  };

  // filter data
  const filterData = (func) => {
    if (allData) {
      const filteredData = allData.filter(func);
      setData(filteredData);
    }
  };

  return {
    data,
    allYears,
    selected,
    toggleSelected,
    filterData,
    initializeData,
  };
};
