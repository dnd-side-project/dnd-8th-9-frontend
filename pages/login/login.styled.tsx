import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 5.6rem);
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[900]};
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  bottom: -6rem;
  left: 0;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.3rem;
`;

export const LogoImageWrap = styled.div`
  position: relative;
  width: 8.8rem;
  height: 2.3rem;
`;

export const MiddleWrap = styled.div`
  margin-block: clamp(2rem, 3.8rem, 5.8rem);
  padding: 0 1.6rem;
`;

export const TextWrap = styled.div`
  margin-bottom: 2rem;
  span {
    line-height: 150%;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  aspect-ratio: 1.1/1;
`;
