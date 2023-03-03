import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: black;
  display: flex;
  align-items: center;

  --swiper-theme-color: #fff;
  --swiper-navigation-size: 20px;

  .swiper-button-prev,
  .swiper-button-next {
    top: 43%;
  }
`;
