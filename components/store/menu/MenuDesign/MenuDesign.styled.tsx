import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const DesignContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

export const Name = styled(Text)`
  margin-bottom: 0.8rem;

  strong {
    color: ${({ theme }) => theme.colors.pink[700]};
  }
`;
