import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";

import { ContentContainer, Page } from "../styles/Parceiros";
import { PageCall } from "../components/PageCall";

export default function Parceiros(): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Parceiros | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_parceiros.png"
        title="Parceiros"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        isTitleHighlighted
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          Parceiros da ABPBE
        </h1>
        <p>
          A ABPBE busca formar alianças estratégicas com organizações nacionais
          e internacionais. Através delas, almejamos um crescimento
          institucional mútuo com o objetivo de incentivar a promoção e adoção
          da Psicologia Baseada em Evidências. Em nossas alianças podemos fazer
          acordos de divulgação, financiamento, produção de pesquisa, confecção
          de artigos e livros, realização de eventos, simpósios e cursos,
          concessão de direitos autorais e de imagem, etc.
          <br />
          <br />
          Como possíveis organizações parceiras incluímos associações, grupos de
          estudo e de pesquisa, movimentos estudantis, cursos de graduação e
          pós-graduação, portais de divulgação e afins.
          <br />
          <br />
          Se você é representante de alguma organização e deseja integrar o
          nosso quadro, entre em contato conosco. A única condição de caráter
          inegociável para formação de uma aliança é que a organização em
          questão esteja alinhada com os ideais da Psicologia Baseada em
          Evidências, concordando com os nossos objetivos enquanto Associação
          previstos no estatuto.
        </p>
        <div>
          <img
            src="/images/movimento_estudantil.png"
            alt="Movimiento Estudiantil Peruano por una Psicología Científica (MEPPCi)"
          />
          <div>
            <h2>
              Movimiento Estudiantil Peruano por una Psicología Científica
              (MEPPCi)
            </h2>
            <p>
              O Movimiento Estudiantil Peruano por una Psicología Científica
              (MEPPCi), é uma organização de estudantes universitários(as) que
              buscam o desenvolvimento de uma Psicologia científica no Perú
              mediante o estudo, a discussão e a divulgação de correntes e
              intervenções psicológicas que têm demonstrado evidência empírica.
              Dentre seus objetivos está: defender uma mudança nos currículos
              das universidades para conteúdos baseados em boas evidências;
              inspirar diversos estudantes e instituições para o estudo e
              aprofundamento de uma psicologia científica; e promover uma
              prática psicológica responsável e ética para evitar a adoção de
              práticas e teorias pseudocientíficas, bem como promover o
              bem-estar da população.
            </p>
          </div>
        </div>
      </ContentContainer>
      <PageCall
        title="Gostaria de se tornar um(a) parceiro(a)? "
        subtitle="Se increva clicando no botão abaixo"
        btnTxt="QUERO ME INSCREVER"
        onClick={() => router.push("inscricao")}
      />
      <Footer />
    </Page>
  );
}
