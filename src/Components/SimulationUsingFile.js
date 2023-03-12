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
import UploadFile from "./UploadFile";
import * as XLSX from "xlsx";
import { simulationFormulas } from "../helpers/SimulationFormulas";
import SimulationTable from "./SimulationComponents/SimulationTable";
import Chart from "./Chart";

const readExcelFile = (file) => {
  const promise = new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target.result;

      const wb = XLSX.read(bufferArray, { type: "buffer" });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      // get the total length of data without the header
      const dataLength = XLSX.utils
        .sheet_to_json(ws, { header: 1 })
        .map((row) => row[0]) // Get the interArrival column
        .slice(1).length;

      const interArrival = XLSX.utils
        .sheet_to_json(ws, { header: 1 })
        .map((row) => row[1]) // Get the interArrival column
        .slice(1)
        .reduce((acc, val) => acc + val, 0);

      const serviceTime = XLSX.utils
        .sheet_to_json(ws, { header: 1 })
        .map((row) => row[2]) // Get the serviceTime column
        .slice(1)
        .reduce((acc, val) => acc + val, 0);

      const data = { dataLength, interArrival, serviceTime };

      resolve(data);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

  return promise;
};

const theme = createTheme();

const SimulationUsingFile = () => {
  const [distributionData, setDistributionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [inputParams, setInputParams] = useState({
    arrivalTime: 0,
    serviceTime: 0,
    servers: 2,
  });
  const [performanceMeasures, setPerformanceMeasures] = useState(null);
  const [simulationMeasures, setSimulationMeasures] = useState([]);

  const handleSubmit = async (event, file) => {
    setIsLoading(true);
    event.preventDefault();
    const { dataLength, interArrival, serviceTime } = await readExcelFile(file);
    const lambda = interArrival / dataLength;
    const meu = serviceTime / dataLength;
    const noOfServers = 2;
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
    const performanceResult = MMCComputations(lambda, meu, 2);
    setPerformanceMeasures(performanceResult);
    setInputParams({ arrivalTime: lambda, serviceTime: meu, servers: 2 });
    setSimulationMeasures(simulationResult);
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UploadFile isLoading={isLoading} handleCalculate={handleSubmit} />
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

export default SimulationUsingFile;
