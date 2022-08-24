import styled from "styled-components";

export const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.4s;
  text-decoration: none;

  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-left: 1.5rem;
  }

  &.transparent {
    color: #eee;

    svg {
      path {
        fill: #eee;
        transition: all 0.4s;
      }
    }

    &.open,
    &:hover {
      color: #88c9d0;

      svg path {
        fill: #88c9d0;
      }
    }
  }

  &.colored {
    color: ${({ theme }) => theme.aux4};

    svg {
      margin-left: 1.5rem;

      path {
        fill: ${({ theme }) => theme.aux4};
        transition: all 0.4s;
      }
    }

    &.open,
    &:hover {
      color: #284e85;

      svg path {
        fill: #284e85;
      }
    }
  }
`;
