import styled from "@emotion/styled";

interface ITextProps {
  isOpened: boolean;
}

export const Container = styled.div`
  display: block;
`;

export const Review = styled.div`
  width: 66.6%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

// TODO: 이미지 width, height 변경
export const HeaderLeft = styled.div`
  img {
    width: 2.6rem;
    height: 2.6rem;
    margin-right: 1rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const HeaderRight = styled.div`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: 1.6rem;
`;

export const NickNameSite = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  display: flex;
  gap: 0.6rem;
  line-height: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const NickName = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const Source = styled.p`
  color: ${({ theme }) => theme.colors.gray[100]};
  :last-child {
    ::before {
      content: "|";
      width: 0.1rem;
      font-weight: 400;
      margin-right: 1rem;
    }
  }
`;

export const Taste = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  word-spacing: 0.3rem;
  line-height: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  span {
    margin-left: 1.2rem;
  }
`;

export const Option = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 1.8rem;
  font-weight: 500;
`;

export const Text = styled.div<ITextProps>`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 400;
  line-height: 1.8rem;
  margin-bottom: 0.4rem;

  /* text overflow */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  -webkit-line-clamp: ${({ isOpened }) => (isOpened ? 100 : 2)};
`;

export const Arrow = styled.div`
  margin-bottom: 1.2rem;
  svg {
    display: block;
    margin: 0 auto;
    stroke: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const LikeButton = styled.button`
  float: right;
  svg {
    margin-right: 0.6rem;
  }
`;
