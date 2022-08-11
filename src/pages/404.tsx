import React from "react";
import Head from "next/head";

import { Button } from "../components/Button";

import { Container, ContentContainer } from "../styles/404";

export default function NotFound(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Oops | ABPBE</title>
      </Head>
      <ContentContainer>
        <h1>Oops</h1>
        <h2>Página não encontrada ):</h2>
        <p>
          A página que você tentou acessar está indisponível ou não existe.
          <br />
          Que tal navegar pelo nosso menu?
        </p>
        <Button
          variant="secondary"
          type="button"
          text="VOLTAR PARA PÁGINA ANTERIOR"
          onClick={() => window?.history.back()}
          customStyles={{ maxWidth: 310 }}
        />
      </ContentContainer>
    </Container>
  );
}
