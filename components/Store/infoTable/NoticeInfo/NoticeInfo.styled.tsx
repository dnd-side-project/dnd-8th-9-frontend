import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  padding: 2.4rem 1.6rem 3.2rem;
  border-bottom: 0.7rem solid ${({ theme }) => theme.colors.white[200]};
`;

export const Title = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  line-height: 1.7rem;
  margin-bottom: 1.6rem;
`;
