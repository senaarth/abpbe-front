import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: 0,
  border: 0,
  fontSize: "1rem",
  color: "#000",
  fontFamily: `"Roboto", sans-serif !important`,
  fontWeight: `300 !important`,
  background: "rgba(0, 0, 0, .03)",
}));
