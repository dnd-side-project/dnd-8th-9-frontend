import Button from "@/components/shared/Button/Button";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 3.2rem;
`;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin: 1.2rem 0 2.4rem;
`;

export const CategoryButton = styled(Button)`
  padding: 0.9rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};

  &.isSelected {
    background-color: ${({ theme }) => theme.colors.blue[800]};
    border-color: ${({ theme }) => theme.colors.blue[800]};

    span {
      ${({ theme }) => theme.colors.blue[800]};
      color: ${({ theme }) => theme.colors.grey[100]};
    }
  }
`;

export const CardWrap = styled.div`
  margin-bottom: 1.6rem;
`;

export const SwiperWrap = styled.div`
  .swiper {
    .swiper-wrapper {
      margin-bottom: 3rem;
    }
    .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.colors.grey[900]};
    }
  }
`;
