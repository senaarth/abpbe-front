import React from "react";

import { Button } from "../Button";
import { MailInput } from "../MailInput";

import { Container } from "./styles";

interface PageCallProps {
  title?: string;
  boldTitle?: string;
  regularTitle?: string;
  playfairFont?: boolean;
  subtitle?: string;
  btnTxt?: string;
  onClick?: () => void;
  inputPlaceholder?: string;
  onSubmit?: () => void;
  onSuccess?: string;
  onError?: string;
  inputSubmitTxt?: string;
}

export function PageCall({
  title = "",
  boldTitle = "",
  regularTitle = "",
  playfairFont = false,
  subtitle,
  btnTxt,
  onClick = () => { },
  inputPlaceholder = "",
  onSubmit = () => { },
  onSuccess = "",
  onError = "",
  inputSubmitTxt = "",
}: PageCallProps) {
  return (
    <Container>
      <h3 className={playfairFont ? "playfair" : ""}>
        {
          boldTitle !== "" && regularTitle !== "" ? (
            <>{boldTitle} <span style={{ fontWeight: 300 }}>{regularTitle}</span></>
          ) : title
        }
      </h3>
      {subtitle && <h4>{subtitle}</h4>}
      {btnTxt && onClick && (
        <Button
          type="button"
          text={btnTxt}
          onClick={() => onClick()}
          customStyles={{ marginTop: "2.875rem" }}
        />
      )}
      {!!inputPlaceholder && (
        <MailInput
          placeholder={inputPlaceholder}
          onSubmit={() => onSubmit()}
          onSuccess={onSuccess}
          onError={onError}
          btnText={inputSubmitTxt}
          customStyles={{ marginTop: "2rem" }}
        />
      )}
      <img src="/images/noise_rectangle.png" alt="ruído fundo" />
    </Container>
  );
}
