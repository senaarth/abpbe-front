import styled from "styled-components";

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h3 {
    max-width: unset;
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.defaultSecondary};
  h1 {
    font-size: 1.25rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
      margin-top: 0;
    }
  }

  form {
    width: 100%;
    label {
      display: flex;
      flex-direction: column;
      color: #313131;
      font-size: 0.875rem;
      font-weight: 600;
      margin-top: 1rem;

      input {
        height: 3.75rem;
        font-size: 1rem;
      }

      textarea {
        margin-bottom: 2rem;
      }

      input,
      textarea {
        width: 100%;
        border-radius: 4px;
        border: 1px solid #949494;
        margin-top: 0.5rem;
        padding: 1rem;
      }
    }

    button {
      width: 100%;
      max-width: 756px;

      @media (min-width: 768px) {
        margin-left: auto;
      }
    }
  }
`;

export const ContentContainer = styled.main`
  width: 90%;
  max-width: 1360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-radius: 8px 8px 0 0;
  padding: 2rem 0 2.5rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0 9.0625rem 0;
  }

  > * {
    width: 100%;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin-top: 2rem;
  }
`;
