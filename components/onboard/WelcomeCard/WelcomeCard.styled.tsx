import styled from "@emotion/styled";

export const Wrap = styled.div`
  height: 46rem;
  position: relative;
  background: linear-gradient(180deg, #3634b7 0%, #0e0543 79.86%);
  border-radius: 1.6rem;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 32.4rem;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: 25rem;
  margin: 5.8rem 0 2.4rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -14rem;
  height: 50rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 5.2rem;
  padding: 1.6rem 0;

  background-color: ${({ theme }) => theme.colors.grey[100]};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.8rem;
  }
`;
