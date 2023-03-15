import Button from "@/components/shared/Button/Button";
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

export const Footer = styled.div`
  height: 8.6rem;
  width: 100%;
  background-color: transparent;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme["z-index"].gnb};
`;

export const FooterButton = styled(Button)`
  height: 5.2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.pink[700]};
  padding: 1.55rem 3rem;

  span {
    margin-left: 0.4rem;
  }
`;
