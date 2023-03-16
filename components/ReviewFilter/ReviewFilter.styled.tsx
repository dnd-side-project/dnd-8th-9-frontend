import styled from "@emotion/styled";
import Button from "../shared/Button/Button";

export const Container = styled.div`
  display: flex;
  column-gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const FilterButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.grey[100]};
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  padding: 0.6rem 2rem;
  border-radius: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes[15]};

  &.isSelected {
    background-color: ${({ theme }) => theme.colors.blue[700]};
    border: none;
  }
`;
