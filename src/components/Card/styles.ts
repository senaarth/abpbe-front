import styled from "styled-components";

export const CardContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;

  width: 100%;
  max-width: 439px;

  img {
    width: 100%;
    max-height: 194px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .text-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background: white;

    padding: 1.125rem;

    border-radius: 0 0 10px 10px;

    .title {
      font-size: 1.5rem;
      line-height: 125%;
      font-weight: 600;
      color: ${({ theme }) => theme.dark};
    }

    .subtitle {
      font-size: 1rem;
      line-height: 1.25rem;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 1.625rem;
    }

    .link-call {
      text-transform: uppercase;
      font-size: 0.875rem;
      line-height: 1rem;
      color: #3f51b5;
      letter-spacing: 1.25px;
      text-align: left;
      font-weight: 500;
    }
  }
`;
