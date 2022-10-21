import styled from "styled-components";

export const Content = styled.div`
  align-self: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  width: 100%;

  > div {
    width: 100%;
  }

  .react-tabs__tab-list {
    border: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .react-tabs__tab {
    background: transparent;
    border: none;
    color: #0000008a;
    flex: 1;
    text-align: center;
    margin-bottom: 3.125rem;
    margin-bottom: 3rem;
    font-weight: 700;
    padding-bottom: 0.9rem;
    min-width: 300px;
    &--selected {
      color: ${({ theme }) => theme.default};
      border-bottom: 2px solid ${({ theme }) => theme.default};

      &::after {
        content: "";
        display: none;
      }
    }
  }
`;
