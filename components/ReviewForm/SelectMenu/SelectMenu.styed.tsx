/* eslint-disable @typescript-eslint/no-use-before-define */
import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const FormTitle = styled(Text)`
  padding-block: 1rem;
  line-height: 160%;
  text-align: center;
  margin-block: 3.2rem;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.2rem;
  margin-bottom: 10rem;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey[300]};
`;

export const MenuCardContainer = styled.div`
  border-radius: 8px;
  border: 1.6px solid ${({ theme }) => theme.colors.blue[300]};
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
  padding: 1.2rem 1.9rem 1.2rem 0.8rem;

  &.isActive {
    background: ${({ theme }) => theme.colors.blue[100]};
    border: 1.6px solid ${({ theme }) => theme.colors.blue[500]};

    ${IconWrap} {
      background: ${({ theme }) => theme.colors.blue[700]};
    }
  }
`;
