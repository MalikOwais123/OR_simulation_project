import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ExponentialArrival from "./ArrivalType/ExponentialArrival";
import ExponentialService from "./ArrivalType/ExponentialService";
import OtherService from "./ArrivalType/OtherArrival";
import OtherArrival from "./ArrivalType/OtherService";

const InputParams = ({
  distribution,
  inputParams,
  handleInputChange,
  handleDistributionChange,
  handleSubmit,
}) => {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: 3,
          mb: 5,
        }}
      >
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
        <Typography sx={{ color: "gray", fontSize: 10 }}>
          Number of servers in parallel open to attend customers.
        </Typography>
      </Box>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-evenly"
        backgroundColor="#edf5fc"
        borderRadius={2}
      >
        <Grid item md={6}>
          <Box
            sx={{
              borderRadius: 2,
              padding: 3,
              mb: 5,
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              Select Inter-Arrival Distribution:
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                margin="normal"
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={distribution.arrivalType}
                label="Type"
                name="arrivalType"
                onChange={handleDistributionChange}
              >
                <MenuItem value={"exponential"}>Exponential</MenuItem>
                <MenuItem value={"uniform"}>Uniform</MenuItem>
                <MenuItem value={"normal"}>Normal</MenuItem>
                <MenuItem value={"gamma"}>Gamma</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              borderRadius: 2,
              padding: 3,
              mb: 5,
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              Service Distribution:
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                margin="normal"
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={distribution.serviceType}
                label="Type"
                name="serviceType"
                onChange={handleDistributionChange}
              >
                <MenuItem value={"exponential"}>Exponential</MenuItem>
                <MenuItem value={"uniform"}>Uniform</MenuItem>
                <MenuItem value={"normal"}>Normal</MenuItem>
                <MenuItem value={"gamma"}>Gamma</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        flexDirection="row"
        justifyContent="space-evenly"
        backgroundColor="#edf5fc"
        borderRadius={2}
      >
        <Grid md={6}>
          {distribution.arrivalType === "exponential" ? (
            <ExponentialArrival
              inputValue={inputParams}
              handleInputChange={handleInputChange}
            />
          ) : (
            <OtherArrival
              inputValue={inputParams}
              handleInputChange={handleInputChange}
            />
          )}
        </Grid>
        <Grid md={6}>
          {distribution.serviceType === "exponential" ? (
            <ExponentialService
              inputValue={inputParams}
              handleInputChange={handleInputChange}
            />
          ) : (
            <OtherService
              inputValue={inputParams}
              handleInputChange={handleInputChange}
            />
          )}
        </Grid>
      </Grid>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Calculate
      </Button>
    </Box>
  );
};

export default InputParams;
