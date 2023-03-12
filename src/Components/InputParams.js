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
    <>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          mt: 3,
          mb: 3,
        }}
      >
        Input Parameters
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Box
          sx={{
            borderRadius: 2,
            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            backgroundColor: "#edf5fc",
            padding: 3,
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
        </Box>
        <Grid
          container
          flexDirection="row"
          justifyContent="space-evenly"
          backgroundColor="#edf5fc"
          borderRadius={2}
          mt={2}
        >
          <Grid
            item
            md={6}
            sx={{
              padding: 3,
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: "bold", mb: 2 }}>
              Inter-Arrival Distribution:
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
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              padding: 3,
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: "bold", mb: 2 }}>
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
                {distribution.arrivalType === "exponential" && (
                  <MenuItem value={"exponential"}>Exponential</MenuItem>
                )}
                <MenuItem value={"uniform"}>Uniform</MenuItem>
                <MenuItem value={"normal"}>Normal</MenuItem>
                <MenuItem value={"gamma"}>Gamma</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid md={6}>
            {distribution.arrivalType === "exponential" ||
            !distribution.arrivalType ? (
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
            {distribution.serviceType === "exponential" ||
            !distribution.serviceType ? (
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            size="medium"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Calculate
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default InputParams;
