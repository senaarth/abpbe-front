import React from "react";
import { useRouter } from "next/router";

import { Button } from "../../Button";
import { NavButton } from "./NavButton";

import { Container, GlassIcon } from "./styles";

interface DesktopHeaderProps {
  bgColor: string;
  bgColorFromStart: boolean;
}

export function DesktopHeader({
  bgColor,
  bgColorFromStart,
}: DesktopHeaderProps) {
  const router = useRouter();
  const [transparentBg, setTransparentBg] = React.useState(!bgColorFromStart);

  function handleScroll() {
    if (window.scrollY <= 87) {
      setTransparentBg(true);
      return;
    }

    setTransparentBg(false);
  }

  React.useEffect(() => {
    if (!window || bgColorFromStart) return;

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      className={transparentBg ? "transparent" : "colored"}
      style={{
        backgroundColor: transparentBg || !bgColor ? "transparent" : bgColor,
      }}
    >
      <div>
        <a href="/">
          <img
            src={
              transparentBg
                ? "/images/logo_horizontal_gray_text.png"
                : "/images/logo_horizontal.png"
            }
            alt="Logo ABPBE"
          />
        </a>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <NavButton
              variant={transparentBg ? "transparent" : "colored"}
              label="Conteúdo sobre PBE"
              menuItems={[
                {
                  title: "Galeria de artigos acadêmicos",
                  subtitle: "Encontre diversos artigos publicados sobre PBE",
                  route: "/galeria",
                },
                {
                  title: "Revista Indício da ABPBE",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/revista",
                },
                {
                  title: "Cursos online",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/cursos",
                },
                {
                  title: "Podcasts sobre PBE",
                  subtitle: "Encontre os principais podcasts de PBE.",
                  route: "/podcasts",
                },
                {
                  title: "Mitos e verdades sobre PBE",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/mitos",
                },
              ]}
            />
          </li>
          <li>
            <NavButton
              variant={transparentBg ? "transparent" : "colored"}
              label="Novidades"
              menuItems={[
                {
                  title: "Eventos, congressos e lives",
                  subtitle: "Encontre diversos artigos publicados sobre PBE",
                  route: "/eventos",
                },
                {
                  title: "Divulgação científica",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/divulgacao",
                },
                {
                  title: "Notícias da ABPBE",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/noticias",
                },
              ]}
            />
          </li>
          <li>
            <NavButton
              variant={transparentBg ? "transparent" : "colored"}
              label="Sobre nós"
              menuItems={[
                {
                  title: "Quem somos",
                  subtitle: "Encontre diversos artigos publicados sobre PBE",
                  route: "/sobre",
                },
                {
                  title: "Manifesto, Missão, Visão e Valores",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/manifesto",
                },
                {
                  title: "Sobre a associação",
                  subtitle: "Conheça nossos parceiros",
                  route: "/parceiros",
                },
                {
                  title: "Perguntas frequentes",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/faq",
                },
              ]}
            />
          </li>
          <li>
            <NavButton
              variant={transparentBg ? "transparent" : "colored"}
              label="Faça parte"
              menuItems={[
                {
                  title: "Quero ser revisor",
                  subtitle:
                    "Faça parte da criação de conteúdo da nossa plataforma.",
                  route: "/revisor",
                },
                {
                  title: "Quero me associar",
                  subtitle: "Encontre diversos artigos publicados sobre PBE.",
                  route: "/associar",
                },
                {
                  title: "Quero fazer uma doação",
                  subtitle: "Encontre os principais artigos de PBE.",
                  route: "/doacao",
                },
              ]}
            />
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
        <Button
          type="button"
          variant="primary"
          text="ASSOCIADO"
          onClick={() => router.push("/associado")}
          customStyles={{
            maxWidth: 120,
            maxHeight: 32,
            borderRadius: 12,
            fontSize: "0.875rem",
          }}
        />
        <GlassIcon
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={transparentBg ? "transparent" : "colored"}
          onClick={() => {
            router.push("/galeria");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <path
            d="M23.484 20.6882C25.4206 18.0456 26.288 14.7692 25.9126 11.5145C25.5372 8.25982 23.9468 5.26688 21.4595 3.13446C18.9722 1.00204 15.7715 -0.112592 12.4977 0.0135544C9.22384 0.139701 6.11836 1.49733 3.80253 3.81482C1.4867 6.13231 0.131296 9.23876 0.00749253 12.5127C-0.116311 15.7866 1.00061 18.9865 3.13481 21.4723C5.26901 23.9581 8.26308 25.5463 11.518 25.9194C14.773 26.2924 18.0488 25.4227 20.69 23.4842H20.688C20.748 23.5642 20.812 23.6402 20.884 23.7142L28.584 31.4142C28.959 31.7895 29.4677 32.0004 29.9983 32.0006C30.5288 32.0008 31.0377 31.7902 31.413 31.4152C31.7883 31.0402 31.9992 30.5315 31.9994 30.0009C31.9996 29.4704 31.789 28.9615 31.414 28.5862L23.714 20.8862C23.6425 20.8138 23.5656 20.747 23.484 20.6862V20.6882ZM24 13.0002C24 14.4447 23.7155 15.8751 23.1627 17.2097C22.6099 18.5443 21.7996 19.7569 20.7782 20.7784C19.7567 21.7998 18.5441 22.6101 17.2095 23.1629C15.8749 23.7157 14.4445 24.0002 13 24.0002C11.5555 24.0002 10.1251 23.7157 8.79048 23.1629C7.4559 22.6101 6.24326 21.7998 5.22182 20.7784C4.20038 19.7569 3.39012 18.5443 2.83732 17.2097C2.28452 15.8751 2 14.4447 2 13.0002C2 10.0828 3.15892 7.28493 5.22182 5.22203C7.28472 3.15913 10.0826 2.0002 13 2.0002C15.9174 2.0002 18.7153 3.15913 20.7782 5.22203C22.8411 7.28493 24 10.0828 24 13.0002Z"
            fill="#EEEEEE"
          />
        </GlassIcon>
      </div>
    </Container>
  );
}
