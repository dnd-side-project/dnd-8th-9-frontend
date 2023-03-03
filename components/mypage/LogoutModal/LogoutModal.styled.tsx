import Sheet from "react-modal-sheet";
import styled from "@emotion/styled";
import Button from "@/components/shared/Button/Button";

export const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.7) !important;
  }
  .react-modal-sheet-container {
    max-height: 25rem;
  }
  .react-modal-sheet-content {
    padding: 3.2rem 1.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  width: 17.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  h1,
  p {
    line-height: 150%;
  }
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
`;

export const LogoutButton = styled(CancelButton)`
  background-color: ${({ theme }) => theme.colors.pink[700]};
  margin-top: 1.6rem;
`;
