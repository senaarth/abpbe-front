import React from "react";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
import { Select } from "../components/Select";

import {
  Page,
  ContentContainer,
  CardsContainer,
} from "../styles/Podcasts";
import { PodcastCard } from "../components/PodcastCard";

type PodcastType = {
  uid: string;
  link: string;
  title: string;
  owner: string;
  image: string;
};

interface PodcastProps {
  podcasts: PodcastType[];
}

export default function Podcast({
  podcasts,
}: PodcastProps): JSX.Element {
  const [orderBy, setOrderBy] = React.useState('RECENT');
  const options = [
    {
        label: 'Recente',
        value: 'RECENT',
    },
    {
        label: 'Popular',
        value: 'POPULAR',
    },
  ];

  const handleChange = (e) => {
    const object = options.find(option => (option.value === e.target.value));
    setOrderBy(object.value);
  }

  return (
    <Page>
      <PageBanner
        img="/images/bg_laptop.png"
        title="Podcasts"
        subtitle="Nosso podcast pretende oferecer a você de maneira descomplicada e descontraída um contato constante com os temas mais interessantes e atuais dentro da Psicologia Baseada em Evidências no Brasil. Para isso, quinzenalmente convidamos para um bate papo profissionais, pesquisadores e figuras importantes para o nosso movimento a fim de colocarmos o debate em dia. Confira nossos episódios abaixo, ou acompanhe a ABPBE no Spotify:"
      />
      <ContentContainer>
        <div className="d-flex">
          <h1 className="playfair title translate-highlight">
            Podcasts
          </h1>
          <Select options={options} onChange={handleChange} value={orderBy} text="Podcasts ordernados por: "/>
        </div>
            <CardsContainer>
                {podcasts?.map(podcast => {
                return (
                    <PodcastCard link={podcast.link} banner={podcast.image} title={podcast.title} owner={podcast.owner}/>
                )
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
      </ContentContainer> *
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  const podcasts = [
    {
      id: "1",
      title:
        "Por que PBE?",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_example.png'
    },
    {
      id: "2",
      title:
        "PBE no congresso de Psicologia.",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_example.png'
    },
    {
      id: "3",
      title:
        "Em breve",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_default.png'
    },
        {
      id: "4",
      title:
        "Podcast #93",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_default.png'
    },
        {
      id: "5",
      title:
        "Podcast #93",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_default.png'
    },
        {
      id: "6",
      title:
        "Podcast #93",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_default.png'
    },
        {
      id: "7",
      title:
        "Podcast #93",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_default.png'
    },
        {
      id: "8",
      title:
        "Podcast #93",
      link: 'https://anchor.fm/podcastpandora/episodes/78---O-que-esperar-do-1--congresso-da-ABPBE--com-Jan-Leonardi-e1ior2k',
      owner: "ABPBE",
      image: '/images/bg_podcast_default.png'
    },
  ];

  return {
    props: {
      podcasts,
    },
  };
}
