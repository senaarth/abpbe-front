import styled from "styled-components";

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8.5rem 0 0;

  background: ${({ theme }) => theme.defaultSecondary};
`;

export const ContentContainer = styled.main`
  width: 90%;
  max-width: 1360px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  position: relative;

  @media (min-width: 1160px) {
    margin-bottom: 11.75rem;

    &::after {
      content: "";
      width: 80%;
      height: 1px;
      background: ${({ theme }) => theme.gray600};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: 1267px) {
    gap: 5rem;
  }
`;

export const TextContainer = styled.div`
  width: 90%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    color: #eeeeee;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;

    &::before {
      content: "";
      width: 4ch;
      height: 5px;
      background-color: ${({ theme }) => theme.gray600};
      position: absolute;
      left: 0;
      bottom: -5px;
    }
  }

  h2 {
    color: #f2f2f2;
    font-size: 1.575rem;
  }

  @media (min-width: 1160px) {
    h1 {
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 1.75rem;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;

  margin: 3.75rem 0 1.75rem;

  @media (min-width: 1160px) {
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;

  img {
    width: 1.25rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
    }

    b {
      font-size: 0.875rem;
      color: #eee;
    }
  }

  @media (min-width: 1160px) {
    gap: 2.375rem;

    div {
      gap: 0.25rem;

      p {
        font-size: 1rem;
      }

      b {
        font-size: 1.25rem;
      }
    }
  }
`;
