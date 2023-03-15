import { IMenuOption } from "@/api/types/menu";
import * as S from "./MenuCaution.styled";

interface IProp {
  caution: IMenuOption;
}

function MenuCaution({ caution }: IProp) {
  return (
    <S.CautionContent>
      {caution.value.map((cautionValue, idx) => (
        <li key={(cautionValue as string) + String(idx)}>{cautionValue as string}</li>
      ))}
    </S.CautionContent>
  );
}

export default MenuCaution;
