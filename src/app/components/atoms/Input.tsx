"use client";
import { TextField } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <TextField
      id="standard-basic"
      label="Standard"
      variant="standard"
      sx={{
        "& .MuiInput-underline:after": {
          borderBottomColor: "#E2DE00",
        },
        "& .MuiInputBase-input:focus": {
          color: "#E2DE00",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#E2DE00",
        },
      }}
    />
  );
};

export default Input;
