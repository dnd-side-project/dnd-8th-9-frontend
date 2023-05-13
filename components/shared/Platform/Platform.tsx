import React from "react";
import { useTheme } from "@emotion/react";
import { ILink } from "@/types/api/shared";
import theme from "@/styles/theme";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./Platform.styled";

interface ILinkIcon {
  [key: string]: React.ReactNode;
}

const LINK_ICON: ILinkIcon = {
  kakao: (
    <Icon name="kakao" size="xs" color={theme.colors.grey[700]} fill={theme.colors.grey[700]} />
  ),
  instagram: <Icon name="instagram" size="xs" color={theme.colors.grey[700]} />,
};

interface IProp {
  links: ILink[];
}

function Platform({ links }: IProp) {
  const { colors } = useTheme();

  return (
    <S.PlatformWrap>
      <Text weight={500} size={13} color={colors.grey[700]}>
        주문방식
      </Text>
      {links.map(link => (
        <React.Fragment key={link.id}>
          {LINK_ICON[link.platform.toLocaleLowerCase()]}
        </React.Fragment>
      ))}
    </S.PlatformWrap>
  );
}

export default Platform;
