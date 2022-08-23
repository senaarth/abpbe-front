import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.background};

  border-radius: 8px 8px 0 0;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  background-color: ${({ theme }) => theme.background};

  padding: 1.75rem 0;

  z-index: 1;

  > div {
    max-width: 1360px;
  }

  @media (min-width: 768px) {
    margin-top: -8px;
    border-radius: 8px 8px 0 0;
    padding: 2.625rem 0;
  }
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 90%;

  margin: 0 auto 1.875rem auto;

  h2 {
    margin-bottom: 2.75rem;
  }

  a {
    max-width: 22.5rem;
  }

  > button {
    max-width: 360px;
    margin: 1.75rem auto 0 auto;

    @media (min-width: 849px) {
      margin: 2.75rem 0 0 auto;
    }
  }
`;

export const CoursesList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.75rem;

  width: 100%;

  position: relative;

  @media (min-width: 849px) {
    gap: 2.75rem;
    justify-content: flex-start;
  }
`;
