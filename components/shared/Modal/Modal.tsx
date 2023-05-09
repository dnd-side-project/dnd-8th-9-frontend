import * as S from "./Modal.styled";

interface IProp {
  children: JSX.Element;
  opacity?: boolean;
}

function Modal({ children, opacity = true }: IProp) {
  return (
    <S.ModalWrap>
      <S.BackgroundLayer opacity={opacity} />
      <S.ContentWrap>{children}</S.ContentWrap>
    </S.ModalWrap>
  );
}

export default Modal;
