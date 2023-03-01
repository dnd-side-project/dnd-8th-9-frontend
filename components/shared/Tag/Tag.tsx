import { SerializedStyles, Theme } from "@emotion/react";
import { tag, tagStyle } from "./Tag.styled";

export interface IProp {
  type: "square" | "icon" | "single" | "double";
  children: string | JSX.Element | JSX.Element[];
  label: string;
  cssProp?: SerializedStyles | (({ colors }: Theme) => SerializedStyles);
  className?: string;
}

function Tag({ type, children, label, cssProp, className }: IProp) {
  return (
    <div aria-label={label} css={[tag, tagStyle[type], cssProp]} className={className}>
      {children}
    </div>
  );
}

export default Tag;
