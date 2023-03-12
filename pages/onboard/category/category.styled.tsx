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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey[400]};
    color: ${({ theme }) => theme.colors.grey[800]};
    transition: all 0.2s ease-in-out;
  }
`;
