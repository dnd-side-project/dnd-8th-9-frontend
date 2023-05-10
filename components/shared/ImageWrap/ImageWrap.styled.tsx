import styled from "@emotion/styled";

export const Container = styled.div<{ percent: number; borderRadius: number }>`
  position: relative;
  width: ${props => `${props.percent}%`};

  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${props => `${props.borderRadius}px`};
  }
`;
