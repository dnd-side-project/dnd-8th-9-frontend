import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const CountTitle = styled(Text)`
  line-height: 1.9rem;
  margin-bottom: 1.6rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PreviewImages = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.4rem;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 7.9rem;
  aspect-ratio: 1/1;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const ShowMore = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(32, 32, 32, 0.6);
`;
