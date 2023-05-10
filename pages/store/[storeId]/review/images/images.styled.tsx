import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem 1.6rem 2rem;
  position: relative;
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 2.4rem;
`;

export const ModalContentWrap = styled.div`
  position: absolute;
  width: 100%;

  --swiper-navigation-size: 24px;
  --swiper-navigation-top-offset: 45%;
  --swiper-navigation-color: ${({ theme }) => theme.colors.grey[100]};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const NicknameWrap = styled.div`
  padding: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const TextWrap = styled.div`
  padding: 0 1.6rem;
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  height: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  p {
    line-height: 150%;
  }
`;
