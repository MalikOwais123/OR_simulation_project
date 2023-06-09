import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ExponentialArrival = ({ inputValue, handleInputChange }) => {
  return (
    <Box p={2}>
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
        Arrival Time:
      </Typography>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="arrivalTime"
          type="number"
          id="arrivalTime"
          label="Mean Inter-Arrival Time (λ)"
          value={inputValue.arrivalTime}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

export default ExponentialArrival;
