import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(/images/bg_library.png);

  border-radius: 8px 8px 0 0;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1200px;

  padding: 3.75rem 0 3.1875rem;

  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;

  gap: 1.75rem;

  @media (min-width: 1280px) {
    padding: 6.375rem 0 4.5rem;

    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Head = styled.div`
  width: 100%;
  max-width: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 45%;
  }

  p {
    font-size: 1rem;
    line-height: 1.04rem;
    color: ${({ theme }) => theme.aux1};
    text-align: center;

    margin: 1.5rem 0;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 240px;

  margin-bottom: 0.75rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  a {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &,
    img {
      aspect-ratio: 1;
    }

    img {
      width: 50%;
      object-fit: contain;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h5,
  button {
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.aux1};
    font-weight: 600;
  }

  h5 {
    display: none;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;

    display: flex;
    align-items: center;

    img {
      width: 1rem;
      margin-left: 1.375rem;
      object-fit: contain;
    }
  }

  ul {
    margin-top: 1.625rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      line-height: 1.1875rem;
      text-align: center;
      text-align: center;
      color: ${({ theme }) => theme.blueWarm};
      text-decoration: none;
      transition: all 0.3s;

      font-size: 0;
    }

    a + a {
      margin-top: 1.375rem;
    }

    height: 0;
    overflow: hidden;
    transition: all 0.3s;

    &.active {
      height: unset;

      a {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1280px) {
    h5 {
      display: flex;
    }

    button {
      display: none;
    }

    &,
    ul {
      align-items: flex-start;
    }

    h5 {
      margin-bottom: 0.375rem;
      font-size: 0.75rem;
      line-height: 1rem;
    }

    ul {
      height: unset;

      a {
        text-align: left;
        font-size: 0.875rem;
      }

      a + a {
        margin-top: 2rem;
      }
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.75rem 0 2.25rem 0;
  border-top: 1px solid rgba(205, 205, 205, 0.2);

  p {
    width: 75%;
    color: ${({ theme }) => theme.aux1};
    font-size: 0.75rem;
    line-height: 1.5rem;
    font-weight: 200;
    text-align: center;
  }

  @media (min-width: 1280px) {
    padding: 0.5rem 0 1.1875rem 0;
  }
`;
