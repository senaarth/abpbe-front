import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderTop: "none",
  "*": {
    fontFamily: `"Roboto", sans-serif !important`,
    fontWeight: "300 !important",
  },
  "&:before": {
    display: "none",
  },
  ".MuiAccordionSummary-root + .MuiAccordionSummary-root": {
    borderTop: "1px solid rgba(0, 0, 0, 0.7)",
  },
}));
