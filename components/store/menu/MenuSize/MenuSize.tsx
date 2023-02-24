import { IMenuOption } from "@/api/types/menu";
import { TTable } from "@/api/types/shared";
import { SizeCircle } from "@/assets/images";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./MenuSize.styled";

const SIZE = [
  {
    size: 56,
    marginTop: 24,
  },
  {
    size: 70,
    marginTop: 17,
  },
  {
    size: 76,
    marginTop: 14,
  },
  {
    size: 84,
    marginTop: 10,
  },
];

interface IProp {
  size: IMenuOption;
}

function MenuSize({ size }: IProp) {
  return (
    <ContentBox title="사이즈는 이렇게 있어요!" cssProp={S.contentSizeBoxCss} name="size">
      <S.SizeContent>
        {size.value.map((option, idx) => (
          <div key={(option as TTable).name}>
            <S.Circle size={SIZE[idx].size}>
              <SizeCircle width={SIZE[idx].size} height={SIZE[idx].size} />
              <span>{(option as TTable).desc}</span>
            </S.Circle>
            <S.SizeLabel size={SIZE[idx].size} marginTop={SIZE[idx].marginTop}>
              <p>{(option as TTable).name}</p>
            </S.SizeLabel>
          </div>
        ))}
      </S.SizeContent>
    </ContentBox>
  );
}

export default MenuSize;
