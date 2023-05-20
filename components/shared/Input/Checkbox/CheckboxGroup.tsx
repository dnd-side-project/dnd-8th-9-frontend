import useFilterStore from "@/store/filter";
import { TCategory } from "@/types/api";
import * as S from "./CheckboxGroup.styled";

interface IProp {
  options: string[];
  type: "카테고리" | "가격" | "주문플랫폼" | "수령방법";
}

function CheckboxGroup({ options, type }: IProp) {
  const { updateSelectedFilterOptions, selectedFilterOptions } = useFilterStore();

  const handleClick = (option: string) => {
    updateSelectedFilterOptions(type, option);
  };

  return (
    <S.Container>
      {options.map(option => (
        <S.Wrap key={option} onClick={() => handleClick(option)}>
          <S.CheckboxInput
            type="checkbox"
            id={option}
            checked={selectedFilterOptions[type]?.indexOf(option as TCategory) !== -1}
          />
          <label htmlFor={option}>{option}</label>
        </S.Wrap>
      ))}
    </S.Container>
  );
}

export default CheckboxGroup;
