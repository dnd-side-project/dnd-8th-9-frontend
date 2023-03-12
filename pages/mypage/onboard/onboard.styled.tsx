import Button from "@/components/shared/Button/Button";
import Tag from "@/components/shared/Tag/Tag";
import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 0 1.6rem;
`;

export const ContainerWrap = styled.div`
  margin-top: 1.6rem;

  > div:nth-child(2) {
    margin-bottom: 4.8rem;
  }
`;

export const TitleText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.colors.grey[800]};
  font-weight: 600;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.45rem 0;

  a {
    display: block;
    padding: 0.6rem 1.2rem;

    span {
      font-size: ${({ theme }) => theme.fontSizes[14]};
      color: ${({ theme }) => theme.colors.grey[800]};
      font-weight: 500;
    }
  }
`;

export const TagContainer = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.4rem;
  width: 100%;
`;

export const TagItem = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.blue[200]};
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.colors.blue[700]};
  font-size: ${({ theme }) => theme.fontSizes[15]};
  font-weight: 500;
  border: none;
  max-width: unset;
  padding: 0.9rem 1.4rem;
  height: 3.6rem;
`;

// edit page

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.6rem 0 3.2rem;
  height: 3.6rem;

  > span {
    min-width: 5rem;
  }
`;

export const EditTagContainer = styled(TagContainer)`
  margin-bottom: 0;
  flex-wrap: nowrap;
`;

export const EditTagItem = styled(Button)`
  height: 100%;
  padding: 0.9rem 1.4rem;
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  column-gap: 0.4rem;
  flex-shrink: 0;
`;

export const OptionWrap = styled.div`
  > div {
    height: 55rem;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2.2rem 1.6rem;
  width: 100%;
`;

export const SaveButton = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.grey[100]};
  background-color: ${({ theme }) => theme.colors.pink[700]};

  &:disabled {
    color: ${({ theme }) => theme.colors.grey[600]};
    background-color: ${({ theme }) => theme.colors.grey[400]};
  }
`;
