import Tab from "@/components/shared/Tab/Tab";
import styled from "@emotion/styled";

export const MenuTab = styled(Tab)`
  --selected-color: ${({ theme }) => theme.colors.grey[900]};
  color: ${({ theme }) => theme.colors.grey[700]};
  margin-bottom: 0.8rem;
`;

export const ControlBoxWrap = styled.div`
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  height: 6rem;

  > * {
    height: 3.6rem;
  }

  > div {
    margin-bottom: 0;
  }

  > button {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    padding: 0;
    min-width: 4rem;
  }
`;

export const EditControlBoxWrap = styled(ControlBoxWrap)`
  justify-content: space-between;
  width: 100%;

  span {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  button {
    height: 100%;
    padding: 0.95rem 1.2rem;
    font-size: ${({ theme }) => theme.fontSizes[14]};

    &:first-child {
      border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    }

    &:nth-child(2) {
      background-color: ${({ theme }) => theme.colors.pink[700]};
      span {
        color: ${({ theme }) => theme.colors.grey[100]};
      }

      :disabled {
        background-color: ${({ theme }) => theme.colors.grey[300]};
        span {
          color: ${({ theme }) => theme.colors.grey[500]};
        }
      }
    }
  }
`;

export const MenuWrap = styled.div`
  padding: 0 1.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 15.8rem);
  column-gap: 1.2rem;
  row-gap: 3.2rem;
  width: 100%;
  overflow-y: scroll;
  margin: 0.8rem 0 4.8rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
