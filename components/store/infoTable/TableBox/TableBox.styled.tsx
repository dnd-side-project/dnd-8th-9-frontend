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
