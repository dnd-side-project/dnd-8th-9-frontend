import styled from "@emotion/styled";

export const Container = styled.div<{ length: number }>`
  width: 100%;
  display: flex;
  height: 7.4rem;
  background-color: ${({ theme }) => theme.colors.white[100]};
  box-shadow: 0px -4px 12px rgba(80, 83, 105, 0.08);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: ${({ theme }) => theme["z-index"].gnb};

  > * {
    width: calc(100% / ${({ length }) => length});
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
