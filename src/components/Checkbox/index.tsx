import React from "react";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

import { RevistaCheckbox } from "./RevistaCheckbox";

interface CheckboxProps {
  label?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: boolean) => void;
  revistaIndicio?: boolean;
}

export const ControlLabel = styled((props: FormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme }) => ({
  fontFamily: `"Roboto", sans-serif`,
  ".MuiFormControlLabel-label": {
    marginLeft: "1.125rem",
    fontWeight: "400",
    fontSize: "1rem",
    color: "#3F3F3F",
    [theme.breakpoints.up("lg")]: {
      color: "#1A1C19",
    },
  },
  path: {
    fill: "#467495",
    [theme.breakpoints.up("lg")]: {
      fill: "#284E85",
    },
  },
}));

export function Checkbox({
  label,
  onChange,
  revistaIndicio = false,
}: CheckboxProps) {
  if (revistaIndicio) {
    return <RevistaCheckbox />;
  }

  return (
    <ControlLabel
      control={
        <MuiCheckbox onChange={({ target }) => onChange(target.checked)} />
      }
      label={label}
    />
  );
}
