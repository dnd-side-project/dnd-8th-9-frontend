import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 48.5rem;
`;

export const Main = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme["z-index"].storeContent};
  margin-top: 47rem;
`;
