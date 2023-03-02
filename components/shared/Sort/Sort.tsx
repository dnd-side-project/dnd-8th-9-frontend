import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./Sort.styled";

type TSort = "추천순" | "도움되는순" | "당도높은순" | "최신순";

const SORT_METHODS: TSort[] = ["추천순", "도움되는순", "당도높은순", "최신순"];

function Sort() {
  const { colors } = useTheme();
  const [currentSortMethod, setCurrentSortMethod] = useState<TSort>(SORT_METHODS[0]);
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => {
    setOpenModal(prev => !prev);
  };

  const changeSortMethod = (sort: TSort) => {
    setCurrentSortMethod(sort);
    setOpenModal(prev => !prev);
  };

  return (
    <S.SortContainer>
      <S.SortButton type="button" label="sort button" onClick={toggleOpenModal} shape="square">
        <Text weight={500} color={colors.grey[800]}>
          {currentSortMethod}
        </Text>
        <Icon name="sort" color={colors.grey[600]} />
      </S.SortButton>
      <S.SortModal isOpen={openModal}>
        {SORT_METHODS.map(sort => (
          <S.SortItemButton key={sort} onClick={() => changeSortMethod(sort)}>
            <Text
              weight={500}
              color={currentSortMethod === sort ? colors.grey[900] : colors.grey[600]}
            >
              {sort}
            </Text>
          </S.SortItemButton>
        ))}
      </S.SortModal>
    </S.SortContainer>
  );
}

export default Sort;
