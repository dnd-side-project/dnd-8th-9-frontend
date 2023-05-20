import styled from "@emotion/styled";
import Tag from "../Tag/Tag";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 2.6rem;
`;

export const ImageWrap = styled.div`
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
  margin-right: 1rem;

  .icon {
    height: 100%;
    width: 100%;
  }
`;

export const DangolTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.blue[200]};
  color: ${({ theme }) => theme.colors.blue[700]};
  margin-right: 0.6rem;
`;
