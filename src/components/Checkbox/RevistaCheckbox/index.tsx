import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

export const ControlLabel = styled((props: FormControlLabelProps) => (
  <FormControlLabel {...props} />
))(() => ({
  fontFamily: `"Open Sans", sans-serif`,
  ".MuiFormControlLabel-label": {
    fontWeight: "400",
    fontSize: "1.25rem",
    color: "#313131",
    marginLeft: "1rem",
  },
}));

export function RevistaCheckbox(props: CheckboxProps) {
  return (
    <ControlLabel
      control={
        <Checkbox
          sx={{
            "&:hover": { bgcolor: "transparent" },
          }}
          disableRipple
          color="default"
          checkedIcon={
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 13L11.375 17.875L19.5 8.125"
                stroke="#103859"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="25"
                rx="4.5"
                fill="#88C9D0"
                fillOpacity="0.15"
                stroke="#88C9D0"
              />
            </svg>
          }
          icon={
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="25"
                rx="4.5"
                fill="#88C9D0"
                fillOpacity="0.15"
                stroke="#88C9D0"
              />
            </svg>
          }
          inputProps={{ "aria-label": "Checkbox demo" }}
          {...props}
        />
      }
      label="Quero receber conteúdos sobre a Revista Indício "
    />
  );
}
