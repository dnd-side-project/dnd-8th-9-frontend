import * as S from "./RadioGroup.styled";

interface IProp {
  options: string[];
}

function RadioGroup({ options }: IProp) {
  return (
    <S.Container>
      {options.map(option => (
        <S.LabelContainer htmlFor={option} key={option}>
          <S.RadioInput type="radio" id={option} value={option} name={option} />
          <S.CustomRadio />
          {option}
        </S.LabelContainer>
      ))}
    </S.Container>
  );
}

export default RadioGroup;
