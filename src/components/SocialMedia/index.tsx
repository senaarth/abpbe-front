import React from "react";

import { Container } from "./styles";

interface SocialMediaProps {
  customStyles?: {};
}

export function SocialMedia({ customStyles = {} }: SocialMediaProps) {
  return (
    <Container style={customStyles}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src="/images/instagram.png" alt="Ícone instagram" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src="/images/facebook.png" alt="Ícone facebook" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src="/images/twitter.png" alt="Ícone twitter" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <img src="/images/linkedin.png" alt="Ícone linkedin" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <img src="/images/youtube.png" alt="Ícone youtube" />
      </a>
    </Container>
  );
}
