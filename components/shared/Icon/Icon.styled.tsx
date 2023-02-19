import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface IProp {
  size: "xs" | "s" | "m" | "l";
  color: string;
  fill: string;
}

const SIZE_STYLE = {
  xs: { width: "1.2rem", height: "1.2rem", "stroke-width": "1.2" },
  s: { width: "1.6rem", height: "1.6rem", "stroke-width": "1.2" },
  m: { width: "2rem", height: "2rem", "stroke-width": "1.6" },
  l: { width: "2.4rem", height: "2.4rem", "stroke-width": "2" },
};

const sizeCss = ({ size }: IProp) => css`
  width: ${SIZE_STYLE[size].width};
  height: ${SIZE_STYLE[size].height};

  svg {
    width: ${SIZE_STYLE[size].width};
    height: ${SIZE_STYLE[size].height};

    path {
      stroke-width: ${SIZE_STYLE[size]["stroke-width"]};
    }
  }
`;

const lineCss = ({ color }: IProp) => css`
  svg path {
    stroke: ${color};
  }
`;

const fillCss = ({ fill }: IProp) => css`
  svg {
    fill: ${fill};
    path {
      stroke: ${fill};
    }
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${fillCss};
  ${lineCss};
  ${sizeCss};
`;
