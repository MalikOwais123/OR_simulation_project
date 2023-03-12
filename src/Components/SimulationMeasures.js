import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { simulationFormulas } from "../helpers/SimulationFormulas";
import SimulationParams from "./SimulationParams";
import SimulationTable from "./SimulationComponents/SimulationTable";
import ResultShow from "./ResultShow";
import { MM1Computations } from "../helpers/MM1Computations";
import { MMCComputations } from "../helpers/MMCComputations";
import Chart from "./Chart";
import { Alert, Snackbar } from "@mui/material";

const theme = createTheme();

const SimulationMeasures = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputParams, setInputParams] = useState({
    arrivalTime: 0,
    serviceTime: 0,
    servers: 0,
  });
  const [simulationMeasures, setSimulationMeasures] = useState([]);
  const [performanceMeasures, setPerformanceMeasures] = useState(null);

  const checkIsAllParamsValid = ({ arrivalTime, serviceTime, servers }) => {
    if (arrivalTime === 0 || serviceTime === 0 || servers === 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkIsAllParamsValid(inputParams)) {
      setOpenAlert(true);
      return;
    }
    const { arrivalTime, serviceTime, servers } = inputParams;
    setIsLoading(true);
    const lambda = Number(arrivalTime);
    const meu = Number(serviceTime);
    const noOfServers = Number(servers);
    const interArrivals =
      simulationFormulas.commulativeFrequencyGenerate(lambda);
    const serviceTimes = await simulationFormulas.calculateServiceTimes(
      interArrivals,
      meu
    );
    const simulationResult = simulationFormulas.generateSimulation(
      interArrivals,
      serviceTimes,
      noOfServers
    );
    let performanceResult = null;
    if (noOfServers === 1) {
      performanceResult = MM1Computations(lambda, meu);
    } else if (noOfServers > 1) {
      performanceResult = MMCComputations(lambda, meu, noOfServers);
    }
    setPerformanceMeasures(performanceResult);
    setSimulationMeasures(simulationResult);
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
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={() => setOpenAlert(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenAlert(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please fill all the fields before submitting
          </Alert>
        </Snackbar>
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
            {simulationMeasures.length > 1 && (
              <SimulationTable
                isLoading={isLoading}
                data={simulationMeasures}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {performanceMeasures && (
              <ResultShow performanceMeasures={performanceMeasures} />
            )}
          </Grid>
          <Grid item xs={12}>
            {performanceMeasures && simulationMeasures.length > 0 && (
              <Chart simulationMeasures={simulationMeasures} />
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SimulationMeasures;
