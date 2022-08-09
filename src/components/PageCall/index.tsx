import React from "react";

import { Button } from "../Button";

import { Container } from "./styles";

interface PageCallProps {
  title: string;
  playfairFont?: boolean;
  subtitle?: string;
  btnTxt?: string;
  onClick?: () => void;
}

export function PageCall({
  title,
  playfairFont = false,
  subtitle,
  btnTxt,
  onClick,
}: PageCallProps) {
  return (
    <Container>
      <h3 className={playfairFont ? "playfair" : ""}>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      {btnTxt && onClick && (
        <Button
          type="button"
          text={btnTxt}
          onClick={() => onClick()}
          customStyles={{ marginTop: "2.875rem" }}
        />
      )}
      <img src="/images/noise_rectangle.png" alt="ruído fundo" />
    </Container>
  );
}
