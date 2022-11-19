import React from "react";
import Head from "next/head";
import req from "superagent";

import { PageBanner } from "../components/PageBanner";
import { PageCall } from "../components/PageCall";
import { Footer } from "../components/Footer";
// import { Select } from "../components/Select";

import { PageData } from "../@types/pageData";

import { Page, ContentContainer, CardsContainer } from "../styles/Podcasts";
import { PodcastCard } from "../components/PodcastCard";

type PodcastType = {
  id: string;
  link: string;
  title: string;
  owner: string;
  image: string;
  views: number;
  updateDate: string;
};

interface PodcastProps {
  podcasts: PodcastType[];
  pageData: PageData;
}

export default function Podcast({
  podcasts,
  pageData,
}: PodcastProps): JSX.Element {
  // const [sort, setSort] = React.useState("creationDate");
  // const options = [
  //   {
  //     label: "Recente",
  //     value: "creationDate",
  //   },
  //   {
  //     label: "Popular",
  //     value: "views",
  //   },
  // ];
  const [sortedPodcasts] = React.useState(podcasts);

  // async function updatePodcasts(updatedSort: string) {
  //   const { body } = await req
  //     .get(`${process.env.NEXT_PUBLIC_API}/podcasts`)
  //     .send({ sort: updatedSort });

  //   setSortedPodcasts(body);
  // }

  // const handleChange = (e) => {
  //   setSort(e.target.value);
  //   updatePodcasts(e.target.value);
  // };

  return (
    <Page>
      <Head>
        <title>Podcasts | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_laptop.png"
        title={pageData?.bannerTitle || "Podcasts"}
        subtitle={
          pageData?.bannerSubtitle ||
          "Nosso podcast pretende oferecer a você de maneira descomplicada e descontraída um contato constante com os temas mais interessantes e atuais dentro da Psicologia Baseada em Evidências no Brasil. Para isso, quinzenalmente convidamos para um bate papo profissionais, pesquisadores e figuras importantes para o nosso movimento a fim de colocarmos o debate em dia. Confira nossos episódios abaixo, ou acompanhe a ABPBE no Spotify:"
        }
        tag={pageData?.tag || null}
      />
      <ContentContainer>
        <div className="d-flex">
          <h1 className="playfair title translate-highlight">Podcasts</h1>
          {/* <Select
            options={options}
            onChange={handleChange}
            value={sort}
            text="Podcasts ordernados por: "
          /> */}
        </div>
        <CardsContainer>
          {sortedPodcasts?.map((podcast) => {
            return (
              <PodcastCard
                link={podcast.link}
                banner={podcast.image || "/images/bg_podcast_example.png"}
                title={podcast.title}
                owner="ABPBE"
                key={podcast?.id}
                id={podcast?.id}
              />
            );
          })}
        </CardsContainer>

        {/*    <p>{podcast?.content}</p>
        <ReviwerContainer>
          <div className="image-wrapper">
            <Image
              layout="fill"
              alt={`Foto do(a) revisor(a) ${podcast?.reviwer?.name}`}
              placeholder="blur"
              blurDataURL="/images/card_placeholder.png"
              src={
                !!podcast?.reviwer?.picture &&
                podcast?.reviwer?.picture !== "" &&
                !imageError
                  ? podcast?.reviwer?.picture
                  : "/images/card_placeholder.png"
              }
              onError={() => setImageError(true)}
            />
          </div>
          <div className="content">
            <h4 className="playfair">REVISOR</h4>
            <h5 className="playfair">{podcast?.reviwer?.name}</h5>
            <p>{podcast?.reviwer?.title}</p>
          </div>
        </ReviwerContainer>
        <RelatedContainer>
          <h2 className="title">Relacionados</h2>
          <div>
            {relatedArticles?.map((item) => {
              return (
                <Card
                  key={item.slug}
                  title={item.title}
                  targetBlank={false}
                  link={`/podcasts/${item.slug}`}
                />
              );
            })}
          </div>
        </RelatedContainer> */}
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
    `${process.env.NEXT_PUBLIC_API}/pages/podcasts`
  );
  const { body } = await req
    .get(`${process.env.NEXT_PUBLIC_API}/podcasts`)
    .send({ sort: "creationDate" });

  const podcasts = body?.reduce((acc, curr) => {
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
      podcasts,
      pageData,
    },
  };
}
