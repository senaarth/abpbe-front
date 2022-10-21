import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

import { ContentContainer, Page, Content } from "../styles/Doacao";

export default function Doacao(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Quero fazer uma doação | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_estatuto.png"
        title="Quero fazer uma doação"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        isTitleHighlighted
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          Quero fazer uma doação
        </h1>
        <Content>
          <h1 className="playfair">
            Preencha os campos com suas informações caso queira fazer uma doação
            para contribuir com a associação
          </h1>
          <form action="">
            <label htmlFor="name">
              Nome completo
              <input id="name" />
            </label>

            <label htmlFor="email">
              Endereço de e-mail
              <input id="email" placeholder="exemplo: tom@gmail.com" />
            </label>

            <label htmlFor="description">
              Por qual motivo você gostaria de contribuir para a ABPBE?
              <textarea id="description" rows={10} />
            </label>

            <Button text="REALIZAR PAGAMENTO" type="submit" />
          </form>
        </Content>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
