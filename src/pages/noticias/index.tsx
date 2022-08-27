import React from "react";
import Head from "next/head";

import { PageBanner } from "../../components/PageBanner";
import { Footer } from "../../components/Footer";
import { NoticiaCard } from "../../components/NoticiaCard";
import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";

import { Page, ContentContainer, NewsContainer } from "../../styles/Noticias";

// type News = {};

// interface CursosProps {
//   news: News[];
// }

export default function Noticias(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Notícias | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_leafs.png"
        title="Notícias da ABPBE"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        tag="Novidades"
      />
      <ContentContainer>
        <NewsContainer>
          <div>
            <h2 className="title translate-highlight">
              Últimas notícias de ABPBE
            </h2>
            <NoticiaCard />
            <NoticiaCard />
            <NoticiaCard />
          </div>
          <div>
            <h2 className="title translate-highlight">Notícais gerais</h2>
            <Card title="Notícia de abpbe para visualização do novo card" />
            <Card title="Notícia de abpbe para visualização do novo card" />
            <Card title="Notícia de abpbe para visualização do novo card" />
          </div>
        </NewsContainer>
        <Pagination />
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const noticias = [];

  return {
    props: {
      noticias,
    },
  };
}
