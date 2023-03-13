import * as S from "./Modal.styled";

interface IProp {
  children: JSX.Element;
}

function Modal({ children }: IProp) {
  return (
    <S.ModalWrap>
      <S.BackgroundLayer />
      <S.ContentWrap>{children}</S.ContentWrap>
    </S.ModalWrap>
  );
}

export default Modal;
