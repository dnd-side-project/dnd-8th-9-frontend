import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const CarouselWrapper = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  height: 100vw;

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.grey[700]};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.white[100]};
  }
`;
