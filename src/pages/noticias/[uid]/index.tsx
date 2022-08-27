import React from "react";
import Image from "next/image";
import Head from "next/head";

import { PageBanner } from "../../../components/PageBanner";
import { Footer } from "../../../components/Footer";

import {
  Page,
  ContentContainer,
  ReviwerContainer,
  RelatedContainer,
} from "../../../styles/Noticia";
import { Card } from "../../../components/Card";

type Related = {
  slug: string;
  title: string;
};

type Revisor = {
  picture: string;
  name: string;
  title: string;
};

type NoticiaType = {
  uid: string;
  title: string;
  publicationDate: string;
  content: string;
  reviwer: Revisor;
};

interface NoticiaProps {
  noticia: NoticiaType;
  relatedArticles: Related[];
}

export default function Noticia({
  noticia,
  relatedArticles,
}: NoticiaProps): JSX.Element {
  const [imageError, setImageError] = React.useState(false);

  return (
    <Page>
      <Head>
        <title>{noticia?.title || "Notícia"} | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_analytics.png"
        title="Notícias de ABPBE"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
      />
      <ContentContainer>
        <h1 className="title">Últimas notícias da ABPBE</h1>
        <h2 className="playfair">{noticia?.title}</h2>
        <h3 className="playfair">Publicado em {noticia?.publicationDate}</h3>
        <p>{noticia?.content}</p>
        <ReviwerContainer>
          <div className="image-wrapper">
            <Image
              layout="fill"
              alt={`Foto do(a) revisor(a) ${noticia?.reviwer?.name}`}
              placeholder="blur"
              blurDataURL="/images/card_placeholder.png"
              src={
                !!noticia?.reviwer?.picture &&
                noticia?.reviwer?.picture !== "" &&
                !imageError
                  ? noticia?.reviwer?.picture
                  : "/images/card_placeholder.png"
              }
              onError={() => setImageError(true)}
            />
          </div>
          <div className="content">
            <h4 className="playfair">REVISOR</h4>
            <h5 className="playfair">{noticia?.reviwer?.name}</h5>
            <p>{noticia?.reviwer?.title}</p>
          </div>
        </ReviwerContainer>
        <RelatedContainer>
          <h2 className="title">Relacionados</h2>
          <div>
            {relatedArticles?.map((item) => {
              return (
                <Card
                  key={item.slug}
                  title={item.title}
                  targetBlank={false}
                  link={`/noticias/${item.slug}`}
                />
              );
            })}
          </div>
        </RelatedContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticPaths = async () => {
  // const client = createClient({ previewData });
  // const news = await client.getAllByType("new");

  const paths = ["/noticias/noticia-teste"];
  // news.map((project) => {
  //     return {
  //         params: {
  //             slug: project?.uid,
  //         },
  //     };
  // });

  return {
    paths: paths || [],
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  // const client = createClient({ previewData });

  const { uid } = params;
  const noticia = {
    uid,
    title: "Notícia de Teste",
    publicationDate: "2022/02/02",
    content: `No dia 31 de janeiro de 2022 foi fundada a Associação Brasileira de Psicologia Baseada em Evidências (ABPBE). A ABPBE é uma organização sem fins lucrativos e surgiu com o intuito de propiciar um espaço que reúna a comunidade interessada em Psicologia Baseada em Evidências, bem como incentivar o avanço da mesma no Brasil. Tem como alguns de seus objetivos a realização de estudos e pesquisas relacionados à Psicologia Baseada em Evidências; o combate às pseudociências, fraudes científicas, pesquisas antiéticas e desinformações na área de psicologia; e a promoção de atividades e disseminação de informações que contribuam na formação acadêmica e profissional sobre Psicologia Baseada em Evidências. Esperamos que esse possa ser um novo capítulo na trajetória da Psicologia brasileira, e damos as boas-vindas aos nossos futuros associados!`,
    reviwer: {
      picture: "/images/revisora.png",
      name: "Clarice Meideles",
      title: "Graduanda em Psicologia pela FUMEC e pesquisadora na UFMG.",
    },
  };

  const relatedArticles = [
    {
      slug: "abpbe-colaborador",
      title:
        "Colaborador da ABPBE esteve na audiência pública do Senado Federal se posicionando contra a Constelação Familiar",
    },
    {
      slug: "entrevista-participacao",
      title: "ABPBE participou de uma entrevista",
    },
    {
      slug: "galeria-de-artigos",
      title: "ABPBE e sua galeria de artigos",
    },
  ];

  return {
    props: {
      noticia: noticia || null,
      relatedArticles: relatedArticles || [],
    },
  };
}
