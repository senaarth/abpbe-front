import React from "react";
import Head from "next/head";
import req from "superagent";

import { PageBanner } from "../components/PageBanner";
import { PageCall } from "../components/PageCall";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import { PageData } from "../@types/pageData";

import { ContentContainer, LivesContainer, Page } from "../styles/Eventos";

type Live = {
  id: string;
  name: string;
  link: string;
  thumb: string;
};

interface LivesProps {
  lives: Live[];
  pageData: PageData;
}

export default function Lives({ lives, pageData }: LivesProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Lives | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_library_1.png"
        title={pageData?.bannerTitle || "Eventos, congressos e lives"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Aqui você encontrará conteúdos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, como eventos, congressos e lives nacionais e internacionais."
        }
        whiteSubtitle
        tag={pageData?.tag || "Novidades"}
      />
      <ContentContainer>
        <h2 className="playfair title translate-highlight">
          {pageData?.pageTitle || "Lives"}
        </h2>
        <LivesContainer>
          {lives?.map((item) => {
            return (
              <Card
                key={item?.id}
                subtitle={item?.name}
                linkCall="ASSISTIR NO YOUTUBE"
                image={item?.thumb || null}
                link={item?.link}
              />
            );
          })}
        </LivesContainer>
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
    `${process.env.NEXT_PUBLIC_API}/pages/eventos`
  );
  const { body: livesData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/lives`
  );

  const lives = livesData?.reduce((acc, curr) => {
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
      lives,
      pageData,
    },
  };
}
