import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const clickedButton = ({ colors, fontSizes }: Theme) => css`
  background-color: ${colors.navy[400]};
  color: ${colors.white[100]};
  font-size: ${fontSizes[13]};
  line-height: 1.6rem;
  height: 2.8rem;
`;

export const button = ({ colors, fontSizes }: Theme) => css`
  border: 1px solid ${colors.white[500]};
  color: ${colors.gray[400]};
  font-size: ${fontSizes[13]};
  line-height: 1.6rem;
  height: 2.8rem;
`;
