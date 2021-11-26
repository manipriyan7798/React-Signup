import { FormGroup, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [state, setState] = useState("");

  const printValue = (e) => {
    e.preventDefault();
    console.log(setState(e.target.value));
  };

  return (
    <div className="signup-container">
      <div className="signup-container-text">
        <h1>Signup</h1>
        <Typography align="left">Welcome, we are happy to have you</Typography>
        <FormGroup>
          <TextField
            sx={{ m: 1.5 }}
            // value={state}
            id="first-name"
            label="First Name"
            type="text"
          />

          <TextField
            sx={{ m: 1.5 }}
            id="last-name"
            label="Last Name"
            type="text"
          />

          <TextField sx={{ m: 1.5 }} id="e-mail" label="E-mail" type="email" />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-email"
            label="Confirm Email"
            type="email"
          />
          <TextField
            sx={{ m: 1.5 }}
            id="user-name"
            label="UserName"
            type="email"
          />

          <TextField
            sx={{ m: 1.5 }}
            id="outlined-password-input"
            label="Password"
            type="password"
          />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
          />
          <Button variant="contained" onClick={printValue}>
            Sign Up
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Signup;
