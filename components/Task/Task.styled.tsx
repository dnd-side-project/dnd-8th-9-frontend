import styled from "@emotion/styled";

const Paragraph = styled.p<{ hoverColor: string }>`
  font-size: 16px;
  text-align: center;

  &:hover {
    color: ${props => props.hoverColor};
  }
`;

export default Paragraph;
