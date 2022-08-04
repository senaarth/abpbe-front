import React from "react";
import Image from "next/image";

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
  banner = "/images/card_placeholder.png",
  title,
  subtitle,
  linkCall,
  link = "/",
  targetBlank = true,
}: CardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <CardContainer href={link} target={targetBlank ? "_blank" : "_self"}>
      <div className="image-wrapper">
        <Image
          layout="fill"
          alt={`Banner ${title || subtitle}`}
          placeholder="blur"
          blurDataURL="/images/card_placeholder.png"
          src={
            !!banner && banner !== "" && !imageError
              ? banner
              : "/images/card_placeholder.png"
          }
          onError={() => setImageError(true)}
        />
      </div>
      <div className="text-container">
        {!!title && <h1 className="card-title">{title}</h1>}
        {!!subtitle && <h2 className="card-subtitle">{subtitle}</h2>}
        {!!linkCall && <p className="card-link-call">{linkCall}</p>}
      </div>
    </CardContainer>
  );
}
