import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderTop: "none",
  "*": {
    fontFamily: `"Open Sans", sans-serif !important`,
  },
  "&:before": {
    display: "none",
  },
  ".MuiAccordion-region": {
    background: "#F8F8F8",
  },
}));
