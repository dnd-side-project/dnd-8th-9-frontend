import styled from "@emotion/styled";
import Text from "@/components/shared/Text/Text";
import ContentBox from "../../ContentBox/ContentBox";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Method = styled(Text)`
  margin-left: 0.8rem;
  min-width: 5.2rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[15]};
  color: ${({ theme }) => theme.colors.blue[800]};
  line-height: 2.4rem;
`;

export const Desc = styled(Text)`
  margin-left: 1.2rem;
  padding-top: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  color: ${({ theme }) => theme.colors.grey[700]};
`;

export const RecieveMethodContentBox = styled(ContentBox)`
  padding-block: 2.4rem 3.2rem;

  h2 {
    margin-bottom: 2rem;
  }
`;
