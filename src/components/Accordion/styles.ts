import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1360px;

  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  margin-top: 2.75rem;

  border-top: 3px solid ${({ theme }) => theme.light};
`;
