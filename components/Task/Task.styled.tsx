import styled from "@emotion/styled";

const Paragraph = styled.p<{ hoverColor: string }>`
  font-size: 16px;
  text-align: center;

  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${({ theme }) => theme.colors.dark[300]};
  }
`;

export default Paragraph;
