import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const ReviewListWrap = styled.div`
  border-top: 0.7rem solid ${({ theme }) => theme.colors.white[600]};
  width: 100%;
  padding: 3.2rem 1.6rem 2rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes[16]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};

    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      margin-left: 0.4rem;
    }
  }
`;

export const buttonCss = ({ colors, fontSizes }: Theme) => css`
  border-radius: 0.8rem;
  border: 1px solid ${colors.gray[200]};
  width: 100%;
  margin-bottom: 3rem;
  font-size: ${fontSizes[14]};
  color: ${colors.gray[400]};
  font-weight: 500;
`;
