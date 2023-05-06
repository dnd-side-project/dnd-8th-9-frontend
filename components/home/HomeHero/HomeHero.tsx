import { useTheme } from "@emotion/react";
import { Cake } from "@/assets/images";
import { useGetMenuList } from "@/hooks/queries/menu";
import MenuDoubleCard from "@/components/shared/Card/MenuDoubleCard";
import HomeHeader from "../HomeHeader/HomeHeader";
import * as S from "./HomeHero.styled";

function HomeHero() {
  const { colors } = useTheme();
  const { data: menuListData } = useGetMenuList();

  return (
    <S.HeroWrap>
      <S.HeroContainer>
        <HomeHeader />
        <S.HeroTitle>
          <S.TextWrap>
            <S.Title weight={700} size={22}>
              발렌타인데이 까지 <strong>19일</strong> 남았어요!
            </S.Title>
            <S.Desc size={15} color={colors.grey[800]}>
              발렌타인데이에 인기 많은 디자인을 소개해드릴게요
            </S.Desc>
          </S.TextWrap>
          <S.ImageWrap>
            <Cake className="cake" />
          </S.ImageWrap>
        </S.HeroTitle>
        <S.StoreWrap>
          {menuListData?.data.map(menu => (
            <MenuDoubleCard size="s" key={menu.id} data={menu} />
          ))}
        </S.StoreWrap>
      </S.HeroContainer>
    </S.HeroWrap>
  );
}

export default HomeHero;
