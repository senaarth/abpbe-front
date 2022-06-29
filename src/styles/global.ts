import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
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
    font-family: 'Playfair Display', serif;
  }

  a {
    transition: filter 0.3s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
