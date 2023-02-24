import { css, Theme } from "@emotion/react";

export const Box = ({ colors, fontSizes }: Theme) => css`
  padding: 1.6rem;
  border-bottom: 0.7rem solid ${colors.white[200]};
  background-color: ${colors.white[100]};

  h2 {
    display: flex;
    column-gap: 0.4rem;
    font-size: ${fontSizes[16]};
    font-weight: 600;
    color: ${colors.black};
  }
`;
