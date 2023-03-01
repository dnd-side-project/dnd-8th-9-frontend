import { useTheme } from "@emotion/react";
import { User } from "@/assets/icons";
import Text from "../Text/Text";
import * as S from "./Nickname.styled";

interface IProp {
  name: string;
  dangol?: boolean;
  color?: string;
}

function Nickname({ name, dangol, color }: IProp) {
  const { colors } = useTheme();
  return (
    <S.Wrap>
      <User className="icon" />
      {dangol && (
        <S.DangolTag type="square" label="단골">
          단골
        </S.DangolTag>
      )}
      <Text weight={600} size={14} color={color || colors.grey[900]}>
        {name}
      </Text>
    </S.Wrap>
  );
}

export default Nickname;
