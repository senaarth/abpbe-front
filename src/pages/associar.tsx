import React from "react";
import Head from "next/head";
import req from "superagent";

import { PageBanner } from "../components/PageBanner";
import { PageCall } from "../components/PageCall";
import { Footer } from "../components/Footer";
// import { Button } from "../components/Button";

import { PageData } from "../@types/pageData";

import {
  ContentContainer,
  Page,
  Content,
  BenefitsContainer,
  BenefitsCard,
} from "../styles/Associar";

interface AssociarProps {
  pageData: PageData;
  benefits: string[];
}

export default function Associar({
  pageData,
  benefits,
}: AssociarProps): JSX.Element {
  const colors = [
    "#E1EFFECC",
    "#D5E6F6CC",
    "#D5F0F6CC",
    "#E1EFFECC",
    "#D5F0F6CC",
    "#EBF7FECC",
  ];

  return (
    <Page>
      <Head>
        <title>Quero me associar | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_estatuto.png"
        title={pageData?.bannerTitle || "Quero me associar"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        }
        whiteSubtitle
        isTitleHighlighted
        tag={pageData?.tag || "Novidades"}
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          {pageData?.pageTitle || "Quero me associar"}
        </h1>
        <Content>
          <h1 className="playfair">
            Gostaria de se associar na ABPBE?{" "}
            <span className="highlighted">
              Se inscreva no nosso banco de talentos:
            </span>
          </h1>
          <div className="d-flex">
            <div>
              <h3>Benefícios dos Filiados</h3>
              <BenefitsContainer>
                {benefits?.map((item) => {
                  return (
                    <BenefitsCard
                      key={item}
                      style={{
                        backgroundColor:
                          colors[Math.floor(Math.random() * colors.length)],
                      }}
                    >
                      {item}
                    </BenefitsCard>
                  );
                })}
              </BenefitsContainer>
            </div>
            <iframe
              title="eb-widget-associar"
              className="eb-widget"
              id="eb-widget-membership-type-list"
              name="eb-widget-membership-type-list"
              data-auto-adjust-height="false"
              data-auto-adjust-width="true"
              style={{
                display: "block",
                margin: 0,
                padding: 0,
                border: 0,
                outline: 0,
                fontSize: "100%",
                verticalAlign: "baseline",
                background: "transparent",
                flex: 1,
              }}
              src="https://app.glueup.com/organization/4543/widget/membership-type-list/"
            />
          </div>
        </Content>
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
    `${process.env.NEXT_PUBLIC_API}/pages/associar`
  );
  const { body: benefitsData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/benefits`
  );

  const benefits = benefitsData?.reduce((acc, curr) => {
    return [...acc, curr?.name];
  }, []);

  return {
    props: {
      benefits: [
        ...benefits,
        "Descontos em cursos de parceiros;",
        "Descontos em eventos da ABPBE;",
        "Acesso à plataforma Glue Up e rede social interna e exclusiva da ABPBE…",
        "Participação em reuniões períodicas da ABPBE;",
        "Descontos em materiais oficiais da ABPBE;",
        "Possibilidade de cadastro na lista pública de filiados da ABPBE;",
        "Recebimento de carteirinha oficial da ABPBE (versão virtual e física);",
        "Colaboração para o desenvolvimento da ABPBE por meio de votação em assembleia, envio de sugestões e feedback.",
      ],
      pageData,
    },
  };
}
