import Text from "@/components/shared/Text/Text";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  /* padding-bottom: 4.5rem; */
`;

export const ContentWrap = styled.div`
  padding: 0 1.6rem;
`;

export const PreviewWrap = styled.div`
  width: 100%;
  padding: 2.4rem 1.6rem 2rem;
`;

export const ReviewContent = styled.div`
  padding: 2.4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[300]};
`;

export const ReviewList = styled.div`
  width: 100%;
  padding: 3.2rem 1.6rem 2rem;
`;

export const ReviewTitle = styled(Text)`
  line-height: 1.9rem;
  margin-bottom: 1.6rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const buttonCss = ({ colors, fontSizes }: Theme) => css`
  border-radius: 0.8rem;
  border: 1px solid ${colors.gray[200]};
  width: 100%;
  margin-bottom: 3rem;
  font-size: ${fontSizes[14]};
  color: ${colors.gray[400]};
  font-weight: 500;
`;
