import styled from "@emotion/styled";

export const SizeContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  column-gap: 1.2rem;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Circle = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => `${size / 10}rem`};
  height: ${({ size }) => `${size / 10}rem`};

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const SizeLabel = styled.div<{ size: number; marginTop: number }>`
  width: ${({ size }) => `${size / 10}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => `${marginTop / 10}rem`};

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2rem;
    width: 4rem;
    background-color: ${({ theme }) => theme.colors.white[200]};
    font-size: ${({ theme }) => theme.fontSizes[13]};
    font-weight: 500;
    border-radius: 1.2rem;
  }
`;
