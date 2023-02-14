import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
`;

export const HeaderRight = styled.div`
  color: #b1b1b1;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: 16px;
`;

export const NickNameSite = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  display: flex;
  gap: 6px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const NickName = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const Source = styled.p`
  color: ${({ theme }) => theme.colors.gray[100]};
  :last-child {
    ::before {
      content: "|";
      width: 1px;
      font-weight: 400;
      margin-right: 10px;
    }
  }
`;

export const Taste = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  word-spacing: 3px;
  line-height: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  svg {
    margin-right: 5px;
  }
`;

export const Option = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.gray[500]};
  line-height: 18px;
  font-weight: 500;
`;

export const Text = styled.div<ITextProps>`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px;

  /* text overflow */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${props => {
    return props.isOpened
      ? css`
          -webkit-line-clamp: 100;
        `
      : css`
          -webkit-line-clamp: 2;
        `;
  }}
`;

export const Arrow = styled.div`
  margin-bottom: 12px;
  svg {
    display: block;
    margin: 0 auto;
    stroke: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const LikeButton = styled.button`
  border: 1px solid black;
  width: 90px;
  border-radius: 21px;
  float: right;
`;
