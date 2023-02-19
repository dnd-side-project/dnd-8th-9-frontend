import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark[300]};
  padding: 1rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes[22]};
  font-weight: bold;
`;
