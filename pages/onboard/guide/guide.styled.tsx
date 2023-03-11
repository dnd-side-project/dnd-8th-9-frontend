import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";
import styled from "@emotion/styled";

export const CarouselWrap = styled.div`
  .swiper-pagination {
    bottom: calc(100% - 5rem);
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.grey[700]};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 1.2rem;
  right: 0.6rem;
  z-index: 99;
  background-color: transparent;
`;

export const CloseIcon = styled(Icon)`
  svg path {
    stroke-width: 1.2;
  }
`;
