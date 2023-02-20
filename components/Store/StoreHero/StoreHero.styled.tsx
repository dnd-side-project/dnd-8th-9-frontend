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

  p {
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

export const ReviewBox = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.white[600]};
  border-radius: 1.2rem;
  width: 100%;
  padding: 1.6rem;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes[15]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy[400]};
    margin-bottom: 1.2rem;
  }

  & > * {
    display: flex;
    align-items: flex-start;
  }
`;

export const ReviewStats = styled.div`
  margin-bottom: 0.8rem;

  span {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    padding-left: 0.2rem;
    padding-right: 0.4rem;
  }

  small {
    font-size: ${({ theme }) => theme.fontSizes[12]};
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 0.8rem;
  }

  strong {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ReviewTags = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.2rem;

  .iconWrap {
    padding-top: 1rem;
  }
`;

export const optionStyle = ({ fontSizes }: Theme) => css`
  span {
    font-size: ${fontSizes[11]};
  }

  p {
    font-weight: 500;
    font-size: ${fontSizes[14]};
  }
`;

export const reviewButton = ({ colors, fontSizes }: Theme) => css`
  width: 100%;
  max-width: 48rem;
  color: ${colors.primary};
  font-size: ${fontSizes[14]};
  border: 1px solid ${colors.primary};
  background-color: transparent;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
`;
