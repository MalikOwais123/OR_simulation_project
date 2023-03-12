import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ExponentialService = ({ inputValue, handleInputChange }) => {
  return (
    <Box p={2}>
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
        Service Time:
      </Typography>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="serviceTime"
          type="number"
          id="serviceTime"
          label="Mean Service Time (μ)"
          value={inputValue.serviceTime}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

export default ExponentialService;
