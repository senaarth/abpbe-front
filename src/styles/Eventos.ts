import styled from "styled-components";

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 4.5rem 0;

  background: #f2f2f2;
  border-radius: 8px 8px 0 0;
  margin-top: -12px;
  z-index: 1;

  > * {
    width: 90%;
    max-width: 1360px;
  }
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin: 2.5rem 0 2rem;
`;

export const LivesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.25rem;

  position: relative;
  margin: 3rem 0 2rem;

  /* @media (min-width: 849px) {
    gap: 1.25rem;
    justify-content: flex-start;
  } */
`;
