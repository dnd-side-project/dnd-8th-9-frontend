import React, { Fragment } from "react";
import { useTheme } from "@emotion/react";
import { IMenu } from "@/api/types/menu";
import { generatePriceString } from "@/utils/util";
import Carousel from "@/components/shared/Carousel/Carousel";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./MenuHero.styled";

function MenuHero({ menuImage, name: storeName, category, basePrice, basicInfo }: Partial<IMenu>) {
  const { colors } = useTheme();

  return (
    <>
      <S.CarouselWrap>{menuImage && <Carousel images={menuImage} />}</S.CarouselWrap>
      <S.InfoWrap>
        <S.MainInfoContainer>
          <S.Header>
            <div>
              <Text as="h1" weight={700} size={20}>
                {storeName}
              </Text>
              <Icon
                name="saveBookmarkWide"
                size="m"
                color={colors.grey[400]}
                fill={colors.grey[400]}
              />
            </div>
            <Icon name="share" size="l" color={colors.grey[800]} />
          </S.Header>
          <S.CategoryWrap>
            {category?.map(categoryItem => (
              <S.CategoryTag key={categoryItem} type="square" label={categoryItem}>
                <Text size={12} weight={500} color={colors.grey[800]}>{`#${categoryItem}`}</Text>
              </S.CategoryTag>
            ))}
          </S.CategoryWrap>
          <S.Price size={18} weight={700} color={colors.blue[800]}>
            <small>기본</small>
            {basePrice && generatePriceString(basePrice)}
          </S.Price>
        </S.MainInfoContainer>
        <S.SubInfoContainer>
          <S.InfoContent>
            {basicInfo &&
              basicInfo?.map(({ name, desc }) => (
                <Fragment key={name}>
                  <Text size={15} weight={600}>
                    {name}
                  </Text>
                  <Text color={colors.grey[700]}>{desc}</Text>
                </Fragment>
              ))}
          </S.InfoContent>
          <small>* 그 외의 옵션은 직접 문의 부탁드립니다.</small>
        </S.SubInfoContainer>
      </S.InfoWrap>
    </>
  );
}

export default MenuHero;
