import styled from "@emotion/styled";

export const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

export const FixedWidth = styled.div`
  width: 480px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Main = styled.main<{ hasNav: boolean; hasGnb: boolean }>`
  padding-bottom: ${({ hasGnb }) => (hasGnb ? "7rem" : 0)};
  padding-top: ${({ hasNav }) => (hasNav ? "5.6rem" : 0)};
`;
