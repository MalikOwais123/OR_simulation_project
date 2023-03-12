import { Tab, Tabs } from "@mui/material";
import React from "react";
import ChiSqaure from "./Components/ChiSquare/ChiSqaure";
import Header from "./Components/Header";
import PerformanceMeasures from "./Components/PerformanceMeasures";
import SimulationMeasures from "./Components/SimulationMeasures";
import SimulationUsingFile from "./Components/SimulationUsingFile";

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Header />
      <Tabs
        aria-label="basic tabs example"
        value={value}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleChange}
      >
        <Tab label="Performance Measures" />
        <Tab label="Simulation Measures" />
        <Tab label="Simulation Using File" />
        <Tab label="Chi-Square Test" />
      </Tabs>

      {value === 0 && <PerformanceMeasures />}
      {value === 1 && <SimulationMeasures />}
      {value === 2 && <SimulationUsingFile />}
      {value === 3 && <ChiSqaure />}
    </div>
  );
}

export default App;
