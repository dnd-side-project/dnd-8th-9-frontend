import Button from "@/components/shared/Button/Button";
import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0 1.6rem 7.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ButtonWrap = styled.div`
  padding: 2rem 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  column-gap: 1rem;
  z-index: ${({ theme }) => theme["z-index"].button};
`;

export const PrevButton = styled(Button)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
`;

export const NextButton = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.grey[100]};
  background-color: ${({ theme }) => theme.colors.pink[700]};

  &:disabled {
    color: ${({ theme }) => theme.colors.grey[600]};
    background-color: ${({ theme }) => theme.colors.grey[400]};
  }
`;
