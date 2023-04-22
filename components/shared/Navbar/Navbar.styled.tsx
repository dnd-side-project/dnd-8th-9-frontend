import styled from "@emotion/styled";

export const NavWrap = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;
  position: fixed;
  z-index: ${({ theme }) => theme["z-index"].navbar};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.grey[100]};

  > * {
    display: flex;
    align-items: center;
    width: 33.3%;
  }
`;

export const NavLeft = styled.div`
  justify-content: flex-start;
  column-gap: 2.4rem;
`;

export const NavTitle = styled.div`
  justify-content: center;
`;

export const NavRight = styled.div`
  justify-content: flex-end;
  column-gap: 2.4rem;
`;
