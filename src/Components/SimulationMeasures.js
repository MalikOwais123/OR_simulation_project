import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { simulationFormulas } from "../helpers/SimulationFormulas";
import SimulationParams from "./SimulationParams";
import TempTable from "./SimulationComponents/TempTable";

const theme = createTheme();

const SimulationMeasures = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputParams, setInputParams] = useState({
    arrivalTime: 0,
    serviceTime: 0,
    servers: 0,
  });
  const [performanceMeasures, setPerformanceMeasures] = useState([]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const { arrivalTime: lambda, serviceTime: meu, servers } = inputParams;
    const interArrivals = simulationFormulas.commulativeFrequencyGenerate(
      Number(lambda)
    );
    const serviceTimes = await simulationFormulas.calculateServiceTimes(
      interArrivals,
      Number(meu)
    );
    const result = simulationFormulas.generateSimulation(
      interArrivals,
      serviceTimes,
      Number(servers)
    );
    setPerformanceMeasures(result);
    setIsLoading(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputParams({ ...inputParams, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12}>
            <SimulationParams
              isLoading={isLoading}
              inputParams={inputParams}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={12}>
            <TempTable isLoading={isLoading} data={performanceMeasures} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SimulationMeasures;
