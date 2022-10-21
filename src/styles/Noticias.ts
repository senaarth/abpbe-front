import styled from "styled-components";

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: -8px;
  border-radius: 8px 8px 0 0;
  z-index: 1;
  padding: 3rem 0;
  background: #f2f2f2;

  > * {
    width: 90%;
    max-width: 1360px;
  }
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2 {
      width: 100%;
    }

    > div,
    > a {
      height: 300px;
    }

    > a div:last-child {
      margin-bottom: auto;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1.5fr;

    > div {
      align-items: flex-start;
    }
  }
`;
