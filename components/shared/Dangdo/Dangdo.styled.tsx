import styled from "@emotion/styled";
import Text from "../Text/Text";

export const TEXT_SIZE = {
  s: "12px",
  m: "14px",
  l: "20px",
};

export const Percent = styled(Text)``;

export const Container = styled.div<{ size: "s" | "m" | "l" }>`
  display: flex;
  align-items: center;
  column-gap: ${({ size }) => (size === "l" ? "0.4rem" : "0.2rem")};

  ${Percent} {
    font-weight: ${({ size }) => (size === "l" ? 700 : 600)};
    font-size: ${({ size }) => TEXT_SIZE[size]};
  }
`;
