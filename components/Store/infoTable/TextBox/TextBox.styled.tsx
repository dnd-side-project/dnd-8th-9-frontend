import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.navy[100]};
  border-radius: 8px;
  margin-bottom: 0.8rem;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.navy[400]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 600;
  line-height: 1.7rem;
  margin-bottom: 1.2rem;
`;

export const Value = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 0.8rem;
  ::before {
    content: "•";
    margin-right: 0.6rem;
  }
`;
