import Tag from "@/components/shared/Tag/Tag";
import styled from "@emotion/styled";

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
