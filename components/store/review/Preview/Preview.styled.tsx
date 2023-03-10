import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
`;

export const PreviewImages = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 0.4rem;
`;

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 500;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.colors.white[100]};
  background-color: rgba(32, 32, 32, 0.6);
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
