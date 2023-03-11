import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ExponentialService = ({ inputValue, handleInputChange }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 3,
        mb: 5,
      }}
    >
      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
        Inter Arrival Time:
      </Typography>
      <Box mb={2}>
        <TextField
          margin="normal"
          fullWidth
          name="serviceTime"
          type="number"
          id="serviceTime"
          label="Service Time"
          value={inputValue.serviceTime}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

export default ExponentialService;
