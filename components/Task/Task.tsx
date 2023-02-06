import { useTheme } from "@emotion/react";
import Paragraph from "./Task.styled";

export default function Task() {
  const { colors } = useTheme();

  return (
    <Paragraph hoverColor={colors.secondary}>
      I am a component made with Emotion (Styled Components)
    </Paragraph>
  );
}
