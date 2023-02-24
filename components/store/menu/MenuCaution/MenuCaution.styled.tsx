import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CautionContent = styled.ul`
  list-style: inside;
  list-style-position: outside;
  background-color: ${({ theme }) => theme.colors.navy[100]};
  padding: 2rem 1.6rem;
  border-radius: 0.8rem;

  li {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    color: ${({ theme }) => theme.colors.black};
    margin-left: 1.6rem;

    :not(:last-child) {
      padding-bottom: 1.2rem;
    }
  }
`;

export const contentCautionBoxCss = css`
  padding-block: 2.4rem 4rem;
  h2 {
    margin-bottom: 1.6rem;
  }
`;
