import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dummyData } from "../../helpers/dummyData";

export default function TempTable({ isLoading, data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="caption table">
        {isLoading && <caption>Loading...</caption>}
        {!isLoading && (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Customers</TableCell>
                <TableCell align="right">IA Time</TableCell>
                <TableCell align="right">Arr Time</TableCell>
                <TableCell align="right">Service Time </TableCell>
                <TableCell align="right">Start Time</TableCell>
                <TableCell align="right">End Time</TableCell>
                <TableCell align="right">TAT</TableCell>
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
  );
}
