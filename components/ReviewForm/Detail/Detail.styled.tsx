import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Container = styled.div`
  padding: 2rem 1.4rem 0 2rem;
`;

export const InfoWrap = styled.div`
  margin-left: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 500;
  color: #414141;
  height: 1.7rem;
  line-height: 1.7rem;
  margin-bottom: 0.8rem;
`;

export const Size = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 500;
  color: #636363;
  height: 1.4rem;
  line-height: 1.4rem;
  margin-bottom: 0.8rem;
`;

export const DangdoComment = styled.div`
  height: 1.6rem;
  line-height: 1.6rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const Dangdo = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 600;
  height: 1.4rem;
  line-height: 1.4rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.2rem;
  }
`;

export const Comment = styled.div`
  color: #414141;
  font-size: ${({ theme }) => theme.fontSizes[10]};
  font-weight: 500;
  height: 1.2rem;
  line-height: 1.2rem;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Best = styled.div`
  margin-top: 3.2rem;
`;

export const Detail = styled.div`
  margin-top: 3.2rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  line-height: 1.9rem;
  margin-bottom: 1.6rem;
`;

export const LikeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[15]};
  line-height: 1.8rem;
`;

export const Button = css`
  border: 1px solid #e9e9e9;
  color: #414141;
`;

export const ClickedButton = ({ colors }: Theme) => css`
  background-color: ${colors.navy[400]};
  color: ${colors.white[100]};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderedTwice = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: 1.9rem;
  color: #414141;
`;

export const UploadImage = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const UploadImageText = styled.div`
  /* border: 1px solid blue; */
  width: 20rem;
  /* margin-left: 1.2rem; */
  padding: 0.85rem 0 0.85rem 1.2rem;

  .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #414141;
  }

  .detail {
    margin-top: 0.8rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #636363;
  }
`;

export const Textarea = styled.div`
  margin-top: 1.2rem;

  textarea {
    border: 1.6px solid #e9e9e9;
    border-radius: 8px;
    resize: none;
    width: 100%;
    height: 18rem;
    padding: 1.4rem 0.8rem 0 0.8rem;
    outline: none;
    box-sizing: border-box;
    transition: 0.3s;

    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }

  textarea:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgetBlue;
  }
`;

export const FileUpload = styled.div`
  display: none;
`;

export const ImageWrap = styled.div`
  width: 70px;
  height: 70px;
  position: relative;

  img {
    border-radius: 4px;
    object-fit: cover;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  margin-top: -74px;

  width: 70px;
  height: 70px;
  background-color: rgba(32, 32, 32, 0.3);
  border-radius: 4px;

  text-align: right;
  padding: 6px 6px 0 0;

  svg {
    z-index: ${({ theme }) => theme["z-index"].imageIcon};
  }
`;
