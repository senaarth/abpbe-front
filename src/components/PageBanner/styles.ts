import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 45rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2.5rem;

  z-index: 0;
  position: relative;

  p.tag {
    padding: 0.125rem 0.625rem;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.aux3};
    background: ${({ theme }) => theme.light};

    margin-bottom: 0.875rem;

    @media (min-width: 768px) {
      margin-bottom: 1.25rem;

      &.mt-auto {
        margin-top: auto;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.gray600};
    font-weight: 600;

    display: flex;
    position: relative;

    max-width: 960px;

    @media (min-width: 768px) {
      font-size: 3.25rem;

      &.mt-auto {
        margin-top: auto;
      }
    }

    /* &.highlight::after {
      content: "";
      position: absolute;
      bottom: 0.75rem;
      right: 20%;
      width: 11ch;
      height: 0.75rem;
      background-color: #88c9d099;
      border-radius: 2px;
      z-index: 0;
    } */
  }

  h2 {
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.gray600};
    font-weight: 500;

    margin: 1.75rem 0;
    max-width: 1360px;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  }
`;

export const ScrollDown = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 7rem;

  background: transparent;
  cursor: pointer;
  border: 0;

  position: absolute;
  left: 50%;
  bottom: calc(2.5rem + 16px);
  transform: translateX(-50%);

  img {
    width: 14px;
  }

  &::after {
    cursor: pointer;
    content: "Role para baixo";
    position: absolute;

    width: 100%;

    left: 50%;
    top: calc(-100% - 16px);
    transform: translateX(-50%);

    color: ${({ theme }) => theme.aux1};
    font-size: 0.75rem;
    font-weight: 600;
  }

  &:hover {
    filter: brightness(0.8);
  }

  /* @media (min-width: 768px) {
    display: flex;
  } */
`;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 240px;

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

  @media (min-width: 768px) {
    margin-top: auto;
    margin-left: auto;
  }
`;
