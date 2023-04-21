import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import ContentBox from "@/components/store/ContentBox/ContentBox";
import styled from "@emotion/styled";

export const MenuContentBox = styled(ContentBox)`
  padding-block: 1.6rem 4rem;
  scroll-margin-top: 60px;

  h2 {
    padding-bottom: 1.6rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[300]};
  }
`;

export const ReviewListWrap = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  scroll-margin-top: 60px;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes[16]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};

    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      margin-left: 0.4rem;
    }
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  margin-bottom: 1.6rem;
`;

export const ReviewTitle = styled(Text)`
  line-height: 1.9rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ReviewWriteButton = styled(Button)`
  padding: 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 0.8rem;
  min-height: auto;
`;
