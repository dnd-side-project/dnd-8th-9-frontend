import * as S from "./CheckboxGroup.styled";

interface IProp {
  options: string[];
}

function CheckboxGroup({ options }: IProp) {
  return (
    <S.Container>
      {options.map(option => (
        <S.Wrap key={option}>
          <S.CheckboxInput type="checkbox" id={option} />
          <label htmlFor={option}>{option}</label>
        </S.Wrap>
      ))}
    </S.Container>
  );
}

export default CheckboxGroup;
