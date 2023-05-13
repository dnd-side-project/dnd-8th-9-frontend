/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { TCategory } from "@/types/api/shared";
import { chunkArray } from "@/utils/util";
import { useGetStoreList } from "@/hooks/queries/store";

import Text from "@/components/shared/Text/Text";
import StoreSingleCard from "@/components/shared/Card/StoreSingleCard";
import * as S from "./StoreRank.styled";

const CATEGORY_LIST = ["레터링", "캐릭터", "도시락", "포토", "생화"];

function StoreRank() {
  const { colors } = useTheme();
  const [currentCategory, setCurrentCategory] = useState<TCategory>("레터링");
  const { data: storeListData, isLoading, isError } = useGetStoreList();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const changeCategory = (category: TCategory) => {
    setCurrentCategory(category);
  };

  return (
    <S.Container>
      <Text size={18} weight={600} as="h2">
        마포구 스타일별 BEST 스토어
      </Text>
      <S.ButtonList>
        {CATEGORY_LIST.map(category => (
          <S.CategoryButton
            key={category}
            onClick={() => changeCategory(category as TCategory)}
            className={currentCategory === category ? "isSelected" : ""}
            label={category}
            type="button"
            shape="round"
          >
            <Text size={15} color={colors.grey[800]}>
              {category}
            </Text>
          </S.CategoryButton>
        ))}
      </S.ButtonList>
      <S.SwiperWrap>
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
          {chunkArray(storeListData.data, 3).map((chunk, idx) => (
            <SwiperSlide key={idx} style={{ textAlign: "left" }}>
              {chunk.map((store, index) => (
                <S.CardWrap key={store.id}>
                  <StoreSingleCard data={store} rank={3 * idx + 1 + index} />
                </S.CardWrap>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrap>
    </S.Container>
  );
}

export default StoreRank;
