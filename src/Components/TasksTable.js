import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headerTable: {
    backgroundColor: "#808080",
  },
  headerTitle: {
    color: "white",
  },
  isCompletedRow: {
    backgroundColor: "#81c784",
  },
});

export default function TaskTable(props) {
  const classes = useStyles();

  const { data = {} } = props;

  function createData(date, description, completed) {
    return { date, description, completed };
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.headerTable}>
            <TableCell className={classes.headerTitle}>Creation Date</TableCell>
            <TableCell className={classes.headerTitle}>
              Task Descrtiption
            </TableCell>
            <TableCell className={classes.headerTitle}>Is Completed?</TableCell>
            <TableCell className={classes.headerTitle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              className={row.completed && classes.isCompletedRow}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                {row.completed ? "Completed" : "Uncompleted"}
              </TableCell>
              <TableCell>
                <a href="#">Delete</a>
                <br />
                {!row.completed && <a href="#">Complete</a>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
