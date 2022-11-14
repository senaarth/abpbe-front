import React from "react";
import MuiPagination, {
  PaginationProps as MuiPaginationProps,
} from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { Container } from "./styles";

interface PaginationProps {
  page: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onChangePage: (page: string) => void;
}

export const PaginationComponent = styled((props: MuiPaginationProps) => (
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

export function Pagination({
  page,
  totalPages,
  onChangePage,
}: PaginationProps) {
  return (
    <Container>
      <PaginationComponent
        count={totalPages}
        siblingCount={1}
        variant="outlined"
        shape="rounded"
        hidePrevButton
        hideNextButton
        page={page}
        // @ts-ignore
        onChange={({ target }) => onChangePage(target.innerText)}
      />
    </Container>
  );
}
