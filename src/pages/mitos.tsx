import React from "react";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { PageBanner } from "../components/PageBanner";

import {
  ContentContainer,
  Page,
  MithsContainer,
  MithCard,
} from "../styles/Mitos";
import { api } from "../services/api";

type Mito = {
  id: string;
  title: string;
  isFact: boolean;
  description: string;
};

interface MitosProps {
  mitos: Mito[];
}

export default function Mitos({ mitos }: MitosProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Mitos e Verdades | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_library_1.png"
        title="Mitos e verdades sobre PBE"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        tag="Texto"
      />
      <ContentContainer>
        <h1 className="title">Mitos e verdades sobre PBE</h1>
        <p>
          Please refer to the facts and myths below that address questions that
          RSU 24 is receiving regarding its Proficiency-Based Education system,
          as well as other facts and myths that are being brought up around the
          country.
        </p>
        <MithsContainer>
          {mitos?.map((item) => {
            return (
              <MithCard key={item.id}>
                <h2 className="playfair">{item.title}</h2>
                {item.isFact ? (
                  <b className="is-fact source-sans">
                    <img
                      src="/images/fact.png"
                      alt="ícone de fato verdadeiro"
                    />
                    VERDADE!
                  </b>
                ) : (
                  <b className="source-sans">
                    <img
                      src="/images/mith.png"
                      alt="ícone de x indicando falsidade na afirmação"
                    />
                    MITO!
                  </b>
                )}
                <p>{item.description}</p>
              </MithCard>
            );
          })}
        </MithsContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/mythsandfacts");

  const mitos = data?.reduce((acc, curr) => {
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
      mitos,
    },
  };
}
