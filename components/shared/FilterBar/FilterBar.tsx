import useFilterStore from "@/store/filter";
import { useTheme } from "@emotion/react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./FilterBar.styled";

type TFilterTab = "카테고리" | "가격" | "주문플랫폼" | "수령방법";

const FILTER_TAB_MENU: TFilterTab[] = ["카테고리", "가격", "주문플랫폼", "수령방법"];

function FilterBar() {
  const { colors } = useTheme();
  const {
    toggleFilterModalOpen,
    appliedFilterOptions,
    clearSelectedFilterSection,
    changeCurrentFilterTab,
  } = useFilterStore();

  const handleSelectedButtonClick = (menu: TFilterTab) => {
    toggleFilterModalOpen();
    changeCurrentFilterTab(menu);
  };

  const handleButtonClick = (menu: TFilterTab) => {
    changeCurrentFilterTab(menu);
    toggleFilterModalOpen();
  };

  return (
    <S.Wrap>
      {FILTER_TAB_MENU.map(menu =>
        appliedFilterOptions[menu].length > 0 ? (
          <S.SelectedFilterButton key={menu} type="button" label={menu} shape="round">
            <button onClick={() => handleSelectedButtonClick(menu)}>
              <Text size={14} weight={500} color={colors.blue[700]}>
                {`${menu} `}
                {menu === "가격" ? appliedFilterOptions[menu] : appliedFilterOptions[menu].length}
              </Text>
            </button>
            <button onClick={() => clearSelectedFilterSection(menu)}>
              <Icon name="close" color={colors.grey[800]} size="xs" />
            </button>
          </S.SelectedFilterButton>
        ) : (
          <S.FilterButton
            key={menu}
            type="button"
            label={menu}
            shape="round"
            onClick={() => handleButtonClick(menu)}
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
