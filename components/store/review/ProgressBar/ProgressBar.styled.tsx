import styled from "@emotion/styled";

export const StatItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div<{ count: number; rank: number; totals: number }>`
  background-color: ${({ theme }) => theme.colors.grey[100]};
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
  flex-grow: 1;

  div {
    width: ${({ count, totals }) => Math.floor((count / totals) * 100)}%;
    height: 100%;
    border-radius: 0.8rem;
    background-color: ${({ theme, rank }) => {
      if (rank === 0) {
        return theme.colors.pink[700];
      }
      if (rank === 1) {
        return theme.colors.pink[600];
      }
      return theme.colors.pink[400];
    }};
  }
`;

export const StatContainer = styled.div`
  &.isPreview {
    row-gap: 1.6rem;
    padding: 2rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.blue[100]};
    border: none;

    ${Bar} {
      background-color: ${({ theme }) => theme.colors.grey[100]};
      height: 0.8rem;
    }

    ${StatItem} {
      > span:first-child {
        min-width: 13rem;
      }
    }
  }

  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  padding: 3.2rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;

  ${StatItem} {
    > span:first-child {
      min-width: 10.5rem;
    }

    > span:last-child {
      min-width: 3rem;
      text-align: right;
    }
  }

  ${Bar} {
    background-color: ${({ theme }) => theme.colors.grey[200]};
    height: 0.6rem;
  }
`;
