import React from "react";
import Head from "next/head";
import req from "superagent";

import { PageBanner } from "../../components/PageBanner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Tabs } from "../../components/Tabs";
import { PageCall } from "../../components/PageCall";

import { PageData } from "../../@types/pageData";

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
  level: "INTRODUTÓRIO" | "INTERMEDIÁRIO" | "AVANÇADO";
};

interface CursosProps {
  courses: Courses[];
  pageData: PageData;
}

export default function Cursos({
  courses,
  pageData,
}: CursosProps): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const [activeCategory, setActiveCategory] = React.useState("INTRODUTÓRIO");
  const filteredCourses = React.useMemo(
    () => courses?.filter((item) => item?.level === activeCategory),
    [activeCategory]
  );
  const tabs = [
    {
      label: "Introdutório",
      key: "INTRODUTÓRIO",
      disabled: !courses?.some((item) => item.level === "INTRODUTÓRIO"),
    },
    {
      label: "Intermediário (em breve)",
      key: "INTERMEDIÁRIO",
      disabled: !courses?.some((item) => item.level === "INTERMEDIÁRIO"),
    },
    {
      label: "Avançado (em breve)",
      key: "AVANÇADO",
      disabled: !courses?.some((item) => item.level === "AVANÇADO"),
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
        title={
          pageData?.bannerTitle ||
          "Associação Brasileira de Psicologia Baseada em Evidências"
        }
        subtitle={
          pageData?.bannerSubtitle || "Ciência e Responsabilidade Social"
        }
        scrollDownCall
      />
      <ContentContainer>
        <CoursesContainer>
          <h2 className="title translate-highlight">Nossos cursos</h2>
          <Tabs tabs={tabs} onChange={handleChange} />
          <CoursesList>
            {filteredCourses?.map((item) => {
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
      {pageData?.pageCall && (
        <PageCall
          playfairFont
          title={
            pageData?.pageCall ||
            "Nos ajude a aproximar a Psicologia do fazer científico."
          }
          subtitle={pageData?.pageCallSubtitle || null}
        />
      )}
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { body: pageData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/pages/cursos`
  );
  const { body: coursesData } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/courses`
  );

  const courses = coursesData?.reduce((acc, curr) => {
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
      pageData,
    },
  };
}
