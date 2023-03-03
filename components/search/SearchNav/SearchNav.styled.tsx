import styled from "@emotion/styled";

export const Wrap = styled.div`
  height: 4.2rem;
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
`;

export const InputWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 0.8rem;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.8rem;
  height: 100%;
  width: 100%;

  input,
  input::placeholder {
    background-color: inherit;
    width: 90%;
    color: ${({ theme }) => theme.colors.grey[900]};
    font-size: ${({ theme }) => theme.fontSizes[14]};
    font-weight: 500;
  }
`;
