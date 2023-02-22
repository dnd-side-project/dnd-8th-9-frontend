import styled from "@emotion/styled";

export const CountTitle = styled.div`
  height: 1.9rem;
  line-height: 1.9rem;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1.6rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
