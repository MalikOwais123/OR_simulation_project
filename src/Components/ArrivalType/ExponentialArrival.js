import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ExponentialArrival = ({ inputValue, handleInputChange }) => {
  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
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
          label="Inter-Arrival Time"
          value={inputValue.arrivalTime}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

export default ExponentialArrival;
