import { useTheme } from "@emotion/react";
import useBearStore from "@/store/store";
import Paragraph from "./Task.styled";

export default function Task() {
  const { colors } = useTheme();
  const { bears, increase, decrease } = useBearStore(state => state);

  return (
    <>
      <Paragraph hoverColor={colors.secondary}>
        I am a component made with Emotion (Styled Components)
      </Paragraph>
      <div>
        <p>Bears: {bears}</p>
        <button type="button" onClick={increase}>
          +
        </button>
        <button type="button" onClick={decrease}>
          -
        </button>
      </div>
    </>
  );
}
