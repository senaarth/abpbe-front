import React from "react";
import Head from "next/head";

import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

import {
  Page,
  ContentContainer,
  ContactInfoContainer,
  TextContainer,
  ContactInfo,
} from "../styles/Contato";

export default function Contato(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Contato | ABPBE</title>
      </Head>
      <ContentContainer>
        <TextContainer>
          <h1>Fale Conosco</h1>
          <h2>Informações de contato</h2>
          <ContactInfoContainer>
            <ContactInfo>
              <img src="/images/icon_mail.svg" alt="Icone de email" />
              <div>
                <p>E-mail</p>
                <b>contato@abpbe.com.br</b>
              </div>
            </ContactInfo>
            <ContactInfo>
              <img src="/images/icon_phone.svg" alt="Icone de telefone" />
              <div>
                <p>Telefone</p>
                <b>(11) 9999-9999</b>
              </div>
            </ContactInfo>
            <ContactInfo>
              <img src="/images/icon_instagram.svg" alt="Icone do instagram" />
              <div>
                <p>Instagram </p>
                <b>@nickdoinsta</b>
              </div>
            </ContactInfo>
            <ContactInfo>
              <img src="/images/icon_wpp.svg" alt="Icone do whatsapp" />
              <div>
                <p>WhatsApp </p>
                <b>(11) 9999-9999</b>
              </div>
            </ContactInfo>
          </ContactInfoContainer>
        </TextContainer>
        <ContactForm />
      </ContentContainer>
      <Footer />
    </Page>
  );
}
