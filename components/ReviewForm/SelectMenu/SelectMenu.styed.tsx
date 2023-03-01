import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 3.2rem;
`;

export const FormTitle = styled.div`
  padding: 1rem;
  height: 4.1rem;
  font-size: ${({ theme }) => theme.fontSizes[18]};
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  margin-bottom: 3.2rem;
`;

export const MenuCardClick = styled.div`
  border-radius: 8px;

  &.isActive {
    background: #f6f7fc;
    border: 1.6px solid #95a5e0;
  }
`;
