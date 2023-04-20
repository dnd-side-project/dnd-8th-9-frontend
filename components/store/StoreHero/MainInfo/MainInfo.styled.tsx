import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    display: flex;
    align-items: flex-start;
  }
`;

export const InfoBox = styled(Box)`
  padding: 2.8rem 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  border-bottom: 0.6rem solid ${({ theme }) => theme.colors.white[200]};

  & > * {
    column-gap: 0.8rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;
  justify-content: space-between;

  &,
  div {
    display: flex;
    align-items: flex-start;
  }

  div {
    column-gap: 0.8rem;
  }
`;

export const CategoryWrap = styled.div`
  margin-bottom: 1.2rem;
`;

export const Location = styled(Text)`
  margin-bottom: 2.4rem;
`;

export const ReviewWrap = styled.div`
  margin-bottom: 0.8rem;
  align-items: center;
`;

export const Price = styled(Text)`
  display: flex;
  align-items: center !important;

  small {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;
