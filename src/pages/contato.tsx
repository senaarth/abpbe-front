import React from "react";
import Head from "next/head";
import req from "superagent";

import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

import {
  Page,
  ContentContainer,
  ContactInfoContainer,
  TextContainer,
  ContactInfo,
} from "../styles/Contato";

type SocialMedia = {
  email: string;
  phone: string;
  instagram: string;
  whatsapp: string;
};

interface ContatoProps {
  socialMedia: SocialMedia;
}

export default function Contato({ socialMedia }: ContatoProps): JSX.Element {
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
                <a href={`mailto:${socialMedia?.email}`}>
                  {socialMedia?.email}
                </a>
              </div>
            </ContactInfo>
            <ContactInfo>
              <img src="/images/icon_phone.svg" alt="Icone de telefone" />
              <div>
                <p>Telefone</p>
                <a href={`tel:${socialMedia?.phone}`}>{socialMedia?.phone}</a>
              </div>
            </ContactInfo>
            <ContactInfo>
              <img src="/images/icon_instagram.svg" alt="Icone do instagram" />
              <div>
                <p>Instagram </p>
                <a
                  href={`https://instagram.com/${socialMedia?.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`@${socialMedia?.instagram}`}
                </a>
              </div>
            </ContactInfo>
            <ContactInfo>
              <img src="/images/icon_wpp.svg" alt="Icone do whatsapp" />
              <div>
                <p>WhatsApp </p>
                <a href={`tel:${socialMedia?.whatsapp}`}>
                  {socialMedia?.whatsapp}
                </a>
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

export async function getServerSideProps() {
  const { body: socialMedia } = await req.get(
    `${process.env.NEXT_PUBLIC_API}/socialmedia`
  );

  return {
    props: {
      socialMedia,
    },
  };
}
