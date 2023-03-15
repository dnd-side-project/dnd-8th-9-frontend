import styled from "@emotion/styled";

export const Key = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[200]};
`;

export const Value = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[100]};

  > p {
    color: ${({ theme }) => theme.colors.grey[800]};
    line-height: 150%;
  }
`;

export const Grid = styled.div<{ option: "notice" | "info" }>`
  display: grid;
  grid-gap: 0.06rem;
  grid-template-columns: [sidebar] 2fr [content] 3fr;
  border-top: 1.2px solid ${({ theme }) => theme.colors.grey[500]};
  border-bottom: 1.2px solid ${({ theme }) => theme.colors.grey[500]};
  background-color: ${({ theme }) => theme.colors.grey[400]};

  > * {
    padding: 1.4rem 1.6rem;
  }

  ${Value} {
    text-align: ${({ option }) => (option === "notice" ? "center" : "left")};
  }
`;
