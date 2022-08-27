import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.354 0.878294L13.8905 7.41481L12.3585 8.94681L7.354 3.94229L2.34948 8.94681L0.817484 7.41481L7.354 0.878294Z"
          fill="black"
          fillOpacity="0.54"
        />
      </svg>
    }
    {...props}
  />
))(({ theme }) => ({
  padding: "0.75rem 1.5rem",
  // borderBottom: "1px solid #88C9D0",
  transition: "all 0.4s",
  color: "black",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    padding: "0.75rem",
  },
  p: {
    fontSize: "1.25rem",
    fontWeight: "300",
    transition: "all 0.4s",
    position: "relative",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(180deg)",
    [theme.breakpoints.down("md")]: {
      marginRight: "1.25rem",
    },
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0)",
  },
  "&:last-child": {
    borderBottom: 0,
  },
}));
