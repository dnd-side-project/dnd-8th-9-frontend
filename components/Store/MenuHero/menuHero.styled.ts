import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Wrap = styled.section``;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 36rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MainBox = styled(Box)`
  padding-top: 3.2rem;
  padding-bottom: 1.2rem;
  row-gap: 1.2rem;

  h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes[18]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.dark[500]};

    strong {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSizes[20]};
    }
  }
`;

export const tagStyle = ({ colors, fontSizes }: Theme) => css`
  background-color: ${colors.gray[95]};
  color: ${colors.gray[700]};
  font-size: ${fontSizes[12]};
`;

export const InfoBox = styled(Box)`
  row-gap: 1.6rem;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[90]};
  border-bottom: 0.7rem solid ${({ theme }) => theme.colors.gray[70]};

  small {
    font-size: ${({ theme }) => theme.fontSizes[12]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const InfoContent = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  column-gap: 1.2rem;
  row-gap: 1.6rem;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[14]};
  color: ${({ theme }) => theme.colors.dark[500]};
  font-weight: 600;
`;

export const Desc = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[13]};
  color: ${({ theme }) => theme.colors.gray[700]};
`;
