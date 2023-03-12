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
import { truncate } from "./ChiSqaure";

const TestTable = ({ dataSet }) => {
  function createData(name, fullTimeRM, partTimeRM, chiSquare, total) {
    return { name, fullTimeRM, partTimeRM, chiSquare, total };
  }

  const rows = [
    createData(
      "Delux Machines",
      dataSet.deluxMachine.fullTimeActual,
      dataSet.deluxMachine.partTimeActual,
      dataSet.deluxMachine.chiSquareTotal
    ),

    createData(
      "Normal Machines",
      dataSet.normalMachine.partTimeActual,
      dataSet.normalMachine.fullTimeActual,
      dataSet.normalMachine.chiSquareTotal
    ),
    createData(
      "Total",
      dataSet.deluxMachine.partTimeActual +
        dataSet.normalMachine.partTimeActual,
      dataSet.deluxMachine.fullTimeActual +
        dataSet.normalMachine.fullTimeActual,
      dataSet.deluxMachine.chiSquareTotal + dataSet.normalMachine.chiSquareTotal
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
            <TableCell align="center">Chi - Sqaure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th">{row.name}</TableCell>
              <TableCell align="center">{row.fullTimeRM}</TableCell>
              <TableCell align="center">{row.partTimeRM}</TableCell>
              <TableCell align="center">
                {parseFloat(row.chiSquare).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestTable;
