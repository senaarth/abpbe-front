import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import req from "superagent";

import { PageBanner } from "../components/PageBanner";
import { PageCall } from "../components/PageCall";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { EventCard } from "../components/EventCard";

import { PageData } from "../@types/pageData";

import {
  ContentContainer,
  EventsContainer,
  LivesContainer,
  Page,
} from "../styles/Eventos";

type Event = {
  id: string;
  name: string;
  date: string;
  value: number;
  link: string;
};

type Live = {
  id: string;
  name: string;
  link: string;
  thumb: string;
};

interface EventosProps {
  events: Event[];
  lives: Live[];
  pageData: PageData;
}

export default function Eventos({
  events,
  lives,
  pageData,
}: EventosProps): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Eventos | ABPBE</title>
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
        {events?.length ? (
          <>
            <h2 className="playfair title translate-highlight">
              Eventos e congressos
            </h2>
            <EventsContainer>
              {events?.map((item) => {
                return (
                  <EventCard
                    key={item?.id}
                    title={item?.name}
                    value={item?.value}
                    link={item?.link}
                    date={item?.date}
                  />
                );
              })}
            </EventsContainer>
          </>
        ) : null}
        {lives?.length ? (
          <>
            <h2 className="playfair title translate-highlight">Lives</h2>
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
            <div>
              <Button
                type="button"
                text="Ver todas as lives"
                variant="outlined"
                onClick={() => router.push("/lives")}
                customStyles={{
                  marginLeft: "auto",
                  borderRadius: 50,
                  overflow: "hidden",
                }}
              />
            </div>
          </>
        ) : null}
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
  const { body: eventsData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/events`
  );
  const { body: livesData } = await req
    .get(`${process.env.NEXT_PUBLIC_API}/lives`)
    .send({ limit: 3 });

  const events = eventsData?.reduce((acc, curr) => {
    return [
      ...acc,
      {
        // eslint-disable-next-line no-underscore-dangle
        id: curr._id,
        value: curr?.price,
        ...curr,
      },
    ];
  }, []);

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
      events,
      lives,
      pageData,
    },
  };
}
