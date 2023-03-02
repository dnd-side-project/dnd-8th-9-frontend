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
  margin: 2.4rem 0 4.8rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ReviewWrap = styled(StoreWrap)`
  margin: 1.6rem 0 3.2rem;
`;

export const NoteWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.8rem 0;
  margin-bottom: 2.4rem;

  span {
    line-height: 150%;
  }
`;
