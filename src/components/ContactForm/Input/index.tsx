import React from "react";
import { styled } from "@mui/material/styles";
import { TextFieldProps } from "@mui/material/TextField";
import { TextField } from "@mui/material";

export const Input = styled((props: TextFieldProps) => (
  <TextField variant="standard" {...props} />
))(() => ({
  color: "green",
  "*": {
    fontWeight: "300 !important",
    color: "#838383",
  },
  label: {
    color: "#838383 !important",
  },
  "input, textarea": {
    color: "#484848",
    fontWeight: "700 !important",
    fontSize: "1.25rem",
  },
  "div::after": {
    borderColor: "#103859",
    background: "#103859",
  },
}));
