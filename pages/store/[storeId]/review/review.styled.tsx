import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  /* padding-bottom: 4.5rem; */
`;

export const ContentWrap = styled.div`
  padding: 0 1.6rem;
`;

export const PreviewWrap = styled.div`
  width: 100%;
  padding: 2.4rem 1.6rem 2rem;
`;

export const ReviewListWrap = styled.div`
  width: 100%;
  padding: 3.2rem 1.6rem 2rem;
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
