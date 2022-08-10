import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ theme }) => theme.disabledLight};
  border-radius: 8px;

  position: relative;

  * {
    z-index: 1;
  }

  h3,
  h4 {
    color: ${({ theme }) => theme.dark};
    text-align: center;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.375rem;
    font-weight: 700;

    width: 90%;
    max-width: 690px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }

  h4 {
    font-size: 1.25rem;
    margin-top: 1.875rem;
    width: 90%;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    inset: 0;

    z-index: 0;
  }

  padding: 4.375rem 0 5.625rem;

  @media (min-width: 768px) {
    padding: 10.75rem 0;
  }
`;
