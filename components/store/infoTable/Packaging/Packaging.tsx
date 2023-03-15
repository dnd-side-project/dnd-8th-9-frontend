import { useTheme } from "@emotion/react";
import * as S from "./Packaging.styled";

interface IPackaging {
  data: {
    name: string;
    value: string[];
  }[];
}

export default function Packaging({ data }: IPackaging) {
  const { colors } = useTheme();

  return (
    <>
      {data.map(({ name, value }) => (
        <S.Content key={name}>
          <S.SubTitle as="h3" weight={600} color={colors.blue[800]}>
            {name}
          </S.SubTitle>
          <S.List>
            {value.map(item => (
              <li key={item}>
                <S.Value size={13}>{item}</S.Value>
              </li>
            ))}
          </S.List>
        </S.Content>
      ))}
    </>
  );
}
