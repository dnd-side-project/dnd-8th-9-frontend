import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 0 1.6rem;
  height: 100vh;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  margin-top: calc((100vh - 41rem) / 6 * 2);

  > * {
    line-height: 150%;
  }

  h1 {
    margin-bottom: 0.8rem;
  }
`;

export const ImageContainer = styled.div`
  margin: calc((100vh - 41rem) / 6) auto calc((100vh - 41rem) / 6 * 2);
  width: 26.7rem;
  height: 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonContainer = styled.div`
  margin-bottom: calc((100vh - 41rem) / 6);

  button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes[15]};
    color: ${({ theme }) => theme.colors.grey[700]};
  }

  a:first-child button {
    background-color: ${({ theme }) => theme.colors.pink[700]};
    color: ${({ theme }) => theme.colors.grey[100]};
    font-size: ${({ theme }) => theme.fontSizes[16]};
    margin-bottom: 1.2rem;
  }
`;
