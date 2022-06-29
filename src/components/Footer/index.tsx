import React from "react";

import { Container, Content, Bottom, Head, SocialMedia, Nav } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <Head>
          <img
            src="/images/logo_gray_vert.png"
            alt="Logo ABPBE em tons de cinza"
          />
          <p>Acompanhe nossos conteúdos nas redes sociais</p>
          <SocialMedia>
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
          </SocialMedia>
        </Head>
        <Nav>
          <h5>Conteúdo sobre PBE</h5>
          <ul>
            <a href="/" target="_blank" rel="noreferrer">
              Galeria de artigos acadêmicos
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Cursos online
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Revista Indicium da ABPBE
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Mitos e verdades sobre PBE
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Podcast sobre PBE
            </a>
          </ul>
        </Nav>
        <Nav>
          <h5>Novidades</h5>
          <ul>
            <a href="/" target="_blank" rel="noreferrer">
              Eventos, Congressos e Lives
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Divulgação científica
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Notícias da ABPBE
            </a>
          </ul>
        </Nav>
        <Nav>
          <h5>Sobre a associação</h5>
          <ul>
            <a href="/" target="_blank" rel="noreferrer">
              Quem somos
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Manifesto, missão, visão e valores
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Perguntas frequentes
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Estatuto e transparência
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Política de privacidade
            </a>
          </ul>
        </Nav>
        <Nav>
          <h5>Faça parte</h5>
          <ul>
            <a href="/" target="_blank" rel="noreferrer">
              Quero me associar
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Quero fazer uma doação
            </a>
          </ul>
        </Nav>
      </Content>
      <Bottom>
        <p>
          {new Date()?.getFullYear()}. Associação Brasileira de Psicologia
          Baseada em Evidências. Todos os direitos reservados.
        </p>
      </Bottom>
    </Container>
  );
}
