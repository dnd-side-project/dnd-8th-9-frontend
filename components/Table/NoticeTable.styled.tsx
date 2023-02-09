import styled from "@emotion/styled";

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

export const Cell = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 500;
  width: 50%;
  height: 4.1rem;
  line-height: 4.1rem;
  padding-left: 1.9rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;
