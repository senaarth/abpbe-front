import React from "react";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Checkbox";

import {
  Page,
  ContentContainer,
  Form,
  CheckboxContainer,
  CheckboxColumn,
} from "../styles/Revisor";

export default function Revisor(): JSX.Element {
  const [name, setName] = React.useState("");

  return (
    <Page>
      <Head>
        <title>Seja revisor | ABPBE</title>
      </Head>
      <ContentContainer>
        <h1 className="title">Seja um Revisor Voluntário</h1>
        <p>
          Temos como objetivo oferecer conteúdo da mais alta qualidade para
          nossos leitores. Deste modo, para contribuir ao alcance desse ideal, a
          Revista Indício adota um sistema de revisão cega por pares. Cada
          artigo, antes de ser publicado, será avaliado por pelo menos dois
          revisores que poderão rejeitá-lo, aceitá-lo com modificações ou
          aceitá-lo sem modificações. Os revisores não terão conhecimento sobre
          nenhum dado acerca dos autores.
        </p>
        <Form>
          <h2 className="playfair">
            Gostaria de se candidatar como revisor voluntário e auxiliar na
            construção da Revista Indício? Se inscreva no nosso banco de
            revisores:
          </h2>
          <h3 className="playfair">Preencha os campos com suas informações</h3>
          <Input
            id="name"
            className=""
            label="Nome completo"
            placeholder="Escreva seu nome aqui"
            value={name}
            onChange={(value) => setName(value)}
            error="Exemplo de erro"
          />
          <Input
            id="email"
            className="invalid"
            label="Nome completo"
            placeholder="exemplo: tom@gmail.com"
            value={name}
            onChange={(value) => setName(value)}
            error="Exemplo de erro"
          />
          <Input
            id="lattes"
            className=""
            label="Currículo lattes"
            placeholder="exemplo: tom@gmail.com"
            value={name}
            onChange={(value) => setName(value)}
            error="Exemplo de erro"
          />
          <h3 className="playfair" style={{ marginTop: "2rem" }}>
            Você se dispõe a revisar conteúdos sobre
            <span className="playfair"> (marcar pelo menos uma)</span>:
          </h3>
          <CheckboxContainer>
            <CheckboxColumn>
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
            </CheckboxColumn>
            <CheckboxColumn>
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
            </CheckboxColumn>
            <CheckboxColumn>
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
              <Checkbox label="Tipo de Artigo" onChange={() => {}} />
            </CheckboxColumn>
          </CheckboxContainer>
          <span className="divider" />
          <Checkbox revistaIndicio />
          <Button
            type="submit"
            variant="secondary"
            text="quero me candidatar!"
            customStyles={{
              marginTop: "1.5rem",
              marginLeft: "auto",
              textTransform: "uppercase",
            }}
          />
        </Form>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
