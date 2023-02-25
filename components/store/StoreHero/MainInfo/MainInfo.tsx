import { useTheme } from "@emotion/react";
import { IStore } from "@/api/types/store";
import { Map } from "@/assets/icons";
import Tag from "@/components/shared/Tag/Tag";
import * as S from "./MainInfo.styled";

interface IProp {
  data: Partial<IStore>;
}

function MainInfo({ data }: IProp) {
  const { colors } = useTheme();
  const { name, category, location, priceRange } = data;

  return (
    <S.InfoBox>
      <S.Header>
        <h1>{name}</h1>
        <div>
          {category?.map(categoryItem => (
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
          {priceRange?.min.toLocaleString()}원 ~ {priceRange?.max.toLocaleString()}원
        </strong>
      </S.Price>
    </S.InfoBox>
  );
}

export default MainInfo;
