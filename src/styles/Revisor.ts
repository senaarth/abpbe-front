import styled from "styled-components";

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 7.75rem;

  > :not(footer) {
    width: 90%;
    max-width: 1360px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-bottom: 4.625rem;

  > p {
    position: relative;
    padding-bottom: 2rem;
    margin-top: 2rem;

    position: relative;

    &::after {
      content: "";

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 80%;
      max-width: 820px;
      height: 1px;
      background: linear-gradient(
        92.48deg,
        rgba(157, 200, 207, 0.6) 3.44%,
        rgba(38, 59, 88, 0.6) 111.01%
      );

      opacity: 0.6;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 2rem;

  width: 100%;

  h2,
  h3 {
    color: ${({ theme }) => theme.dark};
  }

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;

    span {
      opacity: 0.6;
    }
  }

  .divider {
    width: 100%;
    margin: 1.375rem 0 2rem;
    height: 1px;
    background: linear-gradient(
      92.48deg,
      rgba(157, 200, 207, 0.6) 3.44%,
      rgba(38, 59, 88, 0.6) 111.01%
    );
  }
`;

export const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  position: relative;

  &::after {
    content: "";
    transition: all 0.4s;
  }

  &.invalid::after {
    content: "* Marcar pelo menos uma";
    position: absolute;
    top: -0.75rem;
    left: 0;
    color: ${({ theme }) => theme.danger};
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CheckboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100;
`;
