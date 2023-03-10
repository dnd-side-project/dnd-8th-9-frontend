import Tag from "@/components/shared/Tag/Tag";
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

export const TextTag = styled(Tag)`
  padding: 0.6rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  color: ${({ theme }) => theme.colors.grey[800]};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  border: none;
  width: 8.7rem;
`;

export const TextContainer = styled.div`
  margin-bottom: 3.5rem;

  h1 {
    line-height: 150%;
    margin: 1.2rem 0 0.8rem 0;
  }
`;

export const LocationContainer = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  height: 48rem;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-row-gap: 1.4rem;
  grid-column-gap: 1.3rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    width: 10rem;
    height: 10rem;
    row-gap: 0.2rem;
    position: relative;

    > span {
      color: ${({ theme }) => theme.colors.grey[700]};
    }

    &.isSelected {
      background-color: ${({ theme }) => theme.colors.blue[200]};
      border: 2px solid ${({ theme }) => theme.colors.blue[600]};

      > span {
        color: ${({ theme }) => theme.colors.blue[700]};
      }
    }
  }
`;

export const LabelTag = styled(Tag)`
  border: none;
  border-radius: 1.3rem;
  padding: 0.4rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.pink[400]};
  position: absolute;
  top: -12px;
  right: -11px;
  z-index: 20;

  > * {
    color: ${({ theme }) => theme.colors.pink[700]};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes[12]};
  }
`;

export const Footer = styled.footer`
  height: 9.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 1.6rem;

  > * {
    width: 100%;
  }

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.pink[700]};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[16]};
    color: ${({ theme }) => theme.colors.grey[100]};

    &[disabled] {
      background-color: ${({ theme }) => theme.colors.grey[400]};
      color: ${({ theme }) => theme.colors.grey[600]};
    }
  }
`;
