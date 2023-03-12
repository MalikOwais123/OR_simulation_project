import { Box, Typography } from "@mui/material";
import React from "react";

const ShowResult = ({
  ALPHA,
  DEGREE_OF_FREEDOM,
  CRITICAL_VALUE,
  CHI_SQAURE,
}) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        background: "#edf5fc",
        padding: 3,
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Typography
        sx={{
          fontSize: 22,
        }}
      >
        Alpha :&nbsp;
        <span style={{ color: "gray" }}>{ALPHA}</span>
      </Typography>
      <Typography
        sx={{
          fontSize: 22,
        }}
      >
        Degree of Freedom :&nbsp;
        <span style={{ color: "gray" }}>{DEGREE_OF_FREEDOM}</span>
      </Typography>
      <Typography
        sx={{
          fontSize: 22,
        }}
      >
        Critical Value :&nbsp;
        <span style={{ color: "gray" }}>{CRITICAL_VALUE}</span>
      </Typography>
      <Typography
        sx={{
          fontSize: 22,
        }}
      >
        Calculated Value :&nbsp;
        <span style={{ color: "gray" }}>{CHI_SQAURE}</span>
      </Typography>

      {CHI_SQAURE < CRITICAL_VALUE ? <PassTest /> : <FailTest />}
    </Box>
  );
};

export default ShowResult;

const PassTest = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 22,
          mt: 3,
          mb: 3,
          color: "green",
          fontWeight: "bold",
        }}
      >
        TEST PASS
      </Typography>
      <Typography>
        Since calculated value is less than critical value, the given data
        follows Poisson Distribution
      </Typography>
    </>
  );
};

const FailTest = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 22,
          mt: 3,
          mb: 3,
          color: "red",
          fontWeight: "bold",
        }}
      >
        TEST FAIL
      </Typography>
      <Typography>
        Since calculated value is greater than critical value, the given data
        does not follow Poisson Distribution
      </Typography>
    </>
  );
};
