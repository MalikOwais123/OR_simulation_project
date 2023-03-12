import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function SimulationTable({ isLoading, data }) {
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
        Simulation Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="caption table">
          {isLoading && <caption>Loading...</caption>}
          {!isLoading && (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>Customers</TableCell>
                  <TableCell align="right">Inter Arrival Time</TableCell>
                  <TableCell align="right">Arrival Time</TableCell>
                  <TableCell align="right">Service Time </TableCell>
                  <TableCell align="right">Start Time</TableCell>
                  <TableCell align="right">End Time</TableCell>
                  <TableCell align="right">Turn Around Time</TableCell>
                  <TableCell align="right">Wait Time</TableCell>
                  <TableCell align="right">Server</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      C {i + 1}
                    </TableCell>
                    <TableCell align="right">{item.interArrival}</TableCell>
                    <TableCell align="right">{item.arrival}</TableCell>
                    <TableCell align="right">{item.serviceTime}</TableCell>
                    <TableCell align="right">{item.startTime}</TableCell>
                    <TableCell align="right">{item.endTime}</TableCell>
                    <TableCell align="right">{item.turnaroundTime}</TableCell>
                    <TableCell align="right">{item.waitTime}</TableCell>
                    <TableCell align="right">{item.server}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
