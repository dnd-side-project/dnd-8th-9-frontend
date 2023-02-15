import { css, Theme } from "@emotion/react";

export const buttonShape = {
  square: css`
    height: 4.8rem;
    border-radius: 0.8rem;
    padding: 1.45rem 2.4rem;
  `,
  round: css`
    height: 3.2rem;
    border-radius: 1.6rem;
    padding: 0.8rem 1.2rem;
  `,
};

export const button = ({ colors }: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: ${colors.white};

  > * {
    font-size: inherit;
  }
`;
