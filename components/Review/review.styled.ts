import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const Review = styled.div`
  width: 32rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div``;

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
  color: #595959;
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
  margin-bottom: 5px;
  svg {
    margin-right: 5px;
  }
`;

export const Option = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Text = styled.div`
  white-space: pre-wrap;
  color: #595959;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 400;
  line-height: 18px;
`;

// TODO: 재사용 버튼으로 바꿔야 함
export const LikeButton = styled.button`
  border: 1px solid black;
  width: 90px;
  border-radius: 21px;
`;
