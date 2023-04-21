import styled from "@emotion/styled";

export const TabBox = styled.ul<{ size: number }>`
  max-width: 48rem;
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey[700]};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 500;
`;

export const TabItem = styled.li<{ type: "button" | "link" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid
    ${({ theme, type }) => (type === "link" ? theme.colors.grey[300] : "transparent")};

  &,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  &.isSelected {
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey[900]};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grey[900]};
    transition: all 0.2s ease-in-out;

    button {
      color: ${({ theme }) => theme.colors.grey[900]};
      font-weight: 600;
    }
  }

  button {
    color: ${({ theme }) => theme.colors.grey[700]};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;
