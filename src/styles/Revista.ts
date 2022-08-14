import styled from "styled-components";

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 2rem 0 2.5rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0 2.625rem 0;
  }

  > * {
    width: 90%;
    max-width: 1360px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.dark};
  }

  > h3 {
    margin-bottom: 1.5rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;

  padding-bottom: 2.75rem;
  margin: 2rem 0 2.75rem;

  position: relative;

  &::after {
    content: "";

    width: 60%;
    height: 1px;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);

    background: ${({ theme }) => theme.gradientHorizontal};
    opacity: 0.6;
  }

  > * {
    width: 100%;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media (min-width: 945px) {
      grid-template-columns: 1fr 3fr;
    }
  }
`;

export const Navigation = styled.nav`
  width: 100%;

  border: 1px solid rgba(38, 59, 88, 0.8);
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
    padding: 1.5rem;
  }

  div:first-child {
    border-bottom: 1px solid rgba(38, 59, 88, 0.8);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${({ theme }) => theme.aux4};
      font-weight: 600;
    }

    img {
      width: 0.75rem;
    }
  }

  li {
    list-style-position: outside;
    margin-left: 1.5rem;

    button {
      border: 0;
      padding: 0;
      background: transparent;
      cursor: pointer;

      color: #313131;
      font-size: 0.825rem;
      font-weight: 600;
      text-align: left;
    }

    & + li {
      margin-top: 1.25rem;
    }
  }
`;

export const TextsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 52px;

  a,
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background: linear-gradient(180deg, rgba(16, 56, 89, 0) 0%, #103859 100%);
    min-height: 432px;

    padding: 1.5rem;

    text-decoration: none;

    h5 {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: auto auto 1.875rem 0;
      color: ${({ theme }) => theme.aux1};
      font-size: 1.5rem;
    }

    p {
      font-size: 0.925rem;
      font-weight: 700;
      margin-right: auto;
      color: rgba(238, 238, 238, 0.7);
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }
  }

  @media (min-width: 960px) {
    grid-auto-rows: 236px;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;

    a:first-child,
    div:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;

      h5 {
        margin: auto;
        font-size: 3rem;
        max-width: 90%;
        text-align: center;
      }
    }

    a,
    div {
      min-height: unset;
    }
  }
`;
