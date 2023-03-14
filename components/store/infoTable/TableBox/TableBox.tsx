import React from "react";
import { IKeyValue, ITime } from "@/api/types/shared";
import Text from "@/components/shared/Text/Text";
import * as S from "./TableBox.styled";

interface IInfo {
  option: "notice" | "info";
  data: (IKeyValue | ITime)[];
}

interface IOptions {
  [key: string]: { [key: string]: string };
}

const optionList: IOptions = {
  notice: {
    key: "day",
    value: "hour",
  },
  info: {
    key: "key",
    value: "value",
  },
};

export default function TableBox({ option, data }: IInfo) {
  const { key, value } = optionList[option];

  return (
    <S.Grid option={option}>
      {data.map(tableItem => (
        <React.Fragment key={tableItem[key]}>
          <S.Key>
            <Text weight={500} as="h3">
              {tableItem[key]}
            </Text>
          </S.Key>
          <S.Value>
            <Text weight={400} as="p">
              {tableItem[value]}
            </Text>
          </S.Value>
        </React.Fragment>
      ))}
    </S.Grid>
  );
}
