import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const Box = styled.div`
  padding: 1.6rem;
  border-bottom: 0.6rem solid ${({ theme }) => theme.colors.section};
`;

export const Title = styled(Text)`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;
