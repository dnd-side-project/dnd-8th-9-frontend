import { SerializedStyles, Theme } from "@emotion/react";
import { tag, tagStyle } from "./Tag.styled";

export interface IProp {
  type: "square" | "icon" | "single" | "double";
  children: string | JSX.Element | JSX.Element[];
  label: string;
  cssProp?: SerializedStyles | (({ colors }: Theme) => SerializedStyles);
}

function Tag({ type, children, label, cssProp }: IProp) {
  return (
    <div aria-label={label} css={[tag, tagStyle[type], cssProp]}>
      {children}
    </div>
  );
}

export default Tag;
