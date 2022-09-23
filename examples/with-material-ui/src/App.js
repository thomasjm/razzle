
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./App.css";
import { makeStyles } from "@mui/styles";

const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <Paper elevation={4}>
      <h2>Login</h2>

      <TextField label="Username"
                 value={value}
                 onChange={(event) => setValue(event.target.value)} />
    </Paper>
  );
};

export default App;
