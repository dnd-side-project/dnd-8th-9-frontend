import Tag from "@/components/shared/Tag/Tag";
import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const CarouselWrap = styled.div`
  width: 100%;
  height: 36rem;
`;

export const InfoWrap = styled.div`
  padding: 3.2rem 1.6rem 2.4rem;
  border-bottom: 0.7rem solid ${({ theme }) => theme.colors.white[200]};
`;

export const MainInfoContainer = styled.div`
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
  justify-content: space-between;

  &,
  div {
    display: flex;
    align-items: center;
  }

  div {
    column-gap: 0.8rem;
  }
`;

export const CategoryWrap = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`;

export const CategoryTag = styled(Tag)`
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  padding: 0.6rem 0.8rem;
`;

export const Price = styled(Text)`
  display: flex;
  align-items: flex-end;

  small {
    margin-right: 0.8rem;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;

export const SubInfoContainer = styled.div`
  padding-top: 2rem;
  row-gap: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.white[500]};

  small {
    font-size: ${({ theme }) => theme.fontSizes[12]};
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const InfoContent = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  column-gap: 1.2rem;
  row-gap: 1.6rem;
  margin-bottom: 2.5rem;
`;
