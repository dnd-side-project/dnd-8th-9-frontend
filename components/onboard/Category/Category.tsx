import Image from "next/image";
import { useTheme } from "@emotion/react";
import useOnboardStore from "@/store/onboard";
import { cakeStyles } from "@/mocks/mockData/category";
import Icon from "@/components/shared/Icon/Icon";
import Text from "@/components/shared/Text/Text";
import * as S from "./Category.styled";

function Category() {
  const { colors } = useTheme();
  const { cakeStyle, setCakeStyle } = useOnboardStore();

  const handleClick = (cakeStyleItem: string) => {
    setCakeStyle(cakeStyleItem);
  };

  return (
    <S.StyleContainer>
      {cakeStyles.map(style => (
        <S.StyleItem
          key={style.id}
          className={cakeStyle.includes(style.name) ? "isSelected" : ""}
          onClick={() => handleClick(style.name)}
        >
          <S.ImageWrap>
            <Image src={style.imageUrl} alt={style.name} fill />
            <div className="checkbox">
              <Icon
                name="check"
                size="m"
                color={cakeStyle.includes(style.name) ? colors.grey[100] : colors.grey[500]}
              />
            </div>
          </S.ImageWrap>
          <Text size={14} weight={500}>
            {style.name}
          </Text>
        </S.StyleItem>
      ))}
    </S.StyleContainer>
  );
}

export default Category;
