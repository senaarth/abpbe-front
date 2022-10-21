import React from "react";
import MuiPagination, { PaginationProps } from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { Container } from "./styles";

export const PaginationComponent = styled((props: PaginationProps) => (
  <MuiPagination {...props} />
))(() => ({
  "&, *": {
    background: "transparent !important",
    color: "#2E638C !important",
    borderColor: "#88C9D0!important",
  },
  button: {
    margin: "0 0.5rem",
    height: "3rem",
    width: "3rem",
    borderRadius: 5,
    fontSize: "1.5rem",
  },
  ".Mui-selected": {
    border: "3px solid #2E638C !important",
    borderColor: "#2E638C !important",
    borderRadius: "50%",
  },
}));

export function Pagination() {
  return (
    <Container>
      <PaginationComponent
        count={10}
        siblingCount={1}
        variant="outlined"
        shape="rounded"
        hidePrevButton
        hideNextButton
      />
    </Container>
  );
}
