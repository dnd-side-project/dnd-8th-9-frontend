import { useTheme } from "@emotion/react";
import { IMenuOption, ITable } from "@/types/api";
import { SizeCircle } from "@/assets/images";
import Text from "@/components/shared/Text/Text";
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
  const { colors } = useTheme();

  return (
    <S.SizeContent>
      {size.value.map((option, idx) => (
        <div key={(option as ITable).name}>
          <S.Circle size={SIZE[idx].size}>
            <SizeCircle width={SIZE[idx].size} height={SIZE[idx].size} />
            <Text size={11} weight={600} color={colors.blue[700]}>
              {(option as ITable).desc}
            </Text>
          </S.Circle>
          <S.SizeLabel size={SIZE[idx].size} marginTop={SIZE[idx].marginTop}>
            <Text weight={500}>{(option as ITable).name}</Text>
          </S.SizeLabel>
        </div>
      ))}
    </S.SizeContent>
  );
}

export default MenuSize;
