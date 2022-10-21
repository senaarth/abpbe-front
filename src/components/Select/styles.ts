import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 330px;
  font-family: "Open Sans", sans-serif;
  margin-top: 1.5rem;
  @media (min-width: 768px) {
    margin-top: 0;
    align-items: center;
    flex-direction: row;
  }

  > span {
    margin-right: 0.5rem;
    color: #838383;
  }

  > select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    color: rgba(46, 99, 140, 0.79);
    font-size: 15px;
    font-weight: 700;
    cursor: inherit;
    line-height: inherit;
    border: 1.5px solid rgba(46, 99, 140, 0.29);
    border-radius: 5px;
    padding: 0 2.5rem !important;
    height: 2.3rem;
    max-height: 50px;
    width: 11.7rem;
    max-width: 200px;
    background-image: url("/images/select_arrow.svg");
    background-repeat: no-repeat, repeat;
    background-position: right 3.5rem top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    outline: none;
    margin-top: 0.5rem;

    @media (min-width: 768px) {
      width: 8rem;
      max-width: 150px;
      padding: 0 1rem !important;
      margin-top: 0;
      background-position: right 1.3rem top 50%, 0 0;
    }

    option {
      font-size: 14px;
      color: #484848db;
      font-weight: 600;
      background-color: #fff;

      &:checked {
        color: red;
      }
    }
  }
`;
