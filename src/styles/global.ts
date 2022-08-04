import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
  }

  .playfair {
    font-family: "Playfair Display", serif;
  }

  a {
    transition: filter 0.3s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }

  .title {
    color: ${({ theme }) => theme.dark};
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 125%;

    display: flex;
    position: relative;

    &::after {
      content: "";

      position: absolute;
      left: 0;
      bottom: -0.625rem;

      height: 0.5rem;
      width: 90%;
      max-width: 12ch;

      background-color: ${({ theme }) => theme.light};
    }

    &.translate-highlight {
      padding-left: 0.75ch; 
      
      &::after {
        left: -0.25ch;
      }
    }

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  .image-wrapper {
    position: relative;

    > div {
      position: relative !important;
      inset: unset !important;
      display: flex !important;
      width: 100% !important;

      img {
        width: 100%;
        height: unset !important;
        object-fit: cover;

        position: relative !important;
        height: 100% !important;
      }
    }
  }
`;
