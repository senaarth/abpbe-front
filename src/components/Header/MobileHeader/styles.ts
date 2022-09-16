import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.25rem 0;

  width: 100%;
  background-color: #12253b;

  position: fixed;
  z-index: 99;

  > div:first-child {
    width: 90%;
    max-width: 1360px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > a {
      width: 30%;
      max-width: 100px;

      img {
        width: 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  z-index: 99;

  width: 26px;
  height: 20px;

  background-color: transparent;
  border: 0;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    width: 100%;
    height: 3px !important;

    background-color: white;
    border-radius: 4px;

    transition: all 0.4s;
  }

  &.open {
    span.line-1 {
      transform: rotate(-45deg) translate(-5px, 7px);
    }
    span.line-2 {
      opacity: 0;
    }
    span.line-3 {
      transform: rotate(45deg) translate(-5px, -7px);
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  background-color: #12253b;

  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  top: -100vh;
  transition: all 0.4s;

  &.open {
    inset: 0;
  }

  .associado {
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.gray600};
    text-decoration: none;
    margin-top: 1.875rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 90%;
    margin-top: 1.5rem;

    button {
      background: transparent;
      cursor: pointer;
      border: 0;
      color: ${({ theme }) => theme.gray600};
      display: flex;
      align-items: center;
    }

    > button {
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.4s;

      margin-bottom: 1.875rem;

      img {
        margin-left: 1rem;
        width: 0.75rem;
        object-fit: contain;
        transition: all 0.4s;
      }

      &.open {
        width: 100%;
        justify-content: center;

        font-size: 1.25rem;
        color: #88c9d0;

        img {
          transform: rotate(180deg);
        }
      }
    }

    > button:last-child {
      color: green;
    }

    ul {
      width: 100%;
      height: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      button {
        flex-direction: column;
        align-items: center;
      }

      button * {
        font-size: 0;
        text-align: center;
      }

      &,
      button {
        transition: all 0.4s;
      }

      &.open {
        height: unset;

        button {
          width: 100%;
          padding-bottom: 1rem;
          border-bottom: 1px solid ${({ theme }) => theme.gray600};
        }

        button strong {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        button p {
          font-size: 0.75rem;
        }

        button + button {
          margin-top: 1.875rem;
        }

        button:last-child {
          margin-bottom: 1.875rem;
        }
      }
    }
  }
`;
