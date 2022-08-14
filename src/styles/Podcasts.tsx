import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  background-color: ${({ theme }) => theme.background};

  padding: 1.75rem 0 8.375rem;

  z-index: 1;

  > .d-flex {

    flex-direction: column;
    justify-content: initial;
    align-items: flex-start;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
  }

  > * {
    width: 90%;
    max-width: 1360px;
  }

  > h2 {
    margin-top: 3rem;
    color: ${({ theme }) => theme.defaultSecondary};
    font-size: 2.5rem;
  }

  > h3 {
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.gray300};
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.light};
    margin: 1.5rem 0 3rem;
  }

  > p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.gray200};

    &::first-letter {
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2.25rem;

      &::first-letter {
        font-size: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: 2.625rem 0 8.375rem;
  }
`;

export const ReviwerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 4rem 0 11.25rem;

  .image-wrapper {
    width: 7.5rem;
    aspect-ratio: 1;

    border-radius: 50%;
    overflow: hidden;

    img {
      aspect-ratio: 1;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    margin: 2.75rem 0 0;
    padding-top: 1.5rem;

    &::before {
      content: "";
      width: 50%;
      height: 1px;
      background-color: ${({ theme }) => theme.light};
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    h4 {
      color: #4c575f;
      font-size: 1.5rem;
    }

    h5 {
      color: #2e638c;
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }

    p {
      color: #484848;
      margin-top: 0.5rem;
      font-size: 1.25rem;
      max-width: 380px;
      text-align: center;
    }

    @media (min-width: 768px) {
      padding: 1.5rem 0 1.5rem 2rem;
      margin: 0 0 0 2rem;

      align-items: flex-start;

      h4 {
        color: ${({ theme }) => theme.default};
      }

      h5 {
        margin-top: 1rem;
      }

      p {
        text-align: left;
        margin-top: 0.75rem;
      }

      &::before {
        content: "";
        width: 1px;
        height: 100%;
        top: 0;
        left: 0;
        transform: none;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 3rem;
  width: 100%;
`;
