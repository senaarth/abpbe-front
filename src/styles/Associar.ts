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
    font-size: 0.875rem;
    font-weight: 500;

    .highlighted {
      font-weight: 700;
      font-family: inherit;
    }

    @media (min-width: 768px) {
      font-size: 2rem;
      margin-top: 0;
    }
  }

  h2 {
    font-size: 1.25rem;

    @media (min-width: 768px) {
      font-weight: 500;
    }
  }

  img {
    object-fit: cover;
    margin-top: 0.5rem;
    margin-bottom: 1.875rem;
    width: 100%;
    height: 15.375rem;

    @media (min-width: 768px) {
      height: 100%;
    }
  }

  .d-flex {
    width: 100%;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 2.75rem;
      margin-top: 2.5rem;
    }

    > div {
      @media (min-width: 768px) {
        width: 50%;
      }
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
        height: 2.75rem;
      }

      textarea {
        margin-bottom: 1rem;
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
