import useFilterStore from "@/store/filter";
import * as S from "./RadioGroup.styled";

interface IProp {
  options: string[];
  type: "카테고리" | "가격" | "주문플랫폼" | "수령방법";
}

function RadioGroup({ options, type }: IProp) {
  const { updateSelectedFilterOptions, selectedFilterOptions } = useFilterStore();

  const handleClick = (option: string) => {
    updateSelectedFilterOptions(type, option);
  };

  return (
    <S.Container>
      {options.map(option => (
        <S.LabelContainer htmlFor={option} key={option} onClick={() => handleClick(option)}>
          <S.RadioInput
            type="radio"
            id={option}
            value={option}
            name={option}
            checked={selectedFilterOptions[type] === option}
          />
          <S.CustomRadio />
          {option}
        </S.LabelContainer>
      ))}
    </S.Container>
  );
}

export default RadioGroup;
