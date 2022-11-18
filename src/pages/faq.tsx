import React from "react";
import Head from "next/head";

import { AccordionComponent } from "../components/Accordion";
import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";

import { Page, ContentContainer } from "../styles/Faq";
import { api } from "../services/api";

type Question = {
  summary: string;
  details: string;
};

interface FaqProps {
  questions: Question[];
}

export default function Faq({ questions }: FaqProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>FAQ | ABPBE</title>
      </Head>
      <PageBanner
        img=""
        title="Perguntas frequentes"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
      />
      <ContentContainer>
        <h1 className="title translate-highlight">Perguntas Frequentes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </p>
        <AccordionComponent questions={questions} />
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/questions");

  const questions = data?.reduce((acc, curr) => {
    return [
      ...acc,
      {
        // eslint-disable-next-line no-underscore-dangle
        id: curr?._id,
        summary: curr?.question,
        details: curr?.reply,
      },
    ];
  }, []);

  return {
    props: {
      questions,
    },
  };
}
