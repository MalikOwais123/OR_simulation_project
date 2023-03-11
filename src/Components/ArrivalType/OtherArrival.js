import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OtherService = ({ inputValue, handleInputChange }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 3,
        mb: 5,
      }}
    >
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
        Service Time:
      </Typography>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="minimumArrivalTime"
          type="number"
          id="minimumArrivalTime"
          label="Minimum Arrival Time"
          value={inputValue.minimumArrivalTime}
          onChange={handleInputChange}
        />
      </Box>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="maximumArrivalTime"
          type="number"
          id="maximumArrivalTime"
          label="Maximum Arrival Time"
          value={inputValue.maximumArrivalTime}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

export default OtherService;
