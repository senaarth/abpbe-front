import React from "react";

import { MailInput } from "../MailInput";
import { scrollIntoView } from "../../utils/scrollIntoView";

import { Container, ScrollDown, SocialMedia } from "./styles";

interface PageBannerProps {
  img: string;
  title: string;
  subtitle: string;
  whiteSubtitle?: boolean;
  isTitleHighlighted?: boolean;
  socialMedia?: boolean;
  tag?: string;
  scrollDownCall?: boolean;
  inputPlaceholder?: string;
  onSubmit?: () => void;
  onSuccess?: string;
  onError?: string;
  inputSubmitTxt?: string;
}

export function PageBanner({
  img = "/images/bg_library.png",
  title,
  subtitle,
  tag,
  whiteSubtitle = false,
  isTitleHighlighted = false,
  socialMedia = false,
  scrollDownCall = false,
  inputPlaceholder = "",
  onSubmit = () => {},
  onSuccess = "",
  onError = "",
  inputSubmitTxt = "",
}: PageBannerProps) {
  return (
    <Container
      id="page-banner"
      style={{
        background: `url(${
          img !== "" && !!img ? img : "/images/bg_library.png"
        }) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {!!tag && tag !== "" && (
        <p className={`tag  ${socialMedia ? " mt-auto" : ""}`}>{tag}</p>
      )}
      <h1
        className={`playfair ${socialMedia ? "mt-auto" : ""} ${
          isTitleHighlighted ? "highlight" : ""
        }`}
      >
        {title}
      </h1>
      {!!subtitle && (
        <h2 style={{ opacity: whiteSubtitle ? 1 : 0.75 }}>{subtitle}</h2>
      )}
      {!!inputPlaceholder && (
        <MailInput
          placeholder={inputPlaceholder}
          onSubmit={() => onSubmit()}
          onSuccess={onSuccess}
          onError={onError}
          btnText={inputSubmitTxt}
        />
      )}
      {socialMedia && (
        <SocialMedia>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/images/instagram.png" alt="Ícone instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/images/facebook.png" alt="Ícone facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/images/twitter.png" alt="Ícone twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/images/linkedin.png" alt="Ícone linkedin" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="/images/youtube.png" alt="Ícone youtube" />
          </a>
        </SocialMedia>
      )}
      {scrollDownCall && (
        <ScrollDown onClick={() => scrollIntoView("main")}>
          <img src="/images/arrow_down.png" alt="Seta apontando para baixo" />
        </ScrollDown>
      )}
    </Container>
  );
}
