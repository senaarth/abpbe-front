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
  }

  h1 {
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;

    img {
      width: 100%;
      max-width: 19.5rem;
      border-radius: 0.75rem;
    }

    div {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    h2 {
      color: ${({ theme }) => theme.dark};
      font-size: 1.125rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1rem;
      margin-top: 1rem;
    }

    @media (min-width: 1005px) {
      justify-content: space-between;
      align-items: flex-start;

      div {
        max-width: calc(100% - 21.5rem);
        position: relative;
        height: 100%;

        &::after {
          content: "";
          position: absolute;

          left: 0;
          bottom: 0;
          width: 40%;
          height: 1px;

          opacity: 0.2;
          background: ${({ theme }) => theme.gradientHorizontal};
        }
      }

      h2 {
        width: 100%;
        margin-top: 0;
        position: relative;

        &::after {
          content: "";
          position: absolute;

          right: 0;
          bottom: -1rem;
          width: 60%;
          height: 1px;

          opacity: 0.2;
          background: ${({ theme }) => theme.gradientHorizontal};
        }
      }

      p {
        margin-top: 2.5rem;
      }
    }
  }
`;
