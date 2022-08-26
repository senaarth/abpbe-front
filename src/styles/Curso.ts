import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 7.75rem 0 0;
  background: #f2f2f2;

  > :not(footer) {
    width: 90%;
    max-width: 1360px;
  }

  footer {
    margin-top: 3.375rem;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 42px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 3fr;

    > div:first-child {
      max-width: 320px;
    }
  }
`;

export const Navigation = styled.nav`
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

export const GeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.aux3};

  padding: 1.5rem 0 2rem;

  * {
    color: #fafafa;
    width: 100%;
  }

  b {
    font-size: 1.125rem;
    font-weight: 600;

    padding: 0 1.5rem 1.5rem;
    border-bottom: 1px solid #88c9d099;
  }

  p {
    font-weight: 600;
    font-size: 0.875rem;
    margin-top: 1.5rem;
    padding-left: 1.5rem;
  }
`;

export const CourseDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .tag {
    padding: 0 0.375rem;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.aux4};
    background: ${({ theme }) => theme.light};

    margin-bottom: 0.75rem;
  }

  h2 {
    color: ${({ theme }) => theme.dark};
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem 0 1.75rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #333;
    text-align: justify;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;
  margin: 1.75rem 0 2rem;

  p {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    background-color: #2e638c;
    padding: 1rem 0.75rem;
    border-radius: 28px;
    text-transform: uppercase;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #88c9d01a;

    width: 100%;
    max-width: 275px;
    aspect-ratio: 1.15;
    border-radius: 4px;

    p {
      font-size: 1.5rem;
      font-weight: 600;
      width: 90%;
      text-align: center;
      color: #000;
    }
  }
`;

export const LotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #ffffff;
  margin-top: 4rem;

  > * {
    width: 100%;
    font-family: "Roboto", sans-serif;
  }

  div:first-child {
    padding: 1.5rem;
    background: linear-gradient(
      92.48deg,
      rgba(157, 200, 207, 0.2) 3.44%,
      rgba(38, 59, 88, 0.2) 111.01%
    );
    border-radius: 0px 0px 8px 8px;

    p {
      font-size: #313131;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.5rem;
  }
`;

export const Lote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1.5rem;
  gap: 1rem;

  border-bottom: 1px solid #9dc8cf66;

  b {
    color: #000;
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    color: #313131;
  }
`;
