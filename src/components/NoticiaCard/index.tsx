import React from "react";
import { useRouter } from "next/router";

import { Container, CardFooter } from "./styles";

export function NoticiaCard() {
  const router = useRouter();

  return (
    <Container onClick={() => router.push("/noticias/noticia-teste")}>
      <h5>EVENTOS</h5>
      <h3 className="playfair">Título da Notícia</h3>
      <h4>
        Compressing the monitor wont do anything, we need to synthesize the
        cross-platform HTTP feed.
      </h4>
      <CardFooter>
        <div>
          <b>Nome Revisor</b>
          <p>Março 21, 2021</p>
        </div>
        <svg
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8.99963C0 8.66811 0.131696 8.35016 0.366117 8.11574C0.600537 7.88132 0.918479 7.74963 1.25 7.74963H15.7325L10.365 2.38463C10.1303 2.14991 9.99842 1.83157 9.99842 1.49963C9.99842 1.16769 10.1303 0.849343 10.365 0.614626C10.5997 0.37991 10.9181 0.248047 11.25 0.248047C11.5819 0.248047 11.9003 0.37991 12.135 0.614626L19.635 8.11463C19.7514 8.23074 19.8438 8.36868 19.9068 8.52054C19.9698 8.67241 20.0022 8.83521 20.0022 8.99963C20.0022 9.16404 19.9698 9.32685 19.9068 9.47871C19.8438 9.63057 19.7514 9.76851 19.635 9.88463L12.135 17.3846C11.9003 17.6193 11.5819 17.7512 11.25 17.7512C10.9181 17.7512 10.5997 17.6193 10.365 17.3846C10.1303 17.1499 9.99842 16.8316 9.99842 16.4996C9.99842 16.1677 10.1303 15.8493 10.365 15.6146L15.7325 10.2496H1.25C0.918479 10.2496 0.600537 10.1179 0.366117 9.88351C0.131696 9.64909 0 9.33115 0 8.99963Z"
            fill="#284E85"
          />
        </svg>
      </CardFooter>
    </Container>
  );
}
