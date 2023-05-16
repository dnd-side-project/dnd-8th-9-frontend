/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@emotion/react";

import useFilterStore from "@/store/filter";
import useCustomSearchParam from "@/hooks/useCustomSearchParam";
import { IFilterPayload } from "@/types/store/filter";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./FilterBar.styled";

type TFilterTab = "카테고리" | "가격" | "주문플랫폼" | "수령방법";

const FILTER_TAB_MENU: TFilterTab[] = ["카테고리", "가격", "주문플랫폼", "수령방법"];

const searchParamObj: IFilterPayload = {
  search: "케이크",
  categories: ["꽃", "캐릭터"],
  minPrice: 12000,
  maxPrice: 50000,
  platforms: ["KAKAO"],
  receive: "canPickup",
  sort: "latest",
  page: 1,
};

const cond = encodeURIComponent(JSON.stringify(searchParamObj));

function FilterBar() {
  const { colors } = useTheme();
  const searchParams = useSearchParams();
  const { urlToPayload, payloadToFilterStore } = useCustomSearchParam();

  const {
    toggleFilterModalOpen,
    syncSelectedAndAppliedFilterOptions,
    changeCurrentFilterTab,
    appliedFilterOptions,
    updateAppliedFilterOptions,
    clearAppliedFilterSection,
  } = useFilterStore();

  useEffect(() => {
    const parsedSearchParam = urlToPayload();
    const filterStoreState = payloadToFilterStore(parsedSearchParam);

    // console.log("filterStore State", payloadToFilterStore(parsedSearchParam));
    updateAppliedFilterOptions(filterStoreState);
  }, []);

  // const createQueryString = (searchParamObject: IFilterPayload) => {
  //   const params = new URLSearchParams(searchParams);

  //   Object.keys(searchParamObject).forEach(key => {
  //     const value = searchParamObject[key as keyof IFilterPayload];

  //     if (Array.isArray(value)) {
  //       value.forEach(item => params.append(key, item));
  //     } else {
  //       params.set(key, String(value));
  //     }
  //   });

  //   return params.toString();
  // };

  // const queryString = createQueryString(searchParamObj);

  const handleButtonClick = (menu: TFilterTab) => {
    changeCurrentFilterTab(menu);
    toggleFilterModalOpen();
    syncSelectedAndAppliedFilterOptions("applied");
  };

  return (
    <S.Wrap>
      {FILTER_TAB_MENU.map(menu =>
        appliedFilterOptions[menu]?.length > 0 ? (
          <S.SelectedFilterButton key={menu} type="button" label={menu} shape="round">
            <button onClick={() => handleButtonClick(menu)}>
              <Text size={14} weight={500} color={colors.blue[700]}>
                {`${menu} `}
                {menu === "가격" || menu === "수령방법"
                  ? appliedFilterOptions[menu]
                  : appliedFilterOptions[menu].length}
              </Text>
            </button>
            <button onClick={() => clearAppliedFilterSection(menu)}>
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
