import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 5.6rem);
  overflow: hidden;
  width: 100%;
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors.blue[900]};
  text-align: center;
`;

export const LogoWrap = styled.div`
  padding: 10rem 0 5.8rem;
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

export const TextWrap = styled.div`
  margin-bottom: 2rem;
  span {
    line-height: 150%;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  margin-top: 5rem;
  left: 0;
  width: 100%;
  aspect-ratio: 1.1/1;
`;
