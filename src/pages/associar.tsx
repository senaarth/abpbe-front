import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

import { ContentContainer, Page, Content } from "../styles/Associar";

export default function Associar(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Quero me associar | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_estatuto.png"
        title="Quero me associar"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        isTitleHighlighted
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          Quero me associar
        </h1>
        <Content>
          <h1 className="playfair">
            Gostaria de se associar na ABPBE? <span className="highlighted">Se inscreva no nosso banco de talentos:</span>
          </h1>
          <div className="d-flex">
            <div>
            <img src="images/card_placeholder.png" alt="Fundo de exemplo" />
          </div>
          <div>
            <h2 className="playfair">Preencha os campos com suas informações</h2>
          <form action="">
            <label htmlFor="name">
                Nome completo
                <input id="name" />
            </label>

            <label htmlFor="email">
                Endereço de e-mail
                <input id="email" placeholder="exemplo: tom@gmail.com"/>
            </label>

            <label htmlFor="description">
                Por que você deseja fazer parte de ABPBE?
                <textarea id="description" rows={10}/>
            </label>

            <Button text="QUERO ME INSCREVER" type="submit" />
          </form>
          </div>
          </div>
        </Content>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
