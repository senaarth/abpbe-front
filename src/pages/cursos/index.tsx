import React from "react";
import Head from "next/head";

import { PageBanner } from "../../components/PageBanner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Tabs } from "../../components/Tabs";

import { api } from "../../services/api";

import {
  Page,
  ContentContainer,
  CoursesContainer,
  CoursesList,
} from "../../styles/Cursos";

type Courses = {
  id: string;
  name: string;
  image: string;
};

interface CursosProps {
  courses: Courses[];
}

export default function Cursos({ courses }: CursosProps): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeCategory, setActiveCategory] = React.useState("BASIC"); // vai ser usado na requisição p/ api
  const tabs = [
    {
      label: "Introdutório",
      key: "BASIC",
      disabled: false,
    },
    {
      label: "Intermediário (em breve)",
      key: "INTERMEDIATE",
      disabled: true,
    },
    {
      label: "Avançado (em breve)",
      key: "ADVANCED",
      disabled: true,
    },
  ];

  const handleChange = (index) => {
    setActiveCategory(tabs[index].key);
  };

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
          <h2 className="title translate-highlight">Nossos cursos</h2>
          <Tabs tabs={tabs} onChange={handleChange} />
          <CoursesList>
            {courses?.map((item) => {
              return (
                <Card
                  key={item.id}
                  link={`/cursos/${item.id}`}
                  targetBlank={false}
                  title={item?.name}
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
  const { data } = await api.get("/courses");

  const courses = data?.reduce((acc, curr) => {
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
      courses,
    },
  };
}