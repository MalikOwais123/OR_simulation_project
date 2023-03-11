import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MM1Computations } from "../helpers/MM1Computations";
import { MMCComputations } from "../helpers/MMCComputations";
import { MG1Computations } from "../helpers/MG1Computations";
import { GGCComputations } from "../helpers/GGCComputations";
import InputParams from "./InputParams";
import ResultShow from "./ResultShow";

const theme = createTheme();

const PerformanceMeasures = () => {
  const [distribution, setDistribution] = useState({
    arrivalType: "exponential",
    serviceType: "exponential",
  });
  const [inputParams, setInputParams] = useState({
    arrivalTime: 0,
    serviceTime: 0,
    servers: 0,
    minimumArrivalTime: 0,
    maximumArrivalTime: 0,
    minimumServiceTime: 0,
    maximumServiceTime: 0,
  });
  const [performanceMeasures, setPerformanceMeasures] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { arrivalType, serviceType } = distribution;
    const {
      arrivalTime: lambda,
      serviceTime: meu,
      servers,
      minimumArrivalTime: minArrivalTime,
      maximumArrivalTime: maxArrivalTime,
      minimumServiceTime: minServiceTime,
      maximumServiceTime: maxServiceTime,
    } = inputParams;

    if (arrivalType === "exponential" && serviceType === "exponential") {
      //* MM Case
      // *** MM1 Computations
      if (servers === 1) {
        const result = MM1Computations(Number(lambda), Number(meu));
        setPerformanceMeasures(result);
      } else if (servers > 1) {
        //* MMC Computations
        const result = MMCComputations(
          Number(lambda),
          Number(meu),
          Number(servers)
        );
        setPerformanceMeasures(result);
      }
    } else if (arrivalType === "exponential" && serviceType === "other") {
      //* MG Case
      // *** MG1Computations
      if (servers === 1) {
        const result = MG1Computations(
          Number(lambda),
          Number(minServiceTime),
          Number(maxServiceTime)
        );
        setPerformanceMeasures(result);
      }
    } else if (arrivalType === "other" && serviceType === "other") {
      //* GGC Case
      // *** GG1 Computations
      if (servers === 1) {
        const result = MMCComputations(
          Number(minArrivalTime),
          Number(maxArrivalTime),
          Number(minServiceTime),
          Number(maxServiceTime),
          Number(servers)
        );
        setPerformanceMeasures(result);
      } else if (servers > 1) {
        const result = GGCComputations(
          Number(minArrivalTime),
          Number(maxArrivalTime),
          Number(minServiceTime),
          Number(maxServiceTime),
          Number(servers)
        );
        setPerformanceMeasures(result);
      }
    }
  };

  const handleDistributionChange = (event) => {
    const { name, value } = event.target;
    setDistribution({ ...distribution, [name]: value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputParams({ ...inputParams, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputParams
              distribution={distribution}
              inputParams={inputParams}
              handleDistributionChange={handleDistributionChange}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={6}>
            {performanceMeasures && (
              <ResultShow performanceMeasures={performanceMeasures} />
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default PerformanceMeasures;
