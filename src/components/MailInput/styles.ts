import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 720px;
  min-height: 40px;
  gap: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  border-radius: 8px;

  padding: 0.75rem;
  padding-right: 1.625rem;

  transition: border 0.2s;

  &.focus {
    border: 4px solid ${({ theme }) => theme.aux3};
  }

  &.invalid {
    border: 4px solid ${({ theme }) => theme.danger};
  }

  button {
    font-size: 0;
    max-width: 28px;
    max-height: 28px;
    border-radius: 6px;

    display: flex;
    position: relative;

    &::after {
      content: "+";
      max-height: 1.5rem;
      font-size: 1.5rem;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.aux1};

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &.loading::after {
      display: none;
    }
  }

  input {
    height: 100%;
    flex: 1;
    border: 0;

    font-size: 0.75rem;
    outline: none;

    &,
    &::placeholder {
      color: black;
    }
  }

  @media (min-width: 660px) {
    padding: 0.5rem 1rem 0.5rem 1.5rem;

    input,
    input::placeholder {
      font-size: 0.825rem;
    }

    button {
      max-height: 46px;
      max-width: 25%;
      font-size: 1rem;

      &::after {
        content: "";
      }
    }
  }
`;
