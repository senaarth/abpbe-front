import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  border: 0,
  background: "linear-gradient(0deg, #E7E7E7 0%, rgba(231, 231, 231, 0) 100%)",
  fontSize: "1.75rem",
  color: "#484848",
  fontFamily: `"Open Sans", sans-serif !important`,
  fontWeight: `400 !important`,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.875rem",
    color: "#1A3547",
    borderRadius: 6,
    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0.35) 0%, rgba(217, 217, 217, 0) 132.73%);",
    margin: "0 12px",
  },
}));
