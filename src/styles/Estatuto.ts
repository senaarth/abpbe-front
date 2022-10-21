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
    margin-top: 2rem;
    margin-top: 4rem !important;
    color: #4c575f;
  }
  .main-title,
  .content-title {
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .main-title {
    width: 100%;
    font-weight: 700;
    @media (min-width: 768px) {
      font-weight: 800;
    }
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
    margin-top: 1.5rem;
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

export const Button = styled.button`
  border-color: transparent;
  background-color: ${({ theme }) => theme.dark};
  border-radius: 8px;
  color: #fff;
  padding: 2px 0;
  height: 28px;
  max-width: 144px;
  display: flex;
  align-self: start;
  margin-left: 8%;
  align-items: center;
  margin-top: 1.5rem;
  justify-content: center;
  outline: none;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 54px;
  cursor: pointer;
  transition: filter 0.4s;
  width: 90%;

  @media (min-width: 768px) {
    background-color: rgb(217, 217, 217);
    color: rgb(0, 0, 0);
    border-radius: 0px;
    max-width: 258px;
    height: 54px;
    margin-left: 0;
    margin-top: 3rem;
    align-self: center;
  }

  &:hover {
    filter: brightness(0.8);
  }

  > img {
    display: none;
    @media (min-width: 768px) {
      display: block;
      margin-left: 1rem;
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

    @media (min-width: 1005px) {
      justify-content: space-between;
      align-items: flex-start;

      div {
        max-width: calc(100% - 21.5rem);
        position: relative;
        height: 100%;
      }

      h2 {
        width: 100%;
        margin-top: 0;
        position: relative;
      }

      p {
        margin-top: 2.5rem;
      }
    }
  }
`;
