import React from "react";

import { PodcastContainer, BannerContainer, TextContainer } from "./styles";

import imgPlay from "../../assets/icon-play.png";

interface PodcastProps {
  link: string;
  banner: string;
  title: string;
  owner: string;
}

export function PodcastCard({ link, banner, title, owner }: PodcastProps) {
  return (
    <PodcastContainer
      onClick={() => {
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
