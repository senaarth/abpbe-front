import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <svg
        width="20"
        height="20"
        viewBox="0 0 32 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.73677 1.125L16.1088 12.7917L30.4807 1.125"
          stroke="#2E638C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    }
    {...props}
  />
))(({ theme }) => ({
  padding: "0.75rem 1.5rem",
  borderBottom: "1px solid #88C9D0",
  transition: "all 0.4s",
  color: "#103859",
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
    fontWeight: "600",
    transition: "all 0.4s",
    position: "relative",
    "&::after": {
      content: `""`,
      width: 0,
      height: 1,
      transition: "width 0.4s",
      backgroundColor: "#88C9D0",
      position: "absolute",
      left: "-25%",
      bottom: -8,
    },
    [theme.breakpoints.down("md")]: {
      color: "#263B58",
      fontSize: "0.875rem",
      "&::after": {
        content: "none",
      },
    },
  },
  "&.Mui-expanded": {
    borderBottom: 0,
    p: {
      marginLeft: "2rem",
      "&::after": {
        width: "150%",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
        marginLeft: "1.25rem",
      },
    },
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(-90deg)",
    [theme.breakpoints.down("md")]: {
      marginRight: "1.25rem",
    },
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
