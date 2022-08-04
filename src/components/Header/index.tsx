import React from "react";
import { useRouter } from "next/router";

import { Hamburger, MobileContainer, MobileMenu } from "./styles";
import { Input } from "./Input";

export function Header() {
  const router = useRouter();

  const [inputValue, setInputValue] = React.useState<string>("");

  const [menu, setMenu] = React.useState<boolean>(false);

  const [conteudo, setConteudo] = React.useState<boolean>(false);
  const [novidades, setNovidades] = React.useState<boolean>(false);
  const [sobre, setSobre] = React.useState<boolean>(false);
  const [facaParte, setFacaParte] = React.useState<boolean>(false);

  return (
    <MobileContainer>
      <div>
        <a href="/">
          <img src="/images/logo_gray_horizontal.png" alt="Logo ABPBE" />
        </a>
        <Hamburger
          className={menu ? "open" : ""}
          onClick={() => {
            setConteudo(false);
            setNovidades(false);
            setSobre(false);
            setFacaParte(false);

            setMenu(!menu);
          }}
        >
          <span className="line-1" />
          <span className="line-2" />
          <span className="line-3" />
        </Hamburger>
      </div>
      <MobileMenu className={menu ? "open" : ""}>
        <nav>
          {!novidades && !sobre && !facaParte && (
            <>
              <button
                type="button"
                onClick={() => setConteudo(!conteudo)}
                className={conteudo ? "open" : ""}
              >
                Conteúdo sobre PBE
                <img
                  src="/images/chevron_down_blue.png"
                  alt="Seta para baixo"
                />
              </button>
              <ul className={conteudo ? "open" : ""}>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setConteudo(false);
                    router.push("/");
                  }}
                >
                  <strong>Galeria de artigos acadêmicos</strong>
                  <p>Encontre diversos artigos publicados sobre PBE</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setConteudo(false);
                    router.push("/");
                  }}
                >
                  <strong>Cursos online</strong>
                  <p>Aqui você encontra cursos pagos e gratuitos</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setConteudo(false);
                    router.push("/");
                  }}
                >
                  <strong>Revista Indício</strong>
                  <p>Consulte, envie ou revise textos sobre PBE</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setConteudo(false);
                    router.push("/");
                  }}
                >
                  <strong>Mitos e verdades sobre PBE</strong>
                  <p>Entenda o que é PBE de modo crítico</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setConteudo(false);
                    router.push("/");
                  }}
                >
                  <strong>Podcast sobre PBE</strong>
                  <p>Ouça ou leia os principais artigos de PBE</p>
                </button>
              </ul>
            </>
          )}
          {!conteudo && !sobre && !facaParte && (
            <>
              <button
                type="button"
                onClick={() => setNovidades(!novidades)}
                className={novidades ? "open" : ""}
              >
                Novidaes
                <img
                  src="/images/chevron_down_blue.png"
                  alt="Seta para baixo"
                />
              </button>
              <ul className={novidades ? "open" : ""}>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setNovidades(false);
                    router.push("/");
                  }}
                >
                  <strong>Eventos, Congressos e Lives</strong>
                  <p>Conteúdos sobre os temas mais relevantes para a PBE</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setNovidades(false);
                    router.push("/");
                  }}
                >
                  <strong>Divulgação científica</strong>
                  <p>
                    Encontre textps sobre os mais relevantes temas para a PBE
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setNovidades(false);
                    router.push("/");
                  }}
                >
                  <strong>Notícias</strong>
                  <p>
                    Aqui você encontrará temas desde discussões clássicas as
                    últimas novidades da ciência
                  </p>
                </button>
              </ul>
            </>
          )}
          {!conteudo && !novidades && !facaParte && (
            <>
              <button
                type="button"
                onClick={() => setSobre(!sobre)}
                className={sobre ? "open" : ""}
              >
                Sobre a Associação
                <img
                  src="/images/chevron_down_blue.png"
                  alt="Seta para baixo"
                />
              </button>
              <ul className={sobre ? "open" : ""}>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setSobre(false);
                    router.push("/");
                  }}
                >
                  <strong>Quem somos</strong>
                  <p>
                    Breve histórico da primeira associação brasileira de
                    psicologia baseada em evidêcncias.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setSobre(false);
                    router.push("/");
                  }}
                >
                  <strong>Manifesto, Missão, Visão e Valores</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setSobre(false);
                    router.push("/");
                  }}
                >
                  <strong>Perguntas frequentes</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setSobre(false);
                    router.push("/");
                  }}
                >
                  <strong>Estatuto e transparência</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setSobre(false);
                    router.push("/");
                  }}
                >
                  <strong>Política de privacidade</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                </button>
              </ul>
            </>
          )}
          {!conteudo && !novidades && !sobre && (
            <>
              <button
                type="button"
                onClick={() => setFacaParte(!facaParte)}
                className={facaParte ? "open" : ""}
              >
                Faça Parte
                <img
                  src="/images/chevron_down_blue.png"
                  alt="Seta para baixo"
                />
              </button>
              <ul className={facaParte ? "open" : ""}>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setFacaParte(false);
                    router.push("/");
                  }}
                >
                  <strong>Quero me Associar</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenu(false);
                    setFacaParte(false);
                    router.push("/");
                  }}
                >
                  <strong>Quero fazer uma doação</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                </button>
              </ul>
            </>
          )}
        </nav>
        <Input
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          onSubmit={() => {
            setMenu(false);
            setInputValue("");
          }}
        />
      </MobileMenu>
    </MobileContainer>
  );
}
