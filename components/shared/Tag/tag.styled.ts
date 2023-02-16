import { css, Theme } from "@emotion/react";

export const tagStyle = {
  square: ({ colors, fontSizes }: Theme) => css`
    background-color: ${colors.dark[500]};
    color: ${colors.white};
    padding: 0 0.4rem;
    font-size: ${fontSizes[10]};
    line-height: ${fontSizes[12]};
    width: 2.6rem;
  `,
  icon: ({ colors, fontSizes }: Theme) => css`
    background-color: ${colors.dark[500]};
    color: ${colors.white};
    width: 5.7rem;
    height: 2.4rem;
    font-size: ${fontSizes[12]};
    border-radius: 1.2rem;
    gap: 0.2rem;
  `,
  single: ({ colors, fontSizes }: Theme) => css`
    border: 1px solid ${colors.primary};
    border-radius: 1.2rem;
    color: ${colors.primary};
    padding: 0 1.2rem;
    height: 2.4rem;
    font-size: ${fontSizes[12]};
    max-width: 15rem;
  `,
  double: ({ colors, fontSizes }: Theme) => css`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 0 1.2rem;
    height: 3rem;
    font-size: ${fontSizes[14]};
    border-radius: 1.4rem;
    gap: 0.4rem;
    max-width: 15rem;
  `,
};

export const tag = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
