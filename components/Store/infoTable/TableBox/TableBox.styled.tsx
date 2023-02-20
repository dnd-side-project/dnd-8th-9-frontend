import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 2.4rem 1.6rem 3.2rem;
  width: 100%;
  margin: 0 auto;
  border-bottom: 0.7rem solid ${({ theme }) => theme.colors.white[200]};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  height: 1.9rem;
  margin: 1.6rem 0;
`;
