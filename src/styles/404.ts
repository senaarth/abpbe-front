import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/images/bg_laptop.png");
`;

export const ContentContainer = styled.main`
  width: 90%;
  max-width: 456px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3.75rem 0 1.75rem 0;

  border-radius: 10px;
  background-color: #eeeeee;

  h1 {
    font-size: 4rem;
    color: #2e638c;
    margin-bottom: 2.5rem;

    display: flex;
    position: relative;

    &::after {
      content: "";

      width: 150%;
      height: 2.5rem;

      position: absolute;
      bottom: -1.75rem;
      left: 50%;
      transform: translateX(-50%);
      background: url("/images/title_blur.png") center center no-repeat;
      background-size: contain;
    }
  }

  h2,
  p {
    color: ${({ theme }) => theme.defaultSecondary};
    width: 90%;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 255px;
  }
`;
