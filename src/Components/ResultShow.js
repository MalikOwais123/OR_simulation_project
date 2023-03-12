import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const ResultShow = ({ performanceMeasures }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          mt: 3,
          mb: 3,
        }}
      >
        Performance Measures
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ResultTile
            symbol="L"
            title="Average Customers in System"
            value={performanceMeasures.l}
            color="purple"
          />
        </Grid>
        <Grid item xs={6}>
          <ResultTile
            symbol="Lq"
            title="Average Customers in Queue"
            value={performanceMeasures.lq}
            color="skyblue"
          />
        </Grid>
        <Grid item xs={6}>
          <ResultTile
            symbol="W"
            title="Average Time Spent in System"
            value={performanceMeasures.w}
            color="green"
          />
        </Grid>
        <Grid item xs={6}>
          <ResultTile
            symbol="Wq"
            title="Average Time Waiting in Line"
            value={performanceMeasures.wq}
            color="red"
          />
        </Grid>
        <Grid item xs={6}>
          <ResultTile
            symbol="P0"
            title="Server Utilization"
            value={performanceMeasures.idle}
            color="orange"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ResultShow;

const ResultTile = ({ symbol, title, value, color }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        background: "#edf5fc",
        padding: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: 25,
          fontWeight: "bold",
          display: "inline-flex",
          color: color,
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            fontWeight: "bold",
            display: "inline-flex",
          }}
        >
          {symbol} : &nbsp;
        </Typography>
        <CountUp
          start={0}
          end={value}
          duration={2}
          separator=" "
          decimals={5}
          decimal="."
        />
      </Typography>
      <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
        <Typography
          sx={{
            color: "gray",
            fontWeight: "normal",
            display: "inline-flex",
          }}
        >
          {title}
        </Typography>
      </Typography>
    </Box>
  );
};
