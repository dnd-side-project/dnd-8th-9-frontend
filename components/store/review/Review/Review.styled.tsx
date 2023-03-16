import Button from "@/components/shared/Button/Button";
import Tag from "@/components/shared/Tag/Tag";
import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  padding: 2.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white[500]};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const MenuOption = styled(Text)`
  margin-bottom: 1rem;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 26.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 1.2rem;
`;

export const Rating = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  word-spacing: 0.3rem;
  line-height: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
`;

export const ReviewTag = styled(Tag)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.pink[200]};
  margin-left: 0.6rem;
  border: none;
  border-radius: 1.3rem;
`;

export const ReviewText = styled(Text)`
  line-height: 150%;
  margin-bottom: 1.6rem;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LikeButton = styled(Button)<{ isLiked: boolean }>`
  height: 3.6rem;
  padding: 0.8rem 1.9rem;
  border: 1px solid
    ${({ theme, isLiked }) => (isLiked ? theme.colors.blue[700] : theme.colors.grey[500])};
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  border-radius: 3.3rem;
`;
