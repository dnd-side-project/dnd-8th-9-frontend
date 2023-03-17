import styled from "@emotion/styled";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white[100]};
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 29rem;
  height: 18.2rem;
  align-items: center;
  padding: 2.4rem 2rem 1.2rem 2rem;
  gap: 1rem;
`;

export const Title = styled.div`
  height: 1.9rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  line-height: 1.9rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const Detail = styled.div`
  font-weight: 400;
  width: 100%;
  display: flex;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
