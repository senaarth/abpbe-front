import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 90%;
  max-width: 310px;
  height: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  outline: none;

  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  line-height: 54px;

  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
  }

  &.primary {
    border: 1px solid ${({ theme }) => theme.default};
    background-color: ${({ theme }) => theme.default};
  }

  &.secondary {
    border: 1px solid ${({ theme }) => theme.defaultSecondary};
    background-color: ${({ theme }) => theme.defaultSecondary};
  }

  &.outlined {
    border: 1px solid ${({ theme }) => theme.aux2};
    background-color: transparent;
    color: #3765a6;
  }

  &.rounded {
    border-radius: 12px;
  }
`;
