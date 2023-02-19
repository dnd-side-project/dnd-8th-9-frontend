import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0.8rem 0;
  display: flex;
  column-gap: 1.2rem;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[90]};
  }
`;

export const ImageWrap = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
  width: 11rem;
  height: auto;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h3,
  span {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes[15]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  span {
    color: ${({ theme }) => theme.colors.dark[500]};
  }
`;
