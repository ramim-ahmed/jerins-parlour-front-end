import React, { createContext } from "react";
import useFetchData from "../hooks/useFetchData";
export const ServicesDataContext = createContext();

const DataContext = (props) => {
  const [data] = useFetchData();
  return (
    <ServicesDataContext.Provider value={[data]}>
      {props.children}
    </ServicesDataContext.Provider>
  );
};

export default DataContext;
