import React from "react";
import Head from "next/head";

import { Container, ContentContainer } from "../styles/Associado";

export default function Associado(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Associado | ABPBE</title>
      </Head>
      <ContentContainer>
        <iframe
          className="eb-widget"
          title="eb-widget-login"
          id="eb-widget-login"
          name="eb-widget-login"
          data-auto-adjust-height="true"
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
          src="https://app.glueup.com/organization/4543/widget/login/"
        />
      </ContentContainer>
    </Container>
  );
}
