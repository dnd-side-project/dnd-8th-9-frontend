import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const ContentWrap = styled.div`
  padding: 0 1.6rem;
`;

export const ReviewContent = styled.div`
  padding: 2.4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[300]};
`;

export const ReviewTitle = styled(Text)`
  line-height: 1.9rem;
  margin-bottom: 1.6rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 5rem;
`;
