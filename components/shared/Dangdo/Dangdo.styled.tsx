import styled from "@emotion/styled";
import Text from "../Text/Text";

export const TEXT_SIZE = {
  s: "12px",
  m: "14px",
  l: "16px",
  xl: "20px",
};

export const Percent = styled(Text)``;

export const Container = styled.div<{ size: "s" | "m" | "l" | "xl" }>`
  display: flex;
  align-items: center;
  column-gap: ${({ size }) => (size === "xl" ? "0.4rem" : "0.2rem")};

  ${Percent} {
    font-weight: ${({ size }) => (size === "xl" ? 700 : 600)};
    font-size: ${({ size }) => TEXT_SIZE[size]};
    padding-top: ${({ size }) => size === "l" && "0.3rem"};
  }
`;
