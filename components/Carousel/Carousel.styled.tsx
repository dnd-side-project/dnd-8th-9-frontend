import styled from "@emotion/styled";

export const Container = styled.div`
  img {
    width: 32rem;
    height: 27rem;
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
