import styled from "@emotion/styled";

export const Container = styled.div`
  padding-block: 2rem 10rem;
`;

export const MenuCard = styled.div`
  display: flex;
  column-gap: 1.2rem;
  margin-bottom: 4rem;
`;

export const ImageWrap = styled.div<{ isPreviewMode?: boolean }>`
  width: ${({ isPreviewMode }) => (isPreviewMode ? "7rem" : "7.6rem")};
  aspect-ratio: 1/1;
  position: relative;
  border-radius: ${({ isPreviewMode }) => (isPreviewMode ? "0.4rem" : "0.8rem")};
  overflow: hidden;

  .deleteIcon {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.8rem;
`;

export const DangdoComment = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`;

export const Section = styled.div`
  margin-bottom: 3.2rem;

  &:last-child {
    margin-bottom: 1.6rem;
  }

  h2 {
    margin-bottom: 1.6rem;
  }

  small {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .contentLength {
    display: block;
    width: 100%;
    text-align: right;
    margin-top: 0.6rem;
  }
`;

export const ReviewOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  button {
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    padding: 0.9rem 1.6rem;
    font-size: ${({ theme }) => theme.fontSizes[15]};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey[800]};
    border-radius: 2.4rem;

    &.isSelected {
      border: 1px solid transparent;
      background-color: ${({ theme }) => theme.colors.blue[700]};
      color: ${({ theme }) => theme.colors.grey[100]};
    }
  }
`;

export const UploadImage = styled.div`
  display: flex;
  column-gap: 1.2rem;

  input[type="file"] {
    display: none;
  }

  label {
    width: 7rem;
    height: 7rem;
    aspect-ratio: 1/1;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${({ theme }) => theme.colors.grey[400]};
    row-gap: 0.4rem;
  }
`;

export const Textarea = styled.textarea`
  border: 0.16rem solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 0.8rem;
  resize: none;
  width: 100%;
  min-height: 18rem;
  padding: 1.4rem 1.6rem;
  outline: none;
  transition: 0.3s;
  line-height: 150%;
  font-size: ${({ theme }) => theme.fontSizes[14]};

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue[500]};
    box-shadow: 0 0 8px 0 dodgetBlue;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[600]};
  }
`;

export const Caution = styled.div`
  padding: 2.5rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.grey[200]};
`;

export const ReorderCheckbox = styled.div`
  margin-block: 1.2rem;

  span {
    margin-left: 1rem;
    display: inline-block;
    padding: 0.5rem 0;
  }

  label {
    display: flex;
    align-items: center;

    small {
      margin-left: 0.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.grey[600]};
    }
  }

  input[type="checkbox"] {
    width: 2rem;
    height: 2rem;
    padding: 0.16rem;
    border-radius: 0.2rem;
  }
`;
