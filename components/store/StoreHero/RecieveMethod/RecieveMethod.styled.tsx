import styled from "@emotion/styled";
import Text from "@/components/shared/Text/Text";
import ContentBox from "../../ContentBox/ContentBox";

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Method = styled(Text)`
  margin-left: 0.8rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[15]};
  color: ${({ theme }) => theme.colors.blue[800]};
`;

export const Desc = styled(Text)`
  margin-left: 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  color: ${({ theme }) => theme.colors.grey[700]};
`;

export const RecieveMethodContentBox = styled(ContentBox)`
  padding-block: 2.4rem 3.2rem;

  h2 {
    margin-bottom: 2rem;
  }
`;
