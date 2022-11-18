import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Select } from "../components/Select";

import { Page, ContentContainer, CardsContainer } from "../styles/Podcasts";
import { PodcastCard } from "../components/PodcastCard";

import { api } from "../services/api";

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
}

export default function Podcast({ podcasts }: PodcastProps): JSX.Element {
  const [sort, setSort] = React.useState("creationDate");
  const options = [
    {
      label: "Recente",
      value: "creationDate",
    },
    {
      label: "Popular",
      value: "views",
    },
  ];
  const [sortedPodcasts, setSortedPodcasts] = React.useState(podcasts);

  const handleChange = (e) => {
    const object = options.find((option) => option.value === e.target.value);
    setSort(object.value);
  };

  React.useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const { data } = await api.get("/podcasts", {
        params: { sort },
      });

      const updatedPodcasts = data?.reduce((acc, curr) => {
        return [
          ...acc,
          {
            // eslint-disable-next-line no-underscore-dangle
            id: curr?._id,
            ...curr,
          },
        ];
      }, []);

      setSortedPodcasts(updatedPodcasts);
    })();
  }, [sort]);

  return (
    <Page>
      <Head>
        <title>Podcasts | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_laptop.png"
        title="Podcasts"
        subtitle="Nosso podcast pretende oferecer a você de maneira descomplicada e descontraída um contato constante com os temas mais interessantes e atuais dentro da Psicologia Baseada em Evidências no Brasil. Para isso, quinzenalmente convidamos para um bate papo profissionais, pesquisadores e figuras importantes para o nosso movimento a fim de colocarmos o debate em dia. Confira nossos episódios abaixo, ou acompanhe a ABPBE no Spotify:"
      />
      <ContentContainer>
        <div className="d-flex">
          <h1 className="playfair title translate-highlight">Podcasts</h1>
          <Select
            options={options}
            onChange={handleChange}
            value={sort}
            text="Podcasts ordernados por: "
          />
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
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const { data } = await api.get("/podcasts", {
    params: { sort: "creationDate" },
  });

  const podcasts = data?.reduce((acc, curr) => {
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
    },
  };
}
