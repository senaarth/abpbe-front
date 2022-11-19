import React from "react";
import Head from "next/head";
import req from "superagent";

import { AccordionComponent } from "../components/Accordion";
import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";

import { PageData } from "../@types/pageData";

import { Page, ContentContainer } from "../styles/Faq";

type Question = {
  summary: string;
  details: string;
};

interface FaqProps {
  questions: Question[];
  pageData: PageData;
}

export default function Faq({ questions, pageData }: FaqProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>FAQ | ABPBE</title>
      </Head>
      <PageBanner
        img=""
        title={pageData?.bannerTitle || "Perguntas frequentes"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        }
      />
      <ContentContainer>
        <h1 className="title translate-highlight">
          {pageData?.pageTitle || "Perguntas Frequentes"}
        </h1>
        <p>
          {pageData?.pageDescription ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
        </p>
        <AccordionComponent questions={questions} />
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { body: pageData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/pages/faq`
  );
  const { body: faqData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/questions`
  );

  const questions = faqData?.reduce((acc, curr) => {
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
      pageData,
    },
  };
}
