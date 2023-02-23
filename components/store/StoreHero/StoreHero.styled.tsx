import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 50rem;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 7px solid ${({ theme }) => theme.colors.white[200]};
  padding: 0 1.6rem;
`;

export const MainInfoSection = styled(Section)`
  padding: 3rem 1.6rem 1.4rem;
  /* border-top-left-radius: 2.4rem;
  border-top-right-radius: 2.4rem;
  position: absolute;
  width: 100%;
  bottom: -290px;
  z-index: 1; */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    display: flex;
    align-items: flex-start;
  }
`;

export const InfoBox = styled(Box)`
  padding: 0 0.8rem;

  & > * {
    column-gap: 0.8rem;
  }
`;

export const Header = styled.div`
  gap: 0.8rem;
  margin-bottom: 1.1rem;

  h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes[18]};
    color: ${({ theme }) => theme.colors.black};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const tagStyle = ({ colors, fontSizes }: Theme) => css`
  background-color: ${colors.white[500]};
  color: ${colors.black};
  font-size: ${fontSizes[12]};
`;

export const Location = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Price = styled.p`
  display: flex;
  align-items: flex-end;
  margin: 1.6rem 0;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navy[400]};

  strong {
    font-size: ${({ theme }) => theme.fontSizes[16]};
    font-weight: 600;
  }
`;
