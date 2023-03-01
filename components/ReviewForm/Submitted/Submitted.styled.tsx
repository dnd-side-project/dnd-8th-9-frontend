import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 50%;
`;

export const CakeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    height: 1.7rem;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.7rem;
    color: #414141;
    margin: 1.2rem 0 0.4rem 0;
  }

  p {
    height: 1.4rem;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.4rem;
    color: #636363;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.2rem;
  padding: 0 5.7rem;
  white-space: pre-wrap;
  text-align: center;

  span {
    height: 2.1rem;
    font-weight: 600;
    font-size: 18px;
    line-height: 2.1rem;
    color: #202020;
  }

  p {
    margin-top: 0.8rem;
    height: 4.2rem;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #636363;
  }
`;
