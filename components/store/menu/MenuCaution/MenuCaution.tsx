import { IMenuOption } from "@/api/types/menu";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./MenuCaution.styled";

interface IProp {
  caution: IMenuOption;
}

function MenuCaution({ caution }: IProp) {
  return (
    <ContentBox title="메뉴에 대한 주의사항" cssProp={S.contentCautionBoxCss} name="caution">
      <S.CautionContent>
        {caution.value.map(cautionValue => (
          <li key={cautionValue as string}>{cautionValue as string}</li>
        ))}
      </S.CautionContent>
    </ContentBox>
  );
}

export default MenuCaution;
