import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

import {
  ContentContainer,
  EventsContainer,
  LivesContainer,
  Page,
} from "../styles/Eventos";
import { EventCard } from "../components/EventCard";

export default function Eventos(): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Eventos | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_library_1.png"
        title="Eventos, congressos e lives"
        subtitle="Aqui você encontrará conteúdos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, como eventos, congressos e lives nacionais e internacionais."
        whiteSubtitle
        tag="Novidades"
      />
      <ContentContainer>
        <h2 className="playfair title translate-highlight">
          Eventos e congressos
        </h2>
        <EventsContainer>
          <EventCard title="Em breve!" date="Abril de 2022" value="R$ 75.00" />
          <EventCard title="Em breve!" date="Abril de 2022" value="R$ 75.00" />
          <EventCard title="Em breve!" date="Abril de 2022" value="R$ 75.00" />
        </EventsContainer>
        <h2 className="playfair title translate-highlight">Lives</h2>
        <LivesContainer>
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
          <Card
            subtitle="Entrevista com Frederick Crews: A trajetória de um ex-Freudiano | Psicolosofia"
            linkCall="ASSISTIR NO YOUTUBE"
          />
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
      </ContentContainer>
      <Footer />
    </Page>
  );
}
