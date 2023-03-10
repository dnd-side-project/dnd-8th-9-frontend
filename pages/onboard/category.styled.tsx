import Button from "@/components/shared/Button/Button";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 0 1.6rem;
`;

export const Navbar = styled.div`
  margin: 3.2rem 0 0.8rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TextContainer = styled.div`
  margin-bottom: 4rem;

  h1 {
    line-height: 150%;
    margin: 1.2rem 0 0.8rem 0;
  }
`;

export const StyleContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10.4rem);
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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.2rem 1.6rem;

  a {
    width: 50%;
  }
`;

export const PrevButton = styled(Button)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey[500]};
`;

export const SaveButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink[700]};
  color: ${({ theme }) => theme.colors.grey[100]};
`;
