import styled from "@emotion/styled";

export const Container = styled.div<{ bulletMargin: string }>`
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }

  .swiper-pagination-bullets {
    margin-bottom: ${({ bulletMargin }) => bulletMargin};
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.white[100]};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
