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

export const CellKey = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 500;
  width: 40%;
  padding-left: 2.4rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const CellValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 400;
  width: 60%;
  padding: 0 1.1rem 0 1.1rem;
  padding-left: 1.1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;
