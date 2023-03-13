import { NoResultImage } from "@/assets/images";
import * as S from "./NoResult.styled";

interface IProp {
  currentSearch: string;
}

function NoResult({ currentSearch }: IProp) {
  return (
    <S.Wrap>
      <NoResultImage />
      <S.Text>
        &apos;{currentSearch}&apos; 검색어와 관련된 결과가 없어요. <br />
        띄어쓰기, 맞춤법이 정확한지 <br /> 한번 더 확인해주세요!
      </S.Text>
    </S.Wrap>
  );
}

export default NoResult;
