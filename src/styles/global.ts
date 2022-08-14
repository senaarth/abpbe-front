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

  .source-sans {
    font-family: "Source Sans 3", sans-serif;
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

  .toast-container {
    * {
      font-size: 1rem;
      color: #000;
      border-radius: 0;
    }

    > div > div > div:first-child {
      margin-right: 1rem;
    }

    .success {
      background-color: #E3F5E1;

      button {
        opacity: 1;
      }

      button path,
      path {
        fill: #168821;
      }

      div[role=progressbar] {
        background: #168821;
      }
    }

    .error {
      background-color: #FDE0DB;

      button {
        opacity: 1;
      }

      button path,
      path {
        fill: #E52207;
      }

      div[role=progressbar] {
        background: #E52207;
      }
    }

    @media (min-width: 481px) {
      width: 90%;
      max-width: 1045px;
      bottom: 5rem;
    }
  }
`;
