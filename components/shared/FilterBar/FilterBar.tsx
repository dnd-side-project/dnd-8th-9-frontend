import { useTheme } from "@emotion/react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./FilterBar.styled";

const FILTER_TAB_MENU = ["카테고리", "가격", "주문플랫폼", "수령방법"];

function FilterBar() {
  const { colors } = useTheme();

  return (
    <S.Wrap>
      {FILTER_TAB_MENU.map(menu => (
        <S.FilterButton key={menu} type="button" label={menu} shape="round">
          <Text size={14} weight={500} color={colors.grey[800]}>
            {menu}
          </Text>
          <Icon name="arrowDown" color={colors.grey[600]} />
        </S.FilterButton>
      ))}
    </S.Wrap>
  );
}

export default FilterBar;
