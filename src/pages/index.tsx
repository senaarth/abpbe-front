import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageBanner } from "../components/PageBanner";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PageCall } from "../components/PageCall";
import { Footer } from "../components/Footer";

import {
  Page,
  ContentContainer,
  ButtonsContainer,
  About,
  NewsContainer,
  NewsList,
} from "../styles/Home";

type News = {
  id: string;
  title: string;
  slug: string;
  image: string;
};

interface HomeProps {
  news: News[];
}

export default function Home({ news }: HomeProps): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Home | ABPBE</title>
      </Head>
      <PageBanner
        img=""
        title="Associação Brasileira de Psicologia Baseada em Evidências"
        subtitle="Ciência e Responsabilidade Social"
        socialMedia
        scrollDownCall
      />
      <ContentContainer>
        <About>
          <h2 className="title">Quem somos nós</h2>
          <p>
            A Associação Brasileira de Psicologia Baseada em Evidências (ABPBE)
            é uma organização sem fins lucrativos, fundada em 31 de janeiro de
            2022 por estudantes, pesquisadores e profissionais insatisfeitos com
            o cenário atual da Psicologia no Brasil, especialmente no que
            concerne à formação científica deficitária e ao uso de práticas sem
            fundamentação empírica predominantes na área.
            <br />
            <br />A ABPBE surgiu como um espaço para facilitar, disseminar e
            incentivar a adoção de teorias e práticas psicológicas baseadas em
            evidências, bem como o combate às pseudociências, fraudes
            científicas, pesquisas antiéticas, desinformações na Psicologia e
            mais. Tem como fundadores os seguintes membros.
          </p>
          <ButtonsContainer>
            <Button
              type="button"
              variant="outlined"
              text="CONFIRA O NOSSO MANIFESTO"
              onClick={() => router.push("/manifesto")}
            />
            <Button
              type="button"
              variant="primary"
              text="SEJA UM ASSOCIADO"
              onClick={() => router.push("/faca-parte")}
            />
          </ButtonsContainer>
        </About>
        <NewsContainer>
          <h2 className="title translate-highlight">
            Últimas notícias da ABPBE
          </h2>
          <NewsList>
            {news?.map((item) => {
              return (
                <Card
                  key={item.id}
                  link={`/noticias/${item.slug}`}
                  targetBlank={false}
                  {...item}
                />
              );
            })}
          </NewsList>
          <Button
            type="button"
            variant="outlined"
            text="VER TODAS AS NOTÍCIAS"
            onClick={() => router.push("/noticias")}
          />
        </NewsContainer>
      </ContentContainer>
      <PageCall
        playfairFont
        title="Nos ajude a aproximar a Psicologia do fazer científico."
      />
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const news = [
    {
      id: "1",
      image: "",
      title: "ABPBE participou da Recepção de Calouros da UFMG",
      slug: "recepcao-calouros-ufmg",
    },
    {
      id: "2",
      image: "",
      title:
        "Colaborador da ABPBE esteve na audiência pública do Senado Federal se posicionando contra a Constelação Familiar",
      slug: "colaborador-audiencia-publica-senado",
    },
    {
      id: "3",
      image: "/images/bg_librar.png",
      title: "ABPBE participou de uma entrevista no portal Comporte-se",
      slug: "abpbe-entrevista-portal-comporte-se",
    },
  ];

  return {
    props: {
      news,
    },
  };
}
