import Image from "next/image";
import { useTheme } from "@emotion/react";
import { User } from "@/assets/icons";
import Text from "../Text/Text";
import * as S from "./Nickname.styled";

interface IProp {
  name: string;
  dangol: boolean;
  color?: string;
  profileImage: string;
}

function Nickname({ name, dangol, color, profileImage }: IProp) {
  const { colors } = useTheme();
  return (
    <S.Wrap>
      <S.ImageWrap>
        {profileImage && profileImage.length ? (
          <Image src={profileImage} alt="profile" fill />
        ) : (
          <User className="icon" width="60" height="60" />
        )}
      </S.ImageWrap>
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
