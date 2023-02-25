import { css, Theme } from "@emotion/react";
import { contentBoxCss } from "../RecieveMethod/RecieveMethod.styled";

export const contentOrderBoxCss = ({ colors, fontSizes }: Theme) => css`
  ${contentBoxCss};

  p {
    font-weight: 500;
    color: ${colors.gray[400]};
    font-size: ${fontSizes[13]};

    strong {
      font-size: inherit;
      font-weight: 600;
      color: ${colors.primary};
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    column-gap: 0.4rem;
    margin-top: 1.8rem;
  }
`;

export const instaButtonCss = ({ colors, fontSizes }: Theme) => css`
  width: 100%;
  max-width: 48rem;
  color: ${colors.navy[400]};
  font-size: ${fontSizes[12]};
  border: 1px solid ${colors.navy[400]};
  background-color: transparent;
  gap: 0.5rem;
`;

export const kakaoButtonCss = ({ colors, fontSizes }: Theme) => css`
  width: 100%;
  max-width: 48rem;
  font-size: ${fontSizes[12]};
  background-color: ${colors.navy[400]};
  gap: 0.5rem;

  span {
    color: ${colors.white[100]};
  }
`;
