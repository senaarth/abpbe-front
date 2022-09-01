import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageBanner } from "../components/PageBanner";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

import { scrollIntoView } from "../utils/scrollIntoView";

import {
  Page,
  TextsContainer,
  ContentContainer,
  Main,
  Navigation,
} from "../styles/Revista";

type Article = {
  id: string;
  title: string;
  date: string;
  author: string;
  theme: string;
  slug: string;
};

interface RevistaProps {
  articles: Article[];
}

export default function Revista({ articles }: RevistaProps): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Revista Indício | ABPBE</title>
      </Head>
      <PageBanner
        tag="Revista"
        img="/images/bg_analytics.png"
        title="Revista Indício"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
      />
      <ContentContainer>
        <h2 className="title translate-highlight">Revista Indício</h2>
        <Main>
          <div>
            <Navigation>
              <div>
                <p className="playfair">Navegação rápida</p>
                <img
                  src="/images/chevron_down_dark.png"
                  alt="Seta para baixo"
                />
              </div>
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollIntoView("#como-funciona")}
                  >
                    Como funciona a revisão dos textos ?
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollIntoView("#como-contribuir")}
                  >
                    Como posso contribuir com a revisão voluntária?
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollIntoView("#textos")}
                  >
                    Textos publicados
                  </button>
                </li>
              </ul>
            </Navigation>
            <div id="como-funciona">
              <h3 style={{ marginBottom: "1.5rem" }}>
                Como funciona a revisão dos textos ?
              </h3>
              <p>
                Temos como objetivo oferecer conteúdo da mais alta qualidade
                para nossos(as) leitores(as). Deste modo, para contribuir ao
                alcance desse ideal, a Revista Indício adota um sistema de
                revisão cega por pares.
                <br />
                <br />
                Cada artigo, antes de ser publicado, será avaliado por pelo
                menos dois revisores(as) que poderão rejeitá-lo, aceitá-lo com
                modificações ou aceitá-lo sem modificações. Os revisores não
                terão conhecimento sobre nenhum dado acerca dos autores.
              </p>
            </div>
          </div>
          <h3 id="como-contribuir">
            Como posso contribuir com a revisão voluntária?
          </h3>
          <p>
            Temos como objetivo oferecer conteúdo da mais alta qualidade para
            nossos leitores. Deste modo, para contribuir ao alcance desse ideal,
            a Revista Indício adota um sistema de revisão cega por pares. Cada
            artigo, antes de ser publicado, será avaliado por pelo menos dois
            revisores que poderão rejeitá-lo, aceitá-lo com modificações ou
            aceitá-lo sem modificações. Os revisores não terão conhecimento
            sobre nenhum dado acerca dos autores.
          </p>
          <Button
            type="button"
            text="QUERO ME CANDIDATAR"
            variant="primary"
            onClick={() => router.push("revisor")}
          />
        </Main>
        <h3 id="textos" className="playfair">
          Textos publicados
        </h3>
        <TextsContainer>
          {articles.map((item) => {
            if (item.slug === "slug-teste") {
              return (
                <div key={item.id}>
                  <h5 className="playfair">{item.title}</h5>
                  <p>
                    {item.date} | {item.author} | {item.theme}
                  </p>
                </div>
              );
            }

            return (
              <a key={item.id} href={`/revista/${item.slug}`}>
                <h5 className="playfair">{item.title}</h5>
                <p>
                  {item.date} | {item.author} | {item.theme}
                </p>
              </a>
            );
          })}
        </TextsContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      articles: [
        {
          id: "1",
          slug: "slug-teste",
          title: "Em breve!",
          date: "Data",
          author: "Autora",
          theme: "Tema",
        },
        {
          id: "2",
          slug: "slug-teste",
          title: "Em breve!",
          date: "Data",
          author: "Autora",
          theme: "Tema",
        },
        {
          id: "3",
          slug: "slug-teste",
          title: "Em breve!",
          date: "Data",
          author: "Autora",
          theme: "Tema",
        },
      ],
    },
  };
}
