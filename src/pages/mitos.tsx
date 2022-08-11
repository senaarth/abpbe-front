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
        <title>Home | ABPBE</title>
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
  const mitos = [
    {
      id: "1",
      title:
        "Colleges and Universities are not familiar with Proficiency-Based Education transcripts",
      description: `College and University admissions departments see a large variety of transcripts on a regular basis - some from 100-point traditional systems, some from 4-point traditional systems, some from PBE/Standards-Based systems, some from foreign countries, some from home-schooled children, etc. etc..  Time and al and assessment system at a school.  The good School Profile is the "de- coder" for admissions counselors to read a transcript - as long as the two clearly articulate school expectations and systems along with student performance in accordance with those expectations and systems, a student will have a fair shot at admission to their program of choice.`,
      isFact: false,
    },
    {
      id: "2",
      title: `"Highest-score" calculation settings are used to define overall proficiency levels for each performance`,
      description: `College and University admissions departments see a large variety of transcripts on a regular basis - some from 100-point traditional systems, some from 4-point traditional systems, some from PBE/Standards-Based systems, some from foreign countries, some from home-schooled children, etc. etc..  Time and al and assessment system at a school.  The good School Profile is the "de- coder" for admissions counselors to read a transcript - as long as the two clearly articulate school expectations and systems along with student performance in accordance with those expectations and systems, a student will have a fair shot at admission to their program of choice.`,
      isFact: true,
    },
    {
      id: "3",
      title:
        "Colleges and Universities are not familiar with Proficiency-Based Education transcripts",
      description: `College and University admissions departments see a large variety of transcripts on a regular basis - some from 100-point traditional systems, some from 4-point traditional systems, some from PBE/Standards-Based systems, some from foreign countries, some from home-schooled children, etc. etc..  Time and al and assessment system at a school.  The good School Profile is the "de- coder" for admissions counselors to read a transcript - as long as the two clearly articulate school expectations and systems along with student performance in accordance with those expectations and systems, a student will have a fair shot at admission to their program of choice.`,
      isFact: true,
    },
  ];

  return {
    props: {
      mitos,
    },
  };
}
