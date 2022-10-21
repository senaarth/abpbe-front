import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;

  width: 100%;

  position: relative;

  * {
    width: 100%;
    text-align: left;
    transition: all 0.3s;
  }

  label {
    font-size: 0.875rem;
    color: #313131;
    font-weight: 600;
  }

  p {
    font-size: 0.75rem;
    color: #313131;
    opacity: 0;

    position: absolute;
    left: 0;
    bottom: calc(-0.75rem - 8px);
  }

  input {
    width: 100%;
    font-size: 1rem;
    padding: 0.625rem 0.75rem;

    border: 1px solid ${({ theme }) => theme.aux4};
    border-radius: 4px;

    &::placeholder {
      color: #1a354799;
    }
  }

  &.invalid {
    p,
    label,
    input,
    input::placeholder {
      color: ${({ theme }) => theme.danger};
    }

    p {
      opacity: 1;
    }

    input {
      border: 1px solid ${({ theme }) => theme.danger};
    }
  }

  & + & {
    margin-top: 1.5rem;
  }
`;
