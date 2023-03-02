import useFilterStore from "@/store/filter";
import { useTheme } from "@emotion/react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./FilterBar.styled";

const FILTER_TAB_MENU = ["카테고리", "가격", "주문플랫폼", "수령방법"];

function FilterBar() {
  const { colors } = useTheme();
  const { toggleFilterModalOpen, appliedFilterOptions } = useFilterStore();

  return (
    <S.Wrap>
      {FILTER_TAB_MENU.map(menu =>
        appliedFilterOptions[menu].length > 0 ? (
          <S.SelectedFilterButton
            key={menu}
            type="button"
            label={menu}
            shape="round"
            onClick={toggleFilterModalOpen}
          >
            <Text size={14} weight={500} color={colors.blue[700]}>
              {`${menu} `}
              {menu === "가격" ? appliedFilterOptions[menu] : appliedFilterOptions[menu].length}
            </Text>
            <Icon name="close" color={colors.grey[800]} size="xs" />
          </S.SelectedFilterButton>
        ) : (
          <S.FilterButton
            key={menu}
            type="button"
            label={menu}
            shape="round"
            onClick={toggleFilterModalOpen}
          >
            <Text size={14} weight={500} color={colors.grey[800]}>
              {menu}
            </Text>
            <Icon name="arrowDown" color={colors.grey[600]} />
          </S.FilterButton>
        ),
      )}
    </S.Wrap>
  );
}

export default FilterBar;
