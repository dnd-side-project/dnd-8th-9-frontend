import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 2.8rem;
  }

  margin-top: 17.7rem;
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey[700]};
`;
