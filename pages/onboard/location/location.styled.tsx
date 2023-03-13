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
