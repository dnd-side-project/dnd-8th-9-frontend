import styled from "@emotion/styled";

export const ContentWrap = styled.div`
  padding: 3.2rem 1.6rem 2.4rem;
`;

export const StoreWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;
  width: 100%;
  overflow-x: scroll;
  margin-top: 2.4rem;
  margin-bottom: 1.5rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
