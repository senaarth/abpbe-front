import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

import { PageBanner } from "../../../components/PageBanner";
import { Footer } from "../../../components/Footer";

import { api } from "../../../services/api";
import { scrollIntoView } from "../../../utils/scrollIntoView";

import {
  Page,
  ContentContainer,
  ReviwerContainer,
  // RelatedContainer,
} from "../../../styles/Noticia";
// import { Card } from "../../../components/Card";

// type Related = {
//   slug: string;
//   title: string;
// };

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
  // relatedArticles: Related[];
}

export default function Noticia({
  noticia,
}: // relatedArticles,
NoticiaProps): JSX.Element {
  const [imageError, setImageError] = React.useState(false);
  const { isFallback } = useRouter();

  if (isFallback)
    return (
      <Page>
        <Head>
          <title>Notícia | ABPBE</title>
        </Head>
        <PageBanner
          img="/images/bg_analytics.png"
          title="Notícias de ABPBE"
          subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        />
        <Footer />
      </Page>
    );

  React.useEffect(() => {
    scrollIntoView("article");
  }, []);

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
        {noticia?.publicationDate ? (
          <h3 className="playfair">
            Publicado em{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(noticia?.publicationDate) || new Date())}
          </h3>
        ) : null}
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: noticia?.content }} />
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
            {/* <p>{noticia?.reviwer?.title}</p> */}
          </div>
        </ReviwerContainer>
        {/* <RelatedContainer>
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
        </RelatedContainer> */}
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticPaths = async () => {
  const { data } = await api.get("/news");

  const paths = data?.reduce((acc, curr) => {
    return [
      ...acc,
      // eslint-disable-next-line no-underscore-dangle
      `/noticias/${curr?._id}`,
    ];
  }, []);

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
  const { data } = await api.get(`/news/${uid}`);

  const noticia = {
    uid,
    title: data?.title,
    publicationDate: data?.creationDate || null,
    content: data?.content,
    reviwer: {
      picture: "/images/card_placeholder.png",
      name: data?.author,
      title: "Graduanda em Psicologia pela FUMEC e pesquisadora na UFMG.",
    },
  };

  // const relatedArticles = [
  //   {
  //     slug: "abpbe-colaborador",
  //     title:
  //       "Colaborador da ABPBE esteve na audiência pública do Senado Federal se posicionando contra a Constelação Familiar",
  //   },
  //   {
  //     slug: "entrevista-participacao",
  //     title: "ABPBE participou de uma entrevista",
  //   },
  //   {
  //     slug: "galeria-de-artigos",
  //     title: "ABPBE e sua galeria de artigos",
  //   },
  // ];

  return {
    props: {
      noticia: noticia || null,
      // relatedArticles: relatedArticles || [],
    },
  };
}
