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
  font-family: initial;
  color: #1a3547;
  padding: 0 0.75ch;
  @media (min-width: 768px) {
    padding: 0 0.75ch;
    margin-top: 1rem;
    color: #4c575f;
  }
  .content-title {
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: "Open Sans", sans-serif;
  }

  .datetime {
    font-size: 1rem;
    font-weight: 800;
    color: #8c8989;
    margin-right: auto;
  }

  hr {
    border-top: 1px solid #88c9d0;
    width: 100%;
    margin-top: 0.75rem;
    margin-bottom: 2.7rem;
  }

  .content-subtitle {
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 1.5rem;
    @media (min-width: 768px) {
      margin-bottom: 2rem;
      font-weight: 600;
    }
  }

  .content-text {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .quote {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1280px) {
      flex-direction: row;
    }

    .content-text,
    div > .content-text {
      width: 100%;
      margin-bottom: 1.5rem;
    }

    div {
      @media (min-width: 1280px) {
        width: 95%;
      }
    }

    .box {
      background-color: #46749512;
      border-left: 8px solid #9dc8cf;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 1rem;
      margin-bottom: 1.5rem;

      @media (min-width: 1280px) {
        width: 53rem;
      }

      &.last {
        @media (min-width: 1280px) {
          margin-left: 1.5rem;
        }
      }

      &.first {
        @media (min-width: 1280px) {
          margin-right: 1.5rem;
        }
      }

      p {
        margin: 0 1.5rem;
      }

      img {
        width: 17px;

        &.close {
          margin-left: 90%;
        }
      }
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  .info {
    h1 {
      color: #000;
      text-align: center;
    }

    div {
      margin-top: 3.2rem;
      width: 20.5rem;
      height: 15.75rem;

      &.mission {
        background-color: #4674954d;
      }

      &.vision {
        background-color: #9dc8cf66;
      }

      &.values {
        background-color: #284e8533;
      }
    }
  }
`;

export const ContentContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-radius: 8px 8px 0 0;
  /* transform: translateY(-20px); */
  padding: 2rem 0 2.5rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0 9.0625rem 0;
  }

  > * {
    width: 90%;
    max-width: 1360px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
  }
`;
