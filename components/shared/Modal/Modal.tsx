import { useTheme } from "@emotion/react";
import Icon from "../Icon/Icon";
import * as S from "./Modal.styled";

interface IProp {
  children: JSX.Element;
  opacity?: boolean;
  closeModal: () => void;
}

function Modal({ children, opacity = true, closeModal }: IProp) {
  const { colors } = useTheme();

  return (
    <S.ModalWrap>
      <S.BackgroundLayer opacity={opacity} />
      <S.IconWrap onClick={() => closeModal()}>
        <Icon name="close" color={colors.grey[100]} size="s" />
      </S.IconWrap>
      <S.ContentWrap>{children}</S.ContentWrap>
    </S.ModalWrap>
  );
}

export default Modal;
