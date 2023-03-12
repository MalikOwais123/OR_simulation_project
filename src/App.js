import React from "react";
import Header from "./Components/Header";
import PerformanceMeasures from "./Components/PerformanceMeasures";
import SimulationMeasures from "./Components/SimulationMeasures";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <PerformanceMeasures /> */}
      <SimulationMeasures />
    </div>
  );
}

export default App;
