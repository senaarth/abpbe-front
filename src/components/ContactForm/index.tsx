import React from "react";

import { Button } from "../Button";
import { Input } from "./Input";

import { Container } from "./styles";

export function ContactForm() {
  return (
    <Container>
      <h2>Nos envie sua mensagem</h2>
      <Input id="name" label="Nome" />
      <Input id="email" label="E-mail" />
      <Input id="phone" label="Telefone" />
      <Input id="message" label="Sua Mensagem" multiline rows={5} />
      <Button
        type="submit"
        text="Enviar Mensagem"
        variant="secondary"
        customStyles={{
          color: "#E0FBFE",
          maxWidth: "unset",
        }}
      />
    </Container>
  );
}
