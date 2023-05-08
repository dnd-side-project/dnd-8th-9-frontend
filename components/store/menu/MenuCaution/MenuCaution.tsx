import { IMenuOption } from "@/types/api";
import Text from "@/components/shared/Text/Text";
import * as S from "./MenuCaution.styled";

interface IProp {
  caution: IMenuOption;
}

function MenuCaution({ caution }: IProp) {
  return (
    <S.CautionContent>
      {caution.value.map((cautionValue, idx) => (
        <S.CautionItem key={(cautionValue as string) + String(idx)}>
          <Text size={13}>{cautionValue as string}</Text>
        </S.CautionItem>
      ))}
    </S.CautionContent>
  );
}

export default MenuCaution;
