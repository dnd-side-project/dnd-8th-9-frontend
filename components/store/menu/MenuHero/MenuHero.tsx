import React, { Fragment } from "react";
import { useTheme } from "@emotion/react";
import { IMenuDetails } from "@/types/api";
import { generatePriceString } from "@/utils/util";
import Carousel from "@/components/shared/Carousel/Carousel";
import Text from "@/components/shared/Text/Text";
import Icon from "@/components/shared/Icon/Icon";
import Bookmark from "@/components/shared/Bookmark/Bookmark";
import * as S from "./MenuHero.styled";

interface IProps {
  data: IMenuDetails;
}

function MenuHero({ data }: IProps) {
  const { colors } = useTheme();
  const { menuImages, name: storeName, category, basePrice, basicInfo } = data;

  return (
    <>
      <S.CarouselWrap>{menuImages && <Carousel images={menuImages} />}</S.CarouselWrap>
      <S.InfoWrap>
        <S.MainInfoContainer>
          <S.Header>
            <div>
              <Text as="h1" weight={700} size={20}>
                {storeName}
              </Text>
              <Bookmark type="menu" location="page" />
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
              Object.keys(basicInfo).map(key => (
                <Fragment key={key}>
                  <Text size={15} weight={600}>
                    {key}
                  </Text>
                  <Text color={colors.grey[700]}>{basicInfo[key]}</Text>
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
