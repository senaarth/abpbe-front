import React from "react";
import req from "superagent";

import { PodcastContainer, BannerContainer, TextContainer } from "./styles";

import imgPlay from "../../assets/icon-play.png";

interface PodcastProps {
  link: string;
  banner: string;
  title: string;
  owner: string;
  id: string;
}

export function PodcastCard({ link, banner, title, owner, id }: PodcastProps) {
  async function updateViews() {
    try {
      await req.put(`${process.env.NEXT_PUBLIC_API}/podcasts/increment/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PodcastContainer
      onClick={async () => {
        await updateViews();

        if (link) window.open(link);
      }}
    >
      <BannerContainer>
        <img className="banner" src={banner} alt={`Banner podcast ${title}`} />
        <img src={imgPlay.src} alt="ícone play" className="play" />
      </BannerContainer>
      <TextContainer>
        <h2 className="title">{title}</h2>
        <p className="owner">{owner}</p>
      </TextContainer>
    </PodcastContainer>
  );
}
