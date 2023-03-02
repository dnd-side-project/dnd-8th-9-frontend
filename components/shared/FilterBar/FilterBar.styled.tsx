import styled from "@emotion/styled";
import Button from "../Button/Button";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  column-gap: 0.8rem;
  margin-bottom: 1.6rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const FilterButton = styled(Button)`
  padding: 0.95rem 1rem 0.95rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  column-gap: 0.4rem;
  flex-shrink: 0;
`;
