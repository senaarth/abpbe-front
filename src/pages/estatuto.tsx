import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";

import { ContentContainer, Page, Button, Content } from "../styles/Estatuto";

export default function Estatuto(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Estatuto e transparência | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_estatuto.png"
        title="Estatuto e transparência"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        isTitleHighlighted
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          Estatuto e transparência
        </h1>
        <Content>
          <h1 className="main-title">
            ESTATUTO SOCIAL DA ASSOCIAÇÃO BRASILEIRA DE PSICOLOGIA BASEADA EM
            EVIDÊNCIAS
          </h1>
          <h1 className="content-title">TÍTULO I - DA ESTRUTURA FUNDAMENTAL</h1>
          <h2 className="content-subtitle">
            CAPÍTULO I - Da natureza, denominação, sede e duração
          </h2>
          <p className="content-text">
            Art. 1º. A Associação Brasileira de Psicologia Baseada em
            Evidências, cujo nome fantasia é “ABPBE” é uma pessoa jurídica de
            direito privado, constituída sob a forma de associação sem fins
            lucrativos e de finalidade educacional e científica, regida por este
            Estatuto Social, pelo Regimento Interno e pelas disposições
            normativas aplicáveis.
          </p>
          <p className="content-text">
            §1º. A ABPBE tem sua sede localizada à Rua Rio Grande do Norte,
            1435, sala 708, bairro Funcionários, Belo Horizonte/MG, CEP
            30.130-138.
          </p>
          <p className="content-text">
            §2º. As atividades da ABPBE caracterizam-se pela natureza
            educacional e científica e não possuem qualquer influência
            político-partidária e/ou religiosa.
          </p>
          <p className="content-text">
            §3º. A organização e funcionamento da ABPBE são estabelecidos por
            meio de Regimento Interno, elaborado pela Diretoria Executiva e
            aprovado pela Assembleia Geral, observado o disposto neste Estatuto
            Social, tendo como base o Código de Civil de 2002 (Lei 10.406/02) e
            as demais legislações pertinentes à finalidade desta entidade.
          </p>
          <p className="content-text">
            Art. 2º. O prazo de duração da ABPBE é indeterminado.
          </p>
        </Content>
        <Button>
          Ver mais
          <img
            src="/images/arrow_down_black.svg"
            alt="Seta apontando para baixo"
          />
        </Button>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
