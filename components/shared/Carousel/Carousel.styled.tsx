import styled from "@emotion/styled";

export const Container = styled.div<{ bulletMargin: string }>`
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullets {
    margin-bottom: ${({ bulletMargin }) => bulletMargin};
  }

  .swiper-pagination-bullet {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
