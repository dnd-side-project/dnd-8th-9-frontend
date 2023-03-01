import theme from "@/styles/theme";
import { useTheme } from "@emotion/react";
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
  links: {
    [key: string]: string;
  };
}

function Platform({ links }: IProp) {
  const { colors } = useTheme();

  return (
    <S.PlatformWrap>
      <Text weight={400} size={13} color={colors.grey[700]}>
        주문방식
      </Text>
      {Object.keys(links).map(link => LINK_ICON[link])}
    </S.PlatformWrap>
  );
}

export default Platform;
