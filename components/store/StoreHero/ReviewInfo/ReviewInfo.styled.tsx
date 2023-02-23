import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "../MainInfo/MainInfo.styled";

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
