import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import ExponentialArrival from "./ArrivalType/ExponentialArrival";
import ExponentialService from "./ArrivalType/ExponentialService";
import LoadingButton from "@mui/lab/LoadingButton";

const SimulationParams = ({
  isLoading,
  inputParams,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container backgroundColor="#edf5fc" borderRadius={2}>
        <Grid item xs={4} p={2}>
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Number of Servers ( C )
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="servers"
            name="servers"
            type="number"
            value={inputParams.servers}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <ExponentialArrival
            inputValue={inputParams}
            handleInputChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4}>
          <ExponentialService
            inputValue={inputParams}
            handleInputChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingButton
          size="medium"
          type="submit"
          loading={isLoading}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Calculate
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default SimulationParams;
