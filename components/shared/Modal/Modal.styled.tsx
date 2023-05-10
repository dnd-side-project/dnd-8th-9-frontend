import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  max-width: 48rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8000;
`;

export const BackgroundLayer = styled.div<{ opacity: boolean }>`
  width: 100%;
  height: 100%;
  background-color: #202020;
  opacity: ${({ opacity }) => (opacity ? 0.7 : 1)};
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentWrap = styled.div`
  width: 100%;
  position: absolute;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IconWrap = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;
