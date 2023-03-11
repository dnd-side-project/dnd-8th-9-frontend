import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8000;
`;

export const BackgroundLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentWrap = styled.div`
  position: absolute;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
