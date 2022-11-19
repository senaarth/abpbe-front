import React from "react";
import Head from "next/head";
import req from "superagent";

import { Footer } from "../components/Footer";
import { PageBanner } from "../components/PageBanner";
import { PageCall } from "../components/PageCall";

import { PageData } from "../@types/pageData";

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
  pageData: PageData;
}

export default function Mitos({ mitos, pageData }: MitosProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Mitos e Verdades | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_library_1.png"
        title={pageData?.bannerTitle || "Mitos e verdades sobre PBE"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        }
        tag={pageData?.tag || "Texto"}
      />
      <ContentContainer>
        <h1 className="title">
          {pageData?.pageTitle || "Mitos e verdades sobre PBE"}
        </h1>
        <p>
          {pageData?.pageDescription ||
            "Please refer to the facts and myths below that address questions that RSU 24 is receiving regarding its Proficiency-Based Education system, as well as other facts and myths that are being brought up around the country."}
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
    `${process.env.NEXT_PUBLIC_API}/pages/mitos`
  );
  const { body } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/mythsandfacts`
  );

  const mitos = body?.reduce((acc, curr) => {
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
      pageData,
    },
  };
}
