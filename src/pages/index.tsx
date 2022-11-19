import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import req from "superagent";

import { PageBanner } from "../components/PageBanner";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PageCall } from "../components/PageCall";
import { Footer } from "../components/Footer";

import { PageData } from "../@types/pageData";

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
  image: string;
};

interface HomeProps {
  news: News[];
  pageData: PageData;
}

export default function Home({ news, pageData }: HomeProps): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Home | ABPBE</title>
      </Head>
      <PageBanner
        img=""
        title={
          pageData?.bannerTitle ||
          "Associação Brasileira de Psicologia Baseada em Evidências"
        }
        subtitle={
          pageData?.bannerSubtitle || "Ciência e Responsabilidade Social"
        }
        tag={pageData?.tag || null}
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
                  link={`/noticias/${item.id}`}
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
      {pageData?.pageCall && (
        <PageCall
          playfairFont
          title={
            pageData?.pageCall ||
            "Nos ajude a aproximar a Psicologia do fazer científico."
          }
        />
      )}
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { body: pageData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/pages/home`
  );
  const { body: newsData } = await req
    .get(`${process.env.NEXT_PUBLIC_API}/news`)
    .send({ limit: 3 });

  const news = newsData?.reduce((acc, curr, index) => {
    if (index > 2) return acc;

    return [
      ...acc,
      {
        // eslint-disable-next-line no-underscore-dangle
        id: curr._id,
        ...curr,
      },
    ];
  }, []);

  return {
    props: {
      news,
      pageData,
    },
  };
}
