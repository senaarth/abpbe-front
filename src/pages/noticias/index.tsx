import React from "react";
import Head from "next/head";
import req from "superagent";

import { PageBanner } from "../../components/PageBanner";
import { PageCall } from "../../components/PageCall";
import { Footer } from "../../components/Footer";
import { NoticiaCard } from "../../components/NoticiaCard";
import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";

import { scrollIntoView } from "../../utils/scrollIntoView";
import { PageData } from "../../@types/pageData";

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
  pageData: PageData;
}

export default function Noticias({
  news,
  totalPages,
  pageData,
}: NoticiasProps): JSX.Element {
  const [page, setPage] = React.useState(1);
  const [paginatedNews, setPaginatedNews] = React.useState(news);

  React.useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const { body } = await req
        .get(`${process.env.NEXT_PUBLIC_API}/news`)
        .send({ limit: 6 });

      const updatedNews = body?.reduce((acc, curr) => {
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
        title={pageData?.bannerTitle || "Notícias da ABPBE"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        }
        tag={pageData?.tag || "Novidades"}
      />
      <ContentContainer>
        <NewsContainer>
          <div>
            <h2 className="title translate-highlight">
              {pageData?.pageTitle || "Últimas notícias de PBE"}
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
        {pageData?.pageCall && (
          <PageCall
            playfairFont
            title={
              pageData?.pageCall ||
              "Nos ajude a aproximar a Psicologia do fazer científico."
            }
          />
        )}
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { body: pageData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/pages/noticias`
  );
  const { body: newsData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/news`
  );

  const news = newsData?.reduce((acc, curr, index) => {
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
      pageData,
      news,
      totalPages: Math.round(newsData?.length / 6),
    },
  };
}
