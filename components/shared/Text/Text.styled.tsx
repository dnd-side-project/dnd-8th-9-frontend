import styled from "@emotion/styled";

export const Text = styled.span<{ size: number; weight: number; color: string }>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
