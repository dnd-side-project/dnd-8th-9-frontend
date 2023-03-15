import styled from "@emotion/styled";

export const TasteContent = styled.div`
  display: grid;
  grid-template-columns: 2.2rem auto;
  column-gap: 1rem;
  row-gap: 1.6rem;
`;

export const NumberWrap = styled.div`
  width: 100%;
  height: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${({ theme }) => theme.colors.blue[200]};
    border-radius: 50%;
  }
`;

export const TextWrap = styled.div`
  > span {
    display: block;
    margin-bottom: 0.8rem;
  }
`;
