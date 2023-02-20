import React, { Fragment } from "react";
import Carousel from "@/components/shared/Carousel/Carousel";
import Tag from "@/components/shared/Tag/Tag";
import { IMenu } from "@/api/types/menu";
import * as S from "./MenuHero.styled";

function MenuHero({ menuImage, name, category, basePrice, basicInfo }: Partial<IMenu>) {
  return (
    <S.Wrap>
      <S.CarouselWrap>{menuImage && <Carousel images={menuImage} />}</S.CarouselWrap>
      <S.MainBox>
        <h1>{name}</h1>
        <div>
          {category?.map(categoryItem => (
            <Tag key={categoryItem} type="square" label={categoryItem} cssProp={S.tagStyle}>
              {`#${categoryItem}`}
            </Tag>
          ))}
        </div>
        <p>
          기본 <strong>{basePrice?.toLocaleString()}원</strong>
        </p>
      </S.MainBox>
      <S.InfoBox>
        <S.InfoContent>
          {basicInfo &&
            basicInfo?.map(info => (
              <Fragment key={info.name}>
                <S.Name>{info.name}</S.Name>
                <S.Desc>{info.desc}</S.Desc>
              </Fragment>
            ))}
        </S.InfoContent>
        <small>* 그 외의 옵션은 직접 문의 부탁드립니다.</small>
      </S.InfoBox>
    </S.Wrap>
  );
}

export default MenuHero;
