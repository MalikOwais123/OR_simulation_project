import React from "react";
import {
  TableContainer,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Table,
} from "@mui/material";

const TestTable = ({ dataSet }) => {
  function createData(name, fullTimeRM, partTimeRM, total) {
    return { name, fullTimeRM, partTimeRM, total };
  }

  const rows = [
    createData(
      "Delux Machines",
      dataSet.deluxMachine.fullTimeActual,
      dataSet.deluxMachine.partTimeActual,
      dataSet.deluxMachine.deluxTotal
    ),

    createData(
      "Normal Machines",
      dataSet.normalMachine.partTimeActual,
      dataSet.normalMachine.fullTimeActual,
      dataSet.normalMachine.normalTotal
    ),
    createData(
      "Total",
      dataSet.deluxMachine.partTimeActual +
        dataSet.normalMachine.partTimeActual,
      dataSet.deluxMachine.fullTimeActual +
        dataSet.normalMachine.fullTimeActual,
      dataSet.deluxMachine.fullTimeTotal + dataSet.deluxMachine.partTimeTotal
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Manufaturing Machines in a Factory for a Month</caption>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Full Time RM</TableCell>
            <TableCell align="center">Break Down RM</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th">{row.name}</TableCell>
              <TableCell align="center">{row.fullTimeRM}</TableCell>
              <TableCell align="center">{row.partTimeRM}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTable;
