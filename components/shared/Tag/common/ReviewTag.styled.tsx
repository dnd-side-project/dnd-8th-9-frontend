import styled from "@emotion/styled";
import Tag from "../Tag";

export const Container = styled(Tag)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.pink[200]};
  border: none;
  border-radius: 1.3rem;
  flex-shrink: 0;
`;
