import styled from "@emotion/styled";

export const StyleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10.4rem);
  grid-template-rows: repeat(auto-fill, 12.9rem);
  grid-row-gap: 2rem;
  grid-column-gap: 0.8rem;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 10.4rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  overflow: hidden;

  .checkbox {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    width: 2rem;
    height: 2rem;
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }
`;

export const StyleItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.grey[700]};
  }

  &.isSelected {
    span {
      color: ${({ theme }) => theme.colors.blue[800]};
    }

    ${ImageWrap} {
      outline: 2px solid ${({ theme }) => theme.colors.blue[600]};
    }

    ${ImageWrap} .checkbox {
      background-color: ${({ theme }) => theme.colors.blue[800]};
    }
  }
`;
