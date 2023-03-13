import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors.blue[900]};
  text-align: center;
`;

export const LogoWrap = styled.div`
  padding: 11.7rem 0 5.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrap = styled.div`
  margin-bottom: 2rem;
  span {
    line-height: 150%;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  bottom: -13rem;
  left: 0;
  width: 100%;
  height: 50rem;
`;
