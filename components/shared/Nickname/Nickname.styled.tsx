import styled from "@emotion/styled";
import Tag from "../Tag/Tag";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 2.6rem;

  .icon {
    margin-right: 1rem;
  }
`;

export const DangolTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.blue[200]};
  color: ${({ theme }) => theme.colors.blue[700]};
  margin-right: 0.6rem;
`;
