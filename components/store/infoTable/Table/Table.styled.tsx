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
          :first-child {
            padding-left: 1.9rem;
            background-color: ${theme.colors.navy[100]};
          }
          :last-child {
            text-align: center;
          }
        `
      : css`
          border-right: 1px solid ${theme.colors.gray[100]};
          :first-child {
            font-size: ${theme.fontSizes[14]};
            font-weight: 500;
            width: 40%;
            padding: 1.4rem 1.6rem;
            background-color: ${theme.colors.navy[100]};
          }
          :last-child {
            font-size: ${theme.fontSizes[12]};
            font-weight: 400;
            width: 60%;
            padding: 1.4rem 1.6rem;
          }
        `;
  }}
`;
