import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ICellProps {
  option: string;
}

export const Container = styled.div`
  width: 32rem;
  display: flex;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-left: 1px solid ${({ theme }) => theme.colors.gray[100]};
  :first-child {
    border-top: 2px solid ${({ theme }) => theme.colors.gray[500]};
  }
  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const Cell = styled.div<ICellProps>`
  ${({ option, theme }) => {
    return option === "notice"
      ? css`
          font-size: ${theme.fontSizes[14]};
          border-right: 1px solid ${theme.colors.gray[100]};
          font-weight: 500;
          width: 50%;
          height: 4.1rem;
          line-height: 4.1rem;
          padding-left: 1.9rem;
        `
      : css`
          font-size: ${theme.fontSizes[12]};
          border-right: 1px solid ${theme.colors.gray[100]};
          :first-child {
            font-weight: 500;
            width: 40%;
            padding-left: 2.4rem;
            background-color: ${theme.colors.gray[50]};
          }
          :last-child {
            font-weight: 400;
            width: 60%;
            padding: 0 1.1rem 0 1.1rem;
            padding-left: 1.1rem;
          }
        `;
  }}
`;
