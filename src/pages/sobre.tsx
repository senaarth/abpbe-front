import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { PageCall } from "../components/PageCall";

import { api } from "../services/api";

import { Page, ContentContainer, PeopleContainer } from "../styles/Sobre";

type Person = {
  id: string;
  name: string;
  photo: string;
  socialMedia: string;
};

interface SobreProps {
  people: Person[];
}

export default function Sobre({ people }: SobreProps): JSX.Element {
  const router = useRouter();

  return (
    <Page>
      <Head>
        <title>Quem somos | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_quemsomos.png"
        title="Quem somos"
        subtitle="Breve histórico da primeira associação brasileira de psicologia baseada em evidêcncias."
        tag="Sobre nós"
      />
      <ContentContainer>
        <h2 className="playfair title translate-highlight">Quem somos</h2>
        <p>
          A Associação Brasileira de Psicologia Baseada em Evidências (ABPBE) é
          uma organização sem fins lucrativos, fundada em 31 de janeiro de 2022
          por estudantes, pesquisadores e profissionais insatisfeitos com o
          cenário atual da Psicologia no Brasil, especialmente no que concerne à
          formação científica deficitária e ao uso de práticas sem fundamentação
          empírica predominantes na área.
          <br />
          <br />A ABPBE surgiu como um espaço para facilitar, disseminar e
          incentivar a adoção de teorias e práticas psicológicas baseadas em
          evidências, bem como o combate às pseudociências, fraudes científicas,
          pesquisas antiéticas, desinformações na Psicologia e mais. Tem como
          fundadores os seguintes membros:
        </p>
        <h2 className="playfair title translate-highlight">
          Associados da ABPBE
        </h2>
        <PeopleContainer>
          {people?.map((item) => {
            // return <img src={item.photo} alt={`Associado(a) ${item.photo}`} />
            return (
              <a
                href={item?.socialMedia}
                target="_blank"
                rel="noreferrer"
                className="image-wrapper"
                key={item?.id}
              >
                <Image
                  layout="fill"
                  alt={`Foto do(a) associado(a) ${item.name}`}
                  placeholder="blur"
                  blurDataURL="/images/card_placeholder.png"
                  src={
                    !!item.photo && item.photo !== ""
                      ? item?.photo
                      : "/images/card_placeholder.png"
                  }
                />
              </a>
            );
          })}
        </PeopleContainer>
      </ContentContainer>
      <PageCall
        title="Gostaria de se tornar um membro associado da ABPBE também?"
        subtitle="Se increva clicando no botão abaixo"
        btnTxt="SEJA UM ASSOCIADO (A)"
        onClick={() => router.push("inscricao")}
      />
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/associates");

  const people = data?.reduce((acc, curr) => {
    return [
      ...acc,
      {
        _id: curr?.id,
        ...curr,
      },
    ];
  }, []);

  return {
    props: {
      people: people || null,
    },
  };
}
