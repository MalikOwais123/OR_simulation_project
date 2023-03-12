import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import ShowResult from "./ShowResult";
import TestTable from "./TestTable";

const theme = createTheme();

/*
~THE DATA SET IS AS FOLLOWS:

                  PartTimeRepairMen     FullTimeRepairMen        Total
DeluxMachine          50                    70                    120
NormalMachine         120                   50                    170
Total                 170                   120                   290
*/

let dataSet = {
  deluxMachine: {
    partTimeActual: 50,
    fullTimeActual: 70,
    partTimeExpected: 0,
    fullTimeExpected: 0,
    chiSquareTotal: 0,
    deluxTotal: 120,
    partTimeTotal: 170,
    fullTimeTotal: 120,
  },
  normalMachine: {
    partTimeActual: 120,
    fullTimeActual: 50,
    partTimeExpected: 0,
    fullTimeExpected: 0,
    chiSquareTotal: 0,
    normalTotal: 170,
    partTimeTotal: 170,
    fullTimeTotal: 120,
  },
};

const getExpectedValue = (data) => {
  const { rowTotal, columnTotal, total } = data;
  const result = (rowTotal * columnTotal) / total;
  return truncate(result, 2);
};

const truncate = (num, decimalPlaces) => {
  return parseFloat(num.toFixed(decimalPlaces));
};

const calculateChiSquare = (data) => {
  const { deluxMachine, normalMachine } = data;
  const deluxPartTimeChiSquare =
    Math.pow(deluxMachine.partTimeActual - deluxMachine.partTimeExpected, 2) /
    deluxMachine.partTimeExpected;
  const deluxFullTimeChiSquare =
    Math.pow(deluxMachine.fullTimeActual - deluxMachine.fullTimeExpected, 2) /
    deluxMachine.fullTimeExpected;
  const normalPartTimeChiSquare =
    Math.pow(normalMachine.partTimeActual - normalMachine.partTimeExpected, 2) /
    normalMachine.partTimeExpected;
  const normalFullTimeChiSquare =
    Math.pow(normalMachine.fullTimeActual - normalMachine.fullTimeExpected, 2) /
    normalMachine.fullTimeExpected;
  const chiSquare =
    deluxPartTimeChiSquare +
    deluxFullTimeChiSquare +
    normalPartTimeChiSquare +
    normalFullTimeChiSquare;
  return {
    deluxChiSqaure: deluxPartTimeChiSquare + deluxFullTimeChiSquare,
    normalChiSqaure: normalPartTimeChiSquare + normalFullTimeChiSquare,
    chiSquare,
  };
};

const ChiSqaure = () => {
  const DEGREE_OF_FREEDOM = 1;
  const CRITICAL_VALUE = 3.841;
  const ALPHA = 0.05;
  const total =
    dataSet.deluxMachine.deluxTotal + dataSet.normalMachine.normalTotal;
  const deluxPartTimeExpected = getExpectedValue({
    rowTotal: dataSet.deluxMachine.deluxTotal,
    columnTotal: dataSet.deluxMachine.partTimeTotal,
    total,
  });
  const deluxFullTimeExpected = getExpectedValue({
    rowTotal: dataSet.deluxMachine.deluxTotal,
    columnTotal: dataSet.deluxMachine.fullTimeTotal,
    total,
  });
  const normalPartTimeExpected = getExpectedValue({
    rowTotal: dataSet.normalMachine.normalTotal,
    columnTotal: dataSet.normalMachine.partTimeTotal,
    total,
  });
  const normalFullTimeExpected = getExpectedValue({
    rowTotal: dataSet.normalMachine.normalTotal,
    columnTotal: dataSet.normalMachine.fullTimeTotal,
    total,
  });

  console.log("before dataSet", dataSet);

  const {
    deluxChiSqaure,
    normalChiSqaure,
    chiSquare: CHI_SQAURE,
  } = calculateChiSquare(dataSet);

  dataSet.deluxMachine.partTimeExpected = deluxPartTimeExpected;
  dataSet.deluxMachine.fullTimeExpected = deluxFullTimeExpected;
  dataSet.deluxMachine.chiSquareTotal = deluxChiSqaure;
  dataSet.normalMachine.partTimeExpected = normalPartTimeExpected;
  dataSet.normalMachine.fullTimeExpected = normalFullTimeExpected;
  dataSet.normalMachine.chiSquareTotal = normalChiSqaure;

  console.log("after dataSet", dataSet);
  console.log("CHI_SQAURE", CHI_SQAURE);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />

        <Typography
          sx={{
            fontSize: 30,
            fontWeight: "bold",
            mt: 3,
            mb: 3,
          }}
        >
          Chi-Square Test
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TestTable dataSet={dataSet} />
          </Grid>
          <Grid item xs={12}>
            <ShowResult
              ALPHA={ALPHA}
              DEGREE_OF_FREEDOM={DEGREE_OF_FREEDOM}
              CRITICAL_VALUE={CRITICAL_VALUE}
              CHI_SQAURE={CHI_SQAURE}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ChiSqaure;
