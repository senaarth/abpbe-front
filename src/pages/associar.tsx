import React from "react";
import Head from "next/head";

import { PageBanner } from "../components/PageBanner";
import { Footer } from "../components/Footer";
// import { Button } from "../components/Button";

import { ContentContainer, Page, Content } from "../styles/Associar";

export default function Associar(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Quero me associar | ABPBE</title>
      </Head>
      <PageBanner
        img="/images/bg_estatuto.png"
        title="Quero me associar"
        subtitle="Aqui você encontrará textos sobre os mais diversos temas relevantes para a Psicologia Baseada em Evidências, desde discussões clássicas até as últimas novidades da ciência."
        whiteSubtitle
        isTitleHighlighted
        tag="Novidades"
      />
      <ContentContainer>
        <h1 className="playfair title translate-highlight">
          Quero me associar
        </h1>
        <Content>
          <h1 className="playfair">
            Gostaria de se associar na ABPBE?{" "}
            <span className="highlighted">
              Se inscreva no nosso banco de talentos:
            </span>
          </h1>
          <div className="d-flex">
            <div>
              <img
                src="images/card_placeholder.png"
                alt="Fundo de exemplo"
                style={{ margin: "0 !important", padding: "0 !important" }}
              />
            </div>
            <iframe
              title="eb-widget-associar"
              className="eb-widget"
              id="eb-widget-membership-type-list"
              name="eb-widget-membership-type-list"
              data-auto-adjust-height="false"
              data-auto-adjust-width="true"
              style={{
                display: "block",
                margin: 0,
                padding: 0,
                border: 0,
                outline: 0,
                fontSize: "100%",
                verticalAlign: "baseline",
                background: "transparent",
                flex: 1,
              }}
              src="https://app.glueup.com/organization/4543/widget/membership-type-list/"
            />
          </div>
        </Content>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
