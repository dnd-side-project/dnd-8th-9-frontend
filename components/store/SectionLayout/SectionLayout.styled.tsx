import Link from "next/link";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 41.5rem;
`;

export const Main = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme["z-index"].storeContent};
  margin-top: 38.5rem;
  padding-bottom: 3rem;
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

export const FloatingButtonLink = styled(Link)`
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.pink[700]};
  padding: 1.55rem 3rem;
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;
