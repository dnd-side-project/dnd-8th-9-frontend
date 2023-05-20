import { Fragment } from "react";
import { IKeyValue } from "@/types/api/shared";
import Text from "@/components/shared/Text/Text";
import * as S from "./Table.styled";

interface IInfo {
  option: "notice" | "info";
  tableData: IKeyValue;
}

export default function TableBox({ option, tableData }: IInfo) {
  return (
    <S.Grid option={option}>
      {Object.keys(tableData).map(key => (
        <Fragment key={key}>
          <S.Key>
            <Text weight={500} as="h3">
              {key}
            </Text>
          </S.Key>
          <S.Value>
            <Text weight={400} as="p">
              {tableData[key]}
            </Text>
          </S.Value>
        </Fragment>
      ))}
    </S.Grid>
  );
}
