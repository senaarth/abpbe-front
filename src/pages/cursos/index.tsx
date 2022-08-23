import React, { useState } from "react";
import Head from "next/head";

import { PageBanner } from "../../components/PageBanner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Tabs } from '../../components/Tabs';

import {
  Page,
  ContentContainer,
  CoursesContainer,
  CoursesList,
} from "../../styles/Cursos";

type Courses = {
  id: string;
  title: string;
  slug: string;
  image: string;
};

interface CursosProps {
  courses: Courses[];
}

export default function Cursos({ courses }: CursosProps): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeCategory, setActiveCategory] = useState('BASIC'); // vai ser usado na requisição p/ api
  const tabs = [
    {
      label: 'Introdutório',
      key: 'BASIC',
      disabled: false,
    },
    {
      label: 'Intermediário (em breve)',
      key: 'INTERMEDIATE',
      disabled: true,
    },
    {
      label: 'Avançado (em breve)',
      key: 'ADVANCED',
      disabled: true,
    },
  ];
  const handleChange = (index) => {
    setActiveCategory(tabs[index].key);
  }
  return (
    <Page>
      <Head>
        <title>Cursos | ABPBE</title>
      </Head>
      <PageBanner
        img=""
        title="Associação Brasileira de Psicologia Baseada em Evidências"
        subtitle="Ciência e Responsabilidade Social"
        scrollDownCall
      />
      <ContentContainer>
        <CoursesContainer>
          <h2 className="title translate-highlight">
            Nossos cursos
          </h2>
          <Tabs tabs={tabs} onChange={handleChange} />
          <CoursesList>
            {courses?.map((item) => {
              return (
                <Card
                  key={item.id}
                  link={`/cursos/${item.slug}`}
                  targetBlank={false}
                  {...item}
                />
              );
            })}
          </CoursesList>
        </CoursesContainer>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const courses = [
    {
      id: "1",
      image: "",
      title: "Introdução a Psicologia Baseada em Evidências",
      slug: "introducao-a-psicologia-baseada-em-evidencias",
    },
    {
      id: "2",
      image: "",
      title:
        "EM BREVE MAIS CURSOS!",
      slug: "",
    },
  ];

  return {
    props: {
      courses,
    },
  };
}
