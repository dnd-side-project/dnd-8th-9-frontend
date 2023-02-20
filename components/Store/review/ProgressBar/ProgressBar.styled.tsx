import styled from "@emotion/styled";

interface IProgress {
  count: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 1.3rem;
  height: 1.7rem;
  :first-child {
    margin-top: 2rem;
  }
`;

export const OptionName = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.black};
  width: 45%;
`;

export const Background = styled.div`
  width: 55%;
  background-color: ${({ theme }) => theme.colors.white[500]};
  height: 0.6rem;
  border-radius: 8px;
`;

export const Progress = styled.div<IProgress>`
  background-color: ${({ theme }) => theme.colors.navy[400]};
  width: ${({ count }) => `${count}%`};
  height: 100%;
  border-radius: 8px;
  display: flex;
`;

export const Count = styled.div`
  text-align: right;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  width: 25%;
`;

//
