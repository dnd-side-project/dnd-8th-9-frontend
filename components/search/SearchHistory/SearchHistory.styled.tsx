import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.4rem 0 1.2rem;

  button {
    padding: 0;
  }
`;

export const HistoryList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  button {
    padding: 0.9rem 1.4rem;
    flex-shrink: 0;
    height: 3.6rem;
    border-radius: 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
