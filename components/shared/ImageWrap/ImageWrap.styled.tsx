import styled from "@emotion/styled";

export const Container = styled.div<{ percent: number }>`
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
    object-fit: cover;
    border-radius: 4px;
  }
`;
