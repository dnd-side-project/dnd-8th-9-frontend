import styled from "@emotion/styled";

export const Container = styled.div`
  width: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.4rem;
  margin: auto;
  height: 7.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 12px rgba(80, 83, 105, 0.08);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;
