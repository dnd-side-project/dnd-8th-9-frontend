import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  column-gap: 0.8rem;
  margin-bottom: 0.4rem;

  span {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.gray[400]};

    &::after {
      display: inline-block;
      margin-left: 0.8rem;
      content: "";
      width: 0.1rem;
      height: 0.8rem;
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  small {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const contentBoxCss = css`
  padding-block: 1.9rem 2.2rem;

  h2 {
    margin-bottom: 1.2rem;
  }
`;
