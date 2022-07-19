import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 240px;

  margin-bottom: 0.75rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  a {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &,
    img {
      aspect-ratio: 1;
    }

    img {
      width: 50%;
      object-fit: contain;
    }
  }
`;
