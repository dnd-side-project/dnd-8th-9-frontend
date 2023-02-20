import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3.2em 1.6rem 2.2rem;
  border-bottom: 7px solid ${({ theme }) => theme.colors.white[200]};
`;

export const Review = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const ProgressBox = styled.div`
  width: 100%;
  border: 1.2px solid ${({ theme }) => theme.colors.white[300]};
  border-radius: 8px;
  margin-bottom: 1.2rem;
`;

export const Rating = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  width: 6.7rem;
  line-height: 1.9rem;
`;

export const TotalReviews = styled.div`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 500;
  line-height: 1.4rem;
`;

export const OverallComment = styled.div`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 500;
  line-height: 1.7rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
  margin-bottom: 1.6rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 0.4rem;
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.4rem;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 1.2rem;
  gap: 0.2rem;
  font-weight: 500;
  cursor: pointer;

  svg {
    stroke: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const Button = (color: string, fontSize: string) => css`
  width: 100%;
  max-width: 48rem;
  color: ${color};
  border: 1px solid ${color};
  font-size: ${fontSize};
  gap: 0.4rem;
`;
