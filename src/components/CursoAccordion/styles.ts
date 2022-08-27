import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  #faq {
    margin: 2rem 0;
    font-size: 2rem;
    color: ${({ theme }) => theme.dark};
    font-weight: 600;
  }
`;

export const AccordionContainer = styled.div`
  font-family: "Roboto", sans-serif;

  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 4px;

  > div + div {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  * {
    background-color: white;
  }
`;
