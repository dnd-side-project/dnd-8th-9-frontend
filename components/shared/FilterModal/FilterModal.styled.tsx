import Sheet from "react-modal-sheet";
import styled from "@emotion/styled";
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

  li.isSelected a {
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  li a {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.grey[700]};
  }
`;
