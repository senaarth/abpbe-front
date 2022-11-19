import React from "react";
import req from "superagent";

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
  const { body } = await req.get(`${process.env.NEXT_PUBLIC_API}/courses`);

  const paths = body?.reduce((acc, curr) => {
    // eslint-disable-next-line no-underscore-dangle
    return [...acc, `/cursos/${curr?._id}`];
  }, []);

  return {
    paths: paths || [],
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { body } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/courses/${params?.uid}`
  );

  const curso = {
    ...body,
    // eslint-disable-next-line no-underscore-dangle
    uid: body?._id,
    title: body?.name,
    edition: `${body?.edition || 1}º Edição`,
    symplaLink: body?.symplaLink || "https://sympla.com/",
    faq: body?.questions?.reduce((acc, curr) => {
      return [
        ...acc,
        {
          summary: curr?.question,
          details: curr?.reply,
        },
      ];
    }, []),
  };

  return {
    props: {
      curso: curso || null,
    },
  };
}
