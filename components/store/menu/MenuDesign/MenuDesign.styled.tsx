import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const contentDesignBoxCss = css`
  padding-block: 2.4rem 4rem;

  h2 {
    margin-bottom: 2rem;
  }
`;

export const DesignContent = styled.div<{ isLast: boolean }>`
  margin-bottom: ${({ isLast }) => (isLast ? 0 : "1.6rem")};
  display: flex;
  flex-direction: column;
  row-gap: ${({ isLast }) => (isLast ? 0 : "0.8rem")};

  span {
    font-size: ${({ theme }) => theme.fontSizes[15]};
    color: ${({ theme }) => theme.colors.navy[400]};
    font-weight: 600;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
