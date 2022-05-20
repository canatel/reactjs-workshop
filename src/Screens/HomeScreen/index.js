import React from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TaskTable from "../../Components/TasksTable";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function HomeScreen() {
  const classes = useStyles();

  const data = [
    {
      date: "Hoy",
      description: "No se",
      completed: false,
    },
    {
      date: "ayer",
      description: "No se",
      completed: true,
    },
    {
      date: "Hoy",
      description: "No se",
      completed: false,
    },
    {
      date: "ayer",
      description: "No se",
      completed: true,
    },
    {
      date: "Hoy",
      description: "No se",
      completed: false,
    },
    {
      date: "ayer",
      description: "No se",
      completed: true,
    },
  ];

  const onSubmit = (event) => {
    event.preventDefault();

    const { description } = event.target.elements;

    console.log(description);
  };

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Task
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Task description"
            name="description"
            autoComplete="description"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
      <TaskTable data={data} />
    </Container>
  );
}
