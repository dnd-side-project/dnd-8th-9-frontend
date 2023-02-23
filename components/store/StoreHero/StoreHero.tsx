import React from "react";
import { useTheme } from "@emotion/react";

import { store } from "@/mocks/mockData/store";
import { reviews } from "@/mocks/mockData/review";
import { getOverallComment } from "@/utils/util";
import { Map } from "@/assets/icons";

import Carousel from "@/components/shared/Carousel/Carousel";
import Tag from "@/components/shared/Tag/Tag";
import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";

import ContentBox from "../ContentBox/ContentBox";
import * as S from "./StoreHero.styled";

function StoreHero() {
  const { name, category, location, priceRange } = store;
  const {
    overallStats: { stats, rating, totalReviews },
    reviewList,
  } = reviews;
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
        <S.ReviewBox>
          <h3>당도러가 선택한 이 스토어의 매력 🌟</h3>
          <S.ReviewStats>
            <Icon size="m" name="heart" fill={colors.primary} color={colors.primary} />
            <span>{rating}%</span>
            <small>({reviewList.length})명 참여</small>
            <strong>{getOverallComment(rating)}</strong>
          </S.ReviewStats>
          <S.ReviewTags className="tags">
            {stats.slice(0, 2).map(({ optionName, count }) => (
              <Tag type="double" label={optionName} key={optionName} cssProp={S.optionStyle}>
                <p>{optionName}</p>
                <span>{count}</span>
              </Tag>
            ))}
            <div className="iconWrap">
              <Icon name="ellipsis" />
            </div>
          </S.ReviewTags>
          <Button type="button" label="write a review" shape="square" cssProp={S.reviewButton}>
            <>
              <Icon size="s" name="pencil" color={colors.primary} />
              리뷰쓰기
            </>
          </Button>
        </S.ReviewBox>
      </S.MainInfoSection>
      <ContentBox title="수령방식" cssProp={S.contentBoxCss}>
        {store.canDelivery && (
          <S.Content>
            <Icon name="delivery" color={colors.gray[200]} size="m" />
            <span>택배가능</span>
            <small>국내배송, 결제 4 - 5일 내 배송</small>
          </S.Content>
        )}
        {store.canPickup && (
          <S.Content>
            <Icon name="store" color={colors.gray[200]} size="m" />
            <span>픽업가능</span>
            <small>영업일 기준, 공휴일 불가</small>
          </S.Content>
        )}
      </ContentBox>
    </S.Container>
  );
}

export default StoreHero;
