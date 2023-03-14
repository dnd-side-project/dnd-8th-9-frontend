import Link from "next/link";
import styled from "@emotion/styled";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import ContentBox from "../../ContentBox/ContentBox";

export const OrderContentBox = styled(ContentBox)`
  padding-block: 2.4rem 2rem;

  h2 {
    margin-bottom: 0.8rem;
  }
`;

export const Desc = styled(Text)`
  margin-bottom: 2rem;

  strong {
    color: ${({ theme }) => theme.colors.pink[700]};
  }
`;

export const LinkItem = styled.div`
  margin-bottom: 0.4rem;
  padding: 0.6rem 0;
  justify-content: space-between;

  &,
  > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  margin-right: 1.2rem;
`;

export const PlatformIcon = styled(Icon)`
  svg path {
    stroke-width: 1.6;
  }
`;

export const LinkButton = styled(Link)`
  min-width: 8.8rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.blue[700]};
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
`;
