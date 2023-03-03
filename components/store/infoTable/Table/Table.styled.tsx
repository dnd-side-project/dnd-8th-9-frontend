import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ICellProps {
  option: string;
}

export const Container = styled.div`
  width: 32rem;
  display: flex;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[600]};

  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[600]};
  }
`;

export const Cell = styled.div<ICellProps>`
  ${({ option, theme }) => {
    return option === "left"
      ? css`
          width: 40%;
          font-size: ${theme.fontSizes[14]};
          border-right: 1px solid ${theme.colors.grey[600]};
          font-weight: 500;
          width: 50%;
          line-height: 4.1rem;
          padding-left: 1.6rem;
          background-color: ${theme.colors.navy[100]};
        `
      : css`
          width: 60%;
          font-size: ${theme.fontSizes[14]};
          font-weight: 500;
          padding: 1.4rem 1.6rem;
          /* border-right: 1px solid ${theme.colors.grey[600]}; */
        `;
  }}
`;
