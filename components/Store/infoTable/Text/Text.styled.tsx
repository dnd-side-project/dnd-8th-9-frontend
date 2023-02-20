import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.navy[100]};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  border-radius: 8px;
  font-weight: 400;
  line-height: 2rem;
  white-space: pre-wrap;
`;
