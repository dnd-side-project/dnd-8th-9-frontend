import styled from "@emotion/styled";

export const NavbarWrap = styled.div<{
  bgColor: string;
  scrollBgColor: string;
  isScrolled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.6rem;
  width: inherit;
  padding: 1.6rem;
  background-color: ${({ bgColor, isScrolled, scrollBgColor }) =>
    isScrolled && !!scrollBgColor ? scrollBgColor : bgColor};
  position: fixed;
  z-index: 999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  > * {
    display: flex;
    align-items: center;
    width: 33.3%;
  }

  .previousButton {
    justify-content: flex-start;
  }

  h1 {
    justify-content: center;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[16]};
    color: ${({ theme }) => theme.colors.black};
    visibility: ${({ isScrolled, scrollBgColor }) =>
      isScrolled || !scrollBgColor ? "visible" : "hidden"};
  }

  .etcButtons {
    justify-content: flex-end;
    column-gap: 2rem;
  }
`;
