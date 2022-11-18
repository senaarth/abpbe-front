import React from "react";
import Head from "next/head";

import { PageBanner } from "../../components/PageBanner";
import { Footer } from "../../components/Footer";
import { NoticiaCard } from "../../components/NoticiaCard";
import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";

import { api } from "../../services/api";
import { scrollIntoView } from "../../utils/scrollIntoView";

import { Page, ContentContainer, NewsContainer } from "../../styles/Noticias";

type News = {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

interface NoticiasProps {
  news: News[];
  totalPages: number;
}

export default function Noticias({
  news,
  totalPages,
}: NoticiasProps): JSX.Element {
  const [page, setPage] = React.useState(1);
  const [paginatedNews, setPaginatedNews] = React.useState(news);

  React.useEffect(() => {
    if (page === 1) return;

    // eslint-disable-next-line func-names
    (async function () {
      const { data } = await api.get("/news", {
        params: { skip: (page - 1) * 6, limit: 6 },
      });

      const updatedNews = data?.reduce((acc, curr, index) => {
        if (index > 5) return acc;

        return [
          ...acc,
          {
            // eslint-disable-next-line no-underscore-dangle
            id: curr._id,
            description: curr?.content,
            ...curr,
          },
        ];
      }, []);

      setPaginatedNews(updatedNews);
    })();
  }, [page]);

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
            {paginatedNews?.slice(0, 3)?.map((item) => {
              return <NoticiaCard {...item} />;
            })}
          </div>
          <div>
            <h2 className="title translate-highlight">Notícais gerais</h2>
            {paginatedNews?.slice(3, 6)?.map((item) => {
              return (
                <Card
                  {...item}
                  link={`/noticias/${item?.id}`}
                  targetBlank={false}
                />
              );
            })}
          </div>
        </NewsContainer>
        <Pagination
          totalPages={totalPages}
          page={page}
          onChangePage={(newPage) => {
            setPage(Number(newPage));
            scrollIntoView("main");
          }}
        />
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/news", {
    params: {
      data: {
        orderBy: "creationDate",
      },
    },
  });

  const news = data?.reduce((acc, curr, index) => {
    if (index > 5) return acc;

    return [
      ...acc,
      {
        // eslint-disable-next-line no-underscore-dangle
        id: curr._id,
        description: curr?.content,
        ...curr,
      },
    ];
  }, []);

  return {
    props: {
      news,
      totalPages: Math.round(data?.length / 6),
    },
  };
}
