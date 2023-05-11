import Sheet from "react-modal-sheet";
import { css, useTheme } from "@emotion/react";
import { filterTab } from "@/constants/tabs";
import useFilterStore from "@/store/filter";
import CheckboxGroup from "../Input/Checkbox/CheckboxGroup";
import RadioGroup from "../Input/Radio/RadioGroup";
import Text from "../Text/Text";
import * as S from "./FilterModal.styled";

interface IFilterTabMenu {
  [key: string]: {
    type: "checkbox" | "radio";
    options: string[];
  };
}

const FILTER_TAB_MENU: IFilterTabMenu = {
  카테고리: {
    type: "checkbox",
    options: ["레터링", "캐릭터/입체", "포토", "꽃", "기타"],
  },
  가격: {
    type: "radio",
    options: ["1만원 ~ 2만원", "2만원 ~ 3만원", "3만원 ~ 4만원", "4만원 이상"],
  },
  주문플랫폼: {
    type: "checkbox",
    options: ["인스타그램", "아이디어스", "네이버스토어", "카카오톡 채널", "업체 홈페이지"],
  },
  수령방법: { type: "checkbox", options: ["매장에서 픽업", "택배로 배송"] },
};

function FilterModal() {
  const { colors } = useTheme();
  const {
    filterModalOpen,
    toggleFilterModalOpen,
    currentFilterTab,
    applySelectedFilterOptions,
    resetSelectedFilterOptions,
  } = useFilterStore();

  const handleSubmit = () => {
    applySelectedFilterOptions();
    toggleFilterModalOpen();
  };

  return (
    <S.CustomSheet isOpen={filterModalOpen} onClose={toggleFilterModalOpen}>
      <Sheet.Container>
        <Sheet.Content>
          <S.Header>
            <Text size={18} weight={700}>
              필터링
            </Text>
          </S.Header>
          <S.FilterTab target="filterTab" menuList={filterTab} />
          {FILTER_TAB_MENU[currentFilterTab].type === "checkbox" ? (
            <CheckboxGroup
              options={FILTER_TAB_MENU[currentFilterTab].options}
              type={currentFilterTab}
            />
          ) : (
            <RadioGroup
              options={FILTER_TAB_MENU[currentFilterTab].options}
              type={currentFilterTab}
            />
          )}
          <S.ButtonWrap>
            <S.ClearButton
              type="reset"
              label="reset filter"
              shape="square"
              onClick={resetSelectedFilterOptions}
            >
              초기화
            </S.ClearButton>
            <S.FilterButton
              type="submit"
              label="apply filter"
              shape="square"
              onClick={handleSubmit}
            >
              필터 적용
            </S.FilterButton>
          </S.ButtonWrap>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </S.CustomSheet>
  );
}

export default FilterModal;
