import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import { api } from "../services/api";

import { ContentContainer, LivesContainer, Page } from "../styles/Eventos";

type Live = {
  name: string;
  link: string;
  thumb: string;
};

interface LivesProps {
  lives: Live[];
}

export default function Lives({ lives }: LivesProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Lives | ABPBE</title>
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
          {lives?.map((item) => {
            return (
              <Card
                subtitle={item?.name}
                linkCall="ASSISTIR NO YOUTUBE"
                image={item?.thumb || null}
                link={item?.link}
              />
            );
          })}
        </LivesContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/lives");

  const lives = data?.reduce((acc, curr) => {
    return [
      ...acc,
      {
        // eslint-disable-next-line no-underscore-dangle
        id: curr?._id,
        ...curr,
      },
    ];
  }, []);

  return {
    props: {
      lives,
    },
  };
}
