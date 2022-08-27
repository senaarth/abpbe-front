import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import { ContentContainer, LivesContainer, Page } from "../styles/Eventos";

export default function Eventos(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Eventos | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_library_1.png"
        title="Eventos, congressos e lives"
        subtitle="Aqui você encontrará conteúdos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, como eventos, congressos e lives nacionais e internacionais."
        whiteSubtitle
        tag="Novidades"
      />
      <ContentContainer>
        <h2 className="playfair title translate-highlight">Lives</h2>
        <LivesContainer>
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
        </LivesContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
