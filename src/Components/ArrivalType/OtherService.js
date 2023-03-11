import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OtherArrival = ({ inputValue, handleInputChange }) => {
  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
        Service Time:
      </Typography>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="minimumServiceTime"
          type="number"
          id="minimumServiceTime"
          label="Minimum Service Time"
          value={inputValue.minimumServiceTime}
          onChange={handleInputChange}
        />
      </Box>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="maximumServiceTime"
          type="number"
          id="maximumServiceTime"
          label="Maximum Service Time"
          value={inputValue.maximumServiceTime}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

export default OtherArrival;
