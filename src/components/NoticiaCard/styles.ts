import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1rem 2.5rem 2.25rem 4rem;

  background-color: #ffffff;
  border-radius: 8px;

  position: relative;

  cursor: pointer;
  transition: filter 0.4s;

  &::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    height: 100%;
    width: 15px;

    background: linear-gradient(92.48deg, #9dc8cf 3.44%, #263b58 111.01%);
    border-radius: 8px 0px 0px 8px;
  }

  h3 {
    font-size: 1.75rem;
    color: #263b58;
    margin-bottom: 1rem;
    max-width: 700px;
    margin-top: auto;
  }

  h4 {
    font-size: 1rem;
    color: #1a3547cc;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h5 {
    font-size: 1rem;
    color: ${({ theme }) => theme.light};
    font-weight: 600;
  }

  & + & {
    position: relative;

    &::after {
      content: "";

      position: absolute;

      top: -1rem;
      left: 0;

      height: 1px;
      width: 80%;
      max-width: 585px;
      background-color: ${({ theme }) => theme.light};
    }
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  margin-top: auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;

    b {
      font-size: 1rem;
      font-weight: 600;
      color: #263b58;
    }

    p {
      font-size: 0.75rem;
      color: #263b58;
    }
  }
`;
