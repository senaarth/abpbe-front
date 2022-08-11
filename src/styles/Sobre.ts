import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};

  h3 {
    max-width: unset !important;
  }

  h4 {
    font-weight: 700 !important;
  }
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 1.75rem 0 8.375rem;
  z-index: 1;

  > * {
    width: 90%;
    max-width: 1360px;
  }

  > h2 {
    margin-top: 3rem;
    color: ${({ theme }) => theme.defaultSecondary};
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.gray200};

    margin: 4rem 0 2rem;

    &::first-letter {
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2.25rem;
      &::first-letter {
        font-size: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: 2.625rem 0;
  }
`;

export const PeopleContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: start;

  width: 90%;
  max-width: 1360px;

  margin: 3rem 0 0 0;

  img {
    width: 100%;
    object-fit: cover;
    background: #d9d9d9;
    aspect-ratio: 1.3;
  }
`;
