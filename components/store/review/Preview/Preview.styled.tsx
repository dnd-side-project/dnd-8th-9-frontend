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

export const ImageWrap = styled.div`
  position: relative;
  width: 25%;

  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
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
