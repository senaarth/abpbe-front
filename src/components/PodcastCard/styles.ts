import styled from "styled-components";

export const PodcastContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  max-width: 314px;
  text-decoration: none;

  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.dark};

  .banner {
    width: 100%;
    aspect-ratio: 1;
    opacity: 0.3;
  }

  .play {
    width: 90px;
    height: 90px;
    object-fit: contain;
    aspect-ratio: 1;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 0.75rem;

  .title {
    font-family: "Open Sans", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.dark};
    text-align: initial;

    ::after {
      content: "";
      background: none;
    }
  }

  .owner {
    font-size: 1.5rem;
    font-weight: 700;
    color: #838383;
  }

  .title,
  .owner {
    text-decoration: none;
  }
`;
