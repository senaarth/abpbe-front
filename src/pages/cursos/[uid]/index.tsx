import React from "react";
import { Button } from "../../../components/Button";
import { CursoAccordion } from "../../../components/CursoAccordion";

import { Footer } from "../../../components/Footer";

import {
  LotesContainer,
  Main,
  Lote,
  Navigation,
  GeneralInfo,
  CourseDescription,
  Container,
  TagsContainer,
  BenefitsContainer,
} from "../../../styles/Curso";

import { scrollIntoView } from "../../../utils/scrollIntoView";

type CourseBatch = {
  name: string;
  limitDate: string;
};

type Question = {
  summary: string;
  details: string;
};

type CursoType = {
  uid: string;
  title: string;
  edition: string;
  description: string;
  area: string;
  duration: string;
  chapters: string;
  level: string;
  language: string;
  tags: string[];
  benefits: string[];
  ticketsBatches: CourseBatch[];
  symplaLink: string;
  faq: Question[];
};

interface CursoProps {
  curso: CursoType;
}

export default function Curso({ curso }: CursoProps): JSX.Element {
  return (
    <Container>
      <Main>
        <div>
          <Button
            type="button"
            text="INSCREVA-SE"
            onClick={() => window.open(curso?.symplaLink)}
            variant="secondary"
            customStyles={{ width: "100%", maxWidth: "unset" }}
          />
          <Navigation>
            <div>
              <p className="playfair">Navegação rápida</p>
              <img src="/images/chevron_down_dark.png" alt="Seta para baixo" />
            </div>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => scrollIntoView("#description")}
                >
                  Descrição do curso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollIntoView("#payment")}
                >
                  Pagamento do curso
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollIntoView("#faq")}>
                  Perguntas frequentes
                </button>
              </li>
            </ul>
          </Navigation>
          <GeneralInfo>
            <b className="playfair">Informações Gerais</b>
            <p>Área: {curso?.area}</p>
            <p>Carga horária: {curso?.duration}</p>
            <p>Módulos: {curso?.chapters}</p>
            <p>Nível: {curso?.level}</p>
            <p>Idioma: {curso?.language}</p>
          </GeneralInfo>
        </div>
        <CourseDescription id="description">
          <p className="tag">Cursos</p>
          <h1 className="title">{curso?.title}</h1>
          <h2 className="playfair">{curso?.edition}</h2>
          <p>{curso?.description}</p>
          <TagsContainer>
            {curso?.tags?.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </TagsContainer>
          <BenefitsContainer>
            {curso?.benefits?.map((item) => (
              <div key={item}>
                <p>{item}</p>
              </div>
            ))}
          </BenefitsContainer>
        </CourseDescription>
      </Main>
      <LotesContainer id="payment">
        <div>
          <p>Valores do Curso</p>
        </div>
        {curso?.ticketsBatches?.map((item) => {
          return (
            <Lote key={item.name}>
              <b>{item.name}</b>
              <p>Inscrições até o dia {item.limitDate}</p>
            </Lote>
          );
        })}
        <div>
          <Button
            type="button"
            text="INSCREVA-SE NO SYMPLA"
            onClick={() => window.open(curso?.symplaLink)}
            variant="secondary"
            customStyles={{
              width: "100%",
              maxWidth: "unset",
              height: 72,
              fontSize: 16,
            }}
          />
        </div>
      </LotesContainer>
      <CursoAccordion questions={curso?.faq} />
      <Footer />
    </Container>
  );
}

export const getStaticPaths = async () => {
  // const client = createClient({ previewData });
  // const news = await client.getAllByType("new");

  const paths = ["/cursos/curso-teste"];
  // news?.map((project) => {
  //     return {
  //         params: {
  //             slug: project?.uid,
  //         },
  //     };
  // });

  return {
    paths: paths || [],
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  // const client = createClient({ previewData });

  const { uid } = params;
  const curso = {
    uid,
    title: "Curso de Teste",
    edition: "1º Edição",
    description: `
      Um dos objetivos da nossa iniciativa é levar conhecimento aos profissionais e estudantes de Psicologia interessados em aprimorar suas habilidades, se manter atualizados e desenvolver uma atuação cada vez mais centrada em compromissos éticos sólidos. 
      Para isso, a ABPBE montou uma equipe dedicada a identificar importantes lacunas na formação dos psicólogos brasileiros e estruturar cursos destinados a tornar você um representante da Psicologia mais preparado, seja na academia ou seja nos seus espaços de trabalho. Além disso, aqui também anunciaremos outras formações de instituições aliadas na nossa busca por mudanças fundamentais na Psicologia nacional.
    `,
    area: "Psicologia",
    duration: "30 horas",
    chapters: "3",
    level: "Básico",
    language: "Português",
    tags: ["ao vivo", "30h de conteúdo", "Gravação por 2 meses"],
    benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
    ticketsBatches: [
      {
        name: "1º Lote",
        limitDate: "2022/12/12",
      },

      {
        name: "2º Lote",
        limitDate: "2022/12/12",
      },
    ],
    symplaLink: "https://sympla.com/",
    faq: [
      {
        summary: "Item 1",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        summary: "Item 2",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        summary: "Item 3",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        summary: "Item 4",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  };

  return {
    props: {
      curso: curso || null,
    },
  };
}
