import { SerializedStyles, Theme } from "@emotion/react";
import { button, buttonShape } from "./Button.styled";

export interface IProp {
  type: "button" | "reset" | "submit";
  label: string;
  disabled?: boolean;
  onClick?: (e?: React.FormEvent) => void;
  children: string | JSX.Element | JSX.Element[];
  shape: "round" | "square";
  cssProp?: SerializedStyles | (({ colors }: Theme) => SerializedStyles);
  className?: string;
}

function Button({
  type,
  label,
  disabled = false,
  onClick,
  children,
  shape,
  cssProp,
  className,
}: IProp) {
  return (
    <button
      className={className}
      type={type}
      css={[button, buttonShape[shape], cssProp]}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
