import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing(3),
  }),
}));

const App = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  return (
    <Paper className={classes.root} elevation={4}>
      <h2>Login</h2>

      <TextField label="Username"
                 value={value}
                 onChange={(event) => setValue(event.target.value)} />
    </Paper>
  );
};

export default App;
