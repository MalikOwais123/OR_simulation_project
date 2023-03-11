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
        }}
      >
        Result
      </Typography>

      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: 3,
          mb: 3,
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              display: "inline-flex",
              color: "purple",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                display: "inline-flex",
              }}
            >
              L : &nbsp;
            </Typography>
            <CountUp
              start={0}
              end={performanceMeasures.l}
              duration={2}
              separator=" "
              decimals={5}
              decimal="."
            />
          </Typography>
          <Typography
            sx={{ fontSize: 25, fontWeight: "bold", color: "purple" }}
          >
            <Typography
              sx={{
                color: "gray",
                fontSize: 25,
                fontWeight: "normal",
                display: "inline-flex",
              }}
            >
              Average Customers in System
            </Typography>
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: 3,
          mb: 3,
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              display: "inline-flex",
              color: "skyblue",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                display: "inline-flex",
              }}
            >
              Lq : &nbsp;
            </Typography>
            <CountUp
              start={0}
              end={performanceMeasures.lq}
              duration={2}
              separator=" "
              decimals={5}
              decimal="."
            />
          </Typography>
          <Typography
            sx={{ fontSize: 25, fontWeight: "bold", color: "skyblue" }}
          >
            <Typography
              sx={{
                color: "gray",
                fontSize: 25,
                fontWeight: "normal",
                display: "inline-flex",
              }}
            >
              Average Customers in Queue
            </Typography>
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: 3,
          mb: 3,
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              display: "inline-flex",
              color: "green",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                display: "inline-flex",
              }}
            >
              W : &nbsp;
            </Typography>
            <CountUp
              start={0}
              end={performanceMeasures.w}
              duration={2}
              separator=" "
              decimals={5}
              decimal="."
            />
          </Typography>
          <Typography sx={{ fontSize: 25, fontWeight: "bold", color: "green" }}>
            <Typography
              sx={{
                color: "gray",
                fontSize: 25,
                fontWeight: "normal",
                display: "inline-flex",
              }}
            >
              Average Time Spent in System
            </Typography>
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: 3,
          mb: 3,
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              display: "inline-flex",
              color: "#6d99a2",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                display: "inline-flex",
              }}
            >
              Wq : &nbsp;
            </Typography>
            <CountUp
              start={0}
              end={performanceMeasures.wq}
              duration={2}
              separator=" "
              decimals={5}
              decimal="."
            />
          </Typography>
          <Typography sx={{ fontSize: 25, fontWeight: "bold", color: "red" }}>
            <Typography
              sx={{
                color: "gray",
                fontSize: 25,
                fontWeight: "normal",
                display: "inline-flex",
              }}
            >
              Average Time Waiting in Line
            </Typography>
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: 3,
          mb: 3,
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: "bold",
              display: "inline-flex",
              color: "orange",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                display: "inline-flex",
              }}
            >
              ρ : &nbsp;
            </Typography>
            <CountUp
              start={0}
              end={performanceMeasures.idle}
              duration={2}
              separator=" "
              decimals={5}
              decimal="."
            />
          </Typography>
          <Typography
            sx={{ fontSize: 25, fontWeight: "bold", color: "orange" }}
          >
            <Typography
              sx={{
                color: "gray",
                fontSize: 25,
                fontWeight: "normal",
                display: "inline-flex",
              }}
            >
              Server Utilization
            </Typography>
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default ResultShow;
