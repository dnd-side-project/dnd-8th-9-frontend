import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const Content = styled.div`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  border-radius: 8px;

  &:first-child {
    margin-bottom: 0.8rem;
  }
`;

export const SubTitle = styled(Text)`
  margin-bottom: 1.2rem;
`;

export const List = styled.ul`
  li {
    margin-bottom: 0.8rem;
    list-style: inside;

    &::marker {
      color: ${({ theme }) => theme.colors.blue[800]};
    }
  }
`;

export const Value = styled(Text)`
  position: relative;
  left: -0.8rem;
`;
