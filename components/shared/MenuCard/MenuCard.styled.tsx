import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0.8rem 0;
  display: flex;
  column-gap: 1.2rem;
  margin-bottom: 0.8rem;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white[500]};

  border: 1px solid red;
`;

export const IconWrap = styled.div`
  max-width: 3.2rem;
  max-height: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white[100]};
  position: absolute;
  bottom: 13px;
  left: 45px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: space-around;

  h3,
  span {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes[15]};
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  span {
    color: ${({ theme }) => theme.colors.navy[400]};
  }
`;
