import Button from "@/components/shared/Button/Button";
import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  background-color: #041449;
  width: 100%;
  height: 80rem;
  position: relative;
`;

export const LogoWrap = styled.div`
  position: absolute;
  top: 18.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
  text-align: center;

  svg {
    margin: 0 auto;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 50rem;
  bottom: 2.8rem;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 1.6rem;
`;

export const LaterButton = styled(Button)`
  background-color: transparent;
  height: 4.8rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey[100]};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[15]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
`;
