import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
  margin: auto;
  width: 32rem;
`;

export const Title = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  line-height: 1.7rem;
  margin-bottom: 1.6rem;
`;
