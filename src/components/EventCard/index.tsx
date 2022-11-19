import React from "react";

import { Container } from "./styles";

interface EventCardProps {
  title: string;
  date: string;
  value: number;
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
        {date
          ? `${new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(date) || new Date())} |`
          : null}{" "}
        Valor único{" "}
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value)}
      </p>
    </Container>
  );
}
