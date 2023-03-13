import styled from "@emotion/styled";
import Button from "../Button/Button";

export const SortContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2.8rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.6rem;
`;

export const SortButton = styled(Button)`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`;

export const SortModal = styled.div<{ isOpen: boolean }>`
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.16));
  border-radius: 0.8rem;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: ${({ theme }) => theme["z-index"].sortModal};
  top: 4rem;
  right: auto;
  width: 18rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  }
`;

export const SortItemButton = styled.button`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  height: 4rem;
`;
