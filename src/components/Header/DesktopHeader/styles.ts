import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.375rem 0;

  width: 100%;
  max-width: 100%;
  transition: background-color 0.25s;

  position: fixed;
  z-index: 99;

  > div:first-child {
    width: 90%;
    max-width: 1360px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > a {
      width: 30%;
      max-width: 100px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        transition: filter 0.4s;
        filter: grayscale(1);
      }

      &:hover {
        filter: none;

        img {
          filter: none;
        }
      }
    }

    ul a {
      font-size: 0.875rem;
      font-weight: 600;
      transition: all 0.4s;
      text-decoration: none;
    }
  }

  &.transparent > div:first-child {
    ul li > a {
      color: #eee;

      &:hover {
        color: #88c9d0;
      }
    }

    ul li > a {
      img {
        filter: grayscale(1);
      }

      &,
      &:hover img {
        filter: none;
      }
    }
  }

  &.colored > div:first-child {
    > a {
      img {
        filter: none;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    ul li > a {
      color: ${({ theme }) => theme.aux4};

      &:hover {
        color: #284e85;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    margin: 0 auto;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const GlassIcon = styled.svg`
  margin-left: 1.5rem;

  cursor: pointer;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.15);
  }

  path {
    transition: fill 0.4s;
  }

  &.colored {
    path {
      fill: ${({ theme }) => theme.aux4};
    }
  }
`;
