import React from "react";
import { useTheme } from "@emotion/react";

import { store } from "@/mocks/mockData/store";
import { reviews } from "@/mocks/mockData/review";
import { Map } from "@/assets/icons";

import Carousel from "@/components/shared/Carousel/Carousel";
import Tag from "@/components/shared/Tag/Tag";

import RecieveMethod from "./RecieveMethod/RecieveMethod";
import OrderLink from "./OrderLink/OrderLink";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import * as S from "./StoreHero.styled";

function StoreHero() {
  const { name, category, location, priceRange, canDelivery, canPickup } = store;
  const { overallStats } = reviews;
  const { colors } = useTheme();
  return (
    <S.Container>
      <S.CarouselWrap>
        <Carousel images={store.storeImages} bulletMargin="3.2rem" />
      </S.CarouselWrap>
      <S.MainInfoSection>
        <S.InfoBox>
          <S.Header>
            <h1>{name}</h1>
            <div>
              {category.map(categoryItem => (
                <Tag
                  type="square"
                  key={categoryItem}
                  label={`category is ${categoryItem}`}
                  cssProp={S.tagStyle}
                >
                  {categoryItem}
                </Tag>
              ))}
            </div>
          </S.Header>
          <S.Location>
            <Map width="12" height="12" fill={colors.primary} />
            {location}
          </S.Location>
          <S.Price>
            기본
            <strong>
              {priceRange.min.toLocaleString()}원 ~ {priceRange.max.toLocaleString()}원
            </strong>
          </S.Price>
        </S.InfoBox>
        <ReviewInfo overallStats={overallStats} />
      </S.MainInfoSection>
      <RecieveMethod canDelivery={canDelivery} canPickup={canPickup} />
      <OrderLink />
    </S.Container>
  );
}

export default StoreHero;
