import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const contentTasteBoxCss = css`
  padding-block: 2.4rem 4rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const TasteContent = styled.div`
  .note {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[400]};
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 0.06rem solid ${({ theme }) => theme.colors.white[500]};
  }

  .tasteList {
    display: grid;
    grid-template-columns: 2.2rem auto;
    column-gap: 1.2rem;
    row-gap: 1.6rem;
  }

  .number {
    width: 100%;
    height: 100%;

    &,
    & span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      width: 100%;
      aspect-ratio: 1 / 1;
      background-color: ${({ theme }) => theme.colors.navy[400]};
      color: ${({ theme }) => theme.colors.white[100]};
      border-radius: 50%;
    }
  }

  .text {
    span {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.navy[400]};
    }

    p {
      margin-top: 0.4rem;
      font-size: ${({ theme }) => theme.fontSizes[13]};
      // NOTE: #7C7C7C 인데 색깔 추가하면 다시 theme 리팩토링 해야해서 최대한 가까운 색으로 바꿈.
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;
