import { SerializedStyles, Theme } from "@emotion/react";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./ContentBox.styled";

interface IProp {
  children: React.ReactNode;
  title: string;
  name?: string;
  titleIconName?: string;
  iconSize?: "xs" | "s" | "m" | "l";
  cssProp?: SerializedStyles | (({ colors, fontSizes }: Theme) => SerializedStyles);
}

function ContentBox({
  children,
  name = "",
  title,
  cssProp,
  titleIconName = "",
  iconSize = "s",
}: IProp) {
  return (
    <div css={[S.Box, cssProp]} id={name}>
      <h2>
        {title}
        {titleIconName !== "" ? <Icon name={titleIconName} size={iconSize} /> : ""}
      </h2>
      <div>{children}</div>
    </div>
  );
}

export default ContentBox;
