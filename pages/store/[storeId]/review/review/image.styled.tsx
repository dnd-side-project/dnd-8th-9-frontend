import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

export const CarouselWrapper = styled.div`
  padding-top: 50%;

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.grey[700]};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.white[100]};
  }
  img {
    width: 100%;
  }
`;
