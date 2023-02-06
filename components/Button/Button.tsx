import React from "react";
import "./button.css";

export interface IButton {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label: string;
  onClick?: () => void;
}

function Button({ primary, backgroundColor, size, label, ...props }: IButton) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", size ? `storybook-button--${size}` : "", mode].join(" ")}
      style={{ backgroundColor: backgroundColor || "inherit" }}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
