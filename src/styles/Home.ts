import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};

  border-radius: 8px 8px 0 0;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  background-color: ${({ theme }) => theme.background};

  padding: 1.75rem 0;

  z-index: 1;

  > div {
    max-width: 1360px;
  }

  @media (min-width: 768px) {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: 2.625rem 0;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 90%;

  margin: 0 auto 1.875rem auto;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.gray100};
    margin-bottom: 3.625rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  button {
    width: 100%;
    max-width: unset;

    & + button {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 716px) {
    justify-content: flex-end;

    button {
      max-width: 310px;

      & + button {
        margin: 0 0 0 1.5rem;
      }
    }
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 90%;

  margin: 0 auto 1.875rem auto;

  h2 {
    margin-bottom: 2.75rem;
  }

  a {
    max-width: 22.5rem;
  }

  > button {
    max-width: 360px;
    margin: 1.75rem auto 0 auto;

    @media (min-width: 849px) {
      margin: 2.75rem 0 0 auto;
    }
  }
`;

export const NewsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.75rem;

  width: 100%;

  position: relative;

  @media (min-width: 849px) {
    gap: 2.75rem;

    &::after,
    &::before {
      content: "";

      position: absolute;

      width: 1px;
      background-color: ${({ theme }) => theme.light};
    }

    &::before {
      left: -1rem;
      bottom: -4rem;

      height: 70%;
      max-height: 377px;
    }

    &::after {
      right: -1rem;
      top: 50%;
      transform: translateY(-50%);

      height: 30%;
      max-height: 125px;
    }
  }

  @media (min-width: 1380px) {
    &::before {
      left: 1rem;
    }

    &::after {
      right: 1rem;
    }
  }
`;

export const PartnerCall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ theme }) => theme.disabledLight};
  border-radius: 8px;

  position: relative;

  padding: 10.75rem 0;

  h3 {
    color: ${({ theme }) => theme.dark};
    font-size: 1.375rem;
    line-height: 1.375rem;
    font-weight: 700;
    text-align: center;

    width: 90%;
    max-width: 690px;

    z-index: 1;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    inset: 0;

    z-index: 0;
  }
`;
