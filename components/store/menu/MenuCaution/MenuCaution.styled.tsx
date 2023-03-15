import styled from "@emotion/styled";

export const CautionContent = styled.ul`
  list-style: inside;
  list-style-position: outside;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  padding: 2rem 1.6rem;
  border-radius: 0.8rem;
`;

export const CautionItem = styled.li`
  margin-left: 1.6rem;

  :not(:last-child) {
    margin-bottom: 1.2rem;
  }

  ::marker {
    color: ${({ theme }) => theme.colors.blue[800]};
  }

  span {
    line-height: 150%;
    left: -0.6rem;
  }
`;
