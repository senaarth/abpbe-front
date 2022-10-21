import styled from "styled-components";

export const Container = styled.form`
  width: 90%;
  max-width: 594px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3rem 0;
  margin-bottom: 8.5rem;

  border-radius: 6px;
  background-color: #eeeeee;

  > * {
    width: 80%;
  }

  h2 {
    color: ${({ theme }) => theme.defaultSecondary};
    font-size: 1.75rem;
  }
`;
