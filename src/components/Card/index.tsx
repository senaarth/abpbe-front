import React from "react";
import { useRouter } from "next/router";

import { CardContainer } from "./styles";

interface CardProps {
  banner?: string;
  title?: string;
  subtitle?: string;
  linkCall?: string;
  link?: string;
  targetBlank?: boolean;
}

export function Card({
  banner,
  title,
  subtitle,
  linkCall,
  link,
  targetBlank = true,
}: CardProps) {
  const router = useRouter();

  return (
    <CardContainer
      onClick={() => {
        if (!link) return;

        if (targetBlank) {
          window.open(link);
          return;
        }

        router.push(link);
      }}
    >
      <img src={banner} alt={`Banner ${title || subtitle}`} />
      <div className="text-container">
        {!!title && <h1 className="title">{title}</h1>}
        {!!subtitle && <h2 className="subtitle">{subtitle}</h2>}
        {!!linkCall && <p className="link-call">{linkCall}</p>}
      </div>
    </CardContainer>
  );
}
