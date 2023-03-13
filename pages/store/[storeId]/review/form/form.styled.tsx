import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0 1.6rem 7.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ButtonWrap = styled.div`
  padding: 2rem 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
`;
