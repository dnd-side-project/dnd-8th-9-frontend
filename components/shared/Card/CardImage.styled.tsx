import styled from "@emotion/styled";
import Text from "../Text/Text";

export const Wrap = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
`;

export const CarouselWrap = styled.div`
  height: 18.5rem;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const TagsWrap = styled.div`
  display: flex;
  column-gap: 0.8rem;
  position: absolute;
  left: 0.6rem;
  top: 0.6rem;
  z-index: ${({ theme }) => theme["z-index"].navbar};
`;

export const RankBadge = styled.div`
  z-index: ${({ theme }) => theme["z-index"].navbar};
  width: 0;
  height: 0;
  border-bottom: 4rem solid transparent;
  border-left: 4.2rem solid ${({ theme }) => theme.colors.pink[700]};

  position: absolute;
  left: 0;
  top: 0;
`;

export const RankNumber = styled(Text)`
  position: absolute;
  left: -3rem;
  top: 0.5rem;
  z-index: ${({ theme }) => theme["z-index"].imageIcon};
`;

export const BookmarkIconWrap = styled.button`
  max-width: 3.2rem;
  max-height: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: white;
  position: absolute;
  right: 0.6rem;
  bottom: 0.6rem;
  z-index: ${({ theme }) => theme["z-index"].navbar};
  cursor: pointer;
`;

export const CheckIconWrap = styled.button`
  max-width: 2.4rem;
  max-height: 2.4rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  position: absolute;
  right: 0.6rem;
  top: 0.6rem;
  z-index: ${({ theme }) => theme["z-index"].navbar};
  cursor: pointer;

  &.isSelected {
    background-color: ${({ theme }) => theme.colors.blue[800]};
  }
`;
