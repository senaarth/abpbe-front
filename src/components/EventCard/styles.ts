import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;

  position: relative;

  cursor: pointer;

  border: 0;
  border-radius: 4px;
  background: linear-gradient(90deg, #d4d4d490, transparent);

  b {
    font-size: 1.5rem;
    font-weight: 600;
    color: #4b5b67;
  }

  p {
    color: #4c575f;
    font-size: 0.875rem;
    font-weight: 600;
  }

  &::before {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    width: 0.875rem;
    height: 100%;
    background-color: ${({ theme }) => theme.dark};

    border-radius: 4px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
