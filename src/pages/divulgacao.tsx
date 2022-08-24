import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { PageCall } from "../components/PageCall";

import { ContentContainer, Page } from "../styles/Divulgacao";

export default function Divulgacao(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Divulgacao | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_glasses.png"
        title="Divulgação científica"
        subtitle="Em breve você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="title translate-highlight">Divulgação científica</h1>
        <p>
          Sabemos que nem todo artigo já publicado - mesmo que em periódicos de
          alto impacto - é realmente de qualidade. Ao mesmo tempo, para
          colocarmos em prática uma Psicologia Baseada em Evidências, é
          importante que tenhamos como referência artigos capazes de apresentar
          boas provas sobre o tema que investigam e a tese que defendem.
          <br />
          <br />A discriminação do nível de qualidade de um trabalho científico
          é uma tarefa complexa, que requer adaptações e procedimentos
          diferentes para cada tipo de delineamento, tema de investigação e
          objetivo de pesquisa. De modo a facilitar o acesso a materiais de
          referência e da mais alta qualidade, foi desenvolvido o projeto da
          Galeria de Artigos da ABPBE. A nossa Galeria é um espaço destinado à
          exposição exclusiva de artigos de grande excelência relevantes para a
          Psicologia e áreas afins. Em breve publicaremos os artigos revisados!
        </p>
      </ContentContainer>
      <PageCall
        boldTitle="Em breve"
        regularTitle=" postaremos os textos de divulgação científica!"
      />
      <Footer />
    </Page>
  );
}
