import React from "react";
import Head from "next/head";
import req from "superagent";

import { PageBanner } from "../../components/PageBanner";
import { Footer } from "../../components/Footer";
import { PageCall } from "../../components/PageCall";

import { PageData } from "../../@types/pageData";

import { ContentContainer, Page } from "../../styles/Galeria";

interface GaleriaProps {
  pageData: PageData;
}

export default function Galeria({ pageData }: GaleriaProps): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Galeria | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_library_2.png"
        title={pageData?.bannerTitle || "Galeria de artigos em breve"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Postaremos diversos artigos científicos relevantes para a Psicologia e áreas afins."
        }
        whiteSubtitle
        isTitleHighlighted
        tag={pageData?.tag || "Artigos"}
        inputPlaceholder="Digite o seu melhor email para receber essa notificação"
        onSubmit={(email) =>
          req.post(`${process.env.NEXT_PUBLIC_API}newsletter`).send({ email })
        }
        onSuccess="Seu contato foi cadastrado e assim que postarmos os artigos você receberá uma notificação por email."
        onError="Infelizmente houve um erro ao cadastrar o seu contato, favor tentar novamente mais tarde."
        inputSubmitTxt="Me avise"
      />
      <ContentContainer>
        <h1 className="title">
          {pageData?.pageTitle || "Artigos revisados pela ABPBE"}
        </h1>
        <p>
          {pageData?.pageDescription || (
            <>
              Sabemos que nem todo artigo já publicado - mesmo que em periódicos
              de alto impacto - é realmente de qualidade. Ao mesmo tempo, para
              colocarmos em prática uma Psicologia Baseada em Evidências, é
              importante que tenhamos como referência artigos capazes de
              apresentar boas provas sobre o tema que investigam e a tese que
              defendem.
              <br />
              <br />A discriminação do nível de qualidade de um trabalho
              científico é uma tarefa complexa, que requer adaptações e
              procedimentos diferentes para cada tipo de delineamento, tema de
              investigação e objetivo de pesquisa. De modo a facilitar o acesso
              a materiais de referência e da mais alta qualidade, foi
              desenvolvido o projeto da Galeria de Artigos da ABPBE. A nossa
              Galeria é um espaço destinado à exposição exclusiva de artigos de
              grande excelência relevantes para a Psicologia e áreas afins. Em
              breve publicaremos os artigos revisados com busca simples e
              avançada.
            </>
          )}
        </p>
      </ContentContainer>
      <PageCall
        boldTitle={pageData?.pageCall ? null : "Em breve"}
        regularTitle={pageData?.pageCall ? null : " postaremos os artigos!"}
        title={pageData?.pageCall}
        subtitle={
          pageData?.pageCallSubtitle ||
          "Gostaria de receber uma notificação por email?"
        }
        inputPlaceholder="Digite o seu melhor email para receber essa notificação"
        onSubmit={(email) =>
          req.post(`${process.env.NEXT_PUBLIC_API}newsletter`).send({ email })
        }
        onSuccess="Seu contato foi cadastrado e assim que postarmos os artigos você receberá uma notificação por email."
        onError="Infelizmente houve um erro ao cadastrar o seu contato, favor tentar novamente mais tarde."
        inputSubmitTxt="Me avise"
      />
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { body: pageData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/pages/galeria`
  );

  return {
    props: {
      pageData: pageData || null,
    },
  };
}
