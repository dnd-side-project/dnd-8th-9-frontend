import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 4.5rem);
  width: 100%;
  overflow: hidden;
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors.blue[900]};
  text-align: center;
`;

export const LogoWrap = styled.div`
  padding: 11.7rem 0 5.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.3rem;
`;

export const TextWrap = styled.div`
  margin-bottom: 2rem;

  span {
    line-height: 150%;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  bottom: -15rem;
  left: 0;
  width: 100%;
  height: 50rem;
`;
