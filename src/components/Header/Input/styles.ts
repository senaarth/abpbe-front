import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  min-height: 2.25rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dark};

  padding-right: 1rem;

  button {
    width: 1rem;
    height: 1rem;
    margin-left: auto;

    display: flex;

    background: transparent;
    border: 0;

    img {
      width: 100%;
    }
  }

  input {
    width: calc(100% - 1.5rem);
    height: 100%;

    border-radius: 8px 0 0 8px;
    background: transparent;
    color: ${({ theme }) => theme.gray600};

    outline: none;
    border: 0;

    padding-left: 1rem;
  }
`;
