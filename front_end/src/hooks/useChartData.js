import { useEffect, useState } from "react";

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

  // initialize selected data
  const initializeData = (newData) => {
    setData(newData);
    setSelected(
      [...new Set(newData.map((d) => d.label))].reduce((o, a) => {
        if (defaultSelected.indexOf(a) === -1) {
          o[a] = false;
        } else {
          o[a] = true;
        }

        return o;
      }, {}),
    );
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
