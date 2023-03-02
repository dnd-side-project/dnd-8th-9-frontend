import Sheet from "react-modal-sheet";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import Tab from "../Tab/Tab";

export const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.7) !important;
  }
  .react-modal-sheet-container {
    max-height: 39.2rem;
  }
  .react-modal-sheet-content {
    padding: 1.6rem 1.6rem 2.4rem 1.6rem;
  }
`;

export const Header = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const FilterTab = styled(Tab)`
  --selected-color: ${({ theme }) => theme.colors.grey[900]};
  border-bottom: none;
  height: 4rem;

  li.isSelected a {
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  li a {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.grey[700]};
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
  height: 4.8rem;
  padding: 0 0.3rem;
`;

export const ClearButton = styled(Button)`
  color: ${({ theme }) => theme.colors.grey[700]};
  width: 20%;
  padding: 1.45rem 1rem;
`;

export const FilterButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.pink[700]};
  color: ${({ theme }) => theme.colors.grey[100]};
  width: 90%;
  border-radius: 0.8rem;
`;
