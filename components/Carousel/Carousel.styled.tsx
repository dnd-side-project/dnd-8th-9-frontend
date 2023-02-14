import styled from "@emotion/styled";

export const Container = styled.div`
  img {
    width: 32rem; // NOTE: 설정하지 않으면 storybook에서 형태 무너짐
    height: 27rem;
    border-radius: 8px;
    object-fit: cover;
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.black};
  }
  margin: 12px 0 12px 0;
`;
