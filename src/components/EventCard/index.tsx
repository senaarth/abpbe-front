import React from "react";

import { Container } from "./styles";

interface EventCardProps {
  title: string;
  date: string;
  value: string;
  link?: string;
}

export function EventCard({
  title,
  date,
  value,
  link = "https://sympla.com.br/",
}: EventCardProps) {
  return (
    <Container type="button" onClick={() => window.open(link)}>
      <b className="playfair">{title}</b>
      <p>
        {date} | Valor único {value}
      </p>
    </Container>
  );
}
