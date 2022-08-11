import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  background-color: ${({ theme }) => theme.background};

  padding: 1.75rem 0;

  z-index: 1;
  overflow-x: hidden;

  > * {
    width: 90%;
    max-width: 1360px;
  }

  > p {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: 2.625rem 0;
  }
`;

export const MithsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5.25rem;

  padding-top: 3.375rem;
  margin-top: 4.25rem;

  position: relative;

  &::before {
    content: "";

    width: 80vw;
    height: 1px;
    background: #c4c4c4;
    opacity: 0.84;

    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;

    padding-top: 1.75rem;
    padding-bottom: 18.5rem;

    &::before {
      width: 95vw;
    }

    &::after {
      content: "";

      width: 40%;
      max-width: 500px;
      aspect-ratio: 1.125;

      z-index: 0;

      background-image: url("/images/triangle.png");
      background-size: contain;
      background-repeat: no-repeat;

      position: absolute;
      bottom: 20px;
      right: -5%;
    }
  }
`;

export const MithCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  z-index: 1;

  h2 {
    font-size: 1.5rem;
    color: #333a40;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  b {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    color: #f79e19;

    display: flex;
    align-items: center;

    img {
      width: 1.125rem;
      object-fit: contain;
      margin-right: 1.25rem;
    }

    &.is-fact {
      color: ${({ theme }) => theme.success};
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.375rem;
    color: #313131;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.875rem;
      color: #394655;
    }
  }
`;
