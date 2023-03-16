import { useTheme, css } from "@emotion/react";
import useModalStore from "@/store/modal";
import Button from "../Button/Button";
import * as S from "./ModalMessage.styled";

interface IProp {
  title: string;
  detail: string;
}

function ModalMessage({ title, detail }: IProp) {
  const { colors, fontSizes } = useTheme();
  const { toggleOrderFormModal } = useModalStore();

  const closeModal = () => {
    toggleOrderFormModal();
  };

  return (
    <S.Wrap>
      <S.Title>{title}</S.Title>
      <S.Detail>{detail}</S.Detail>
      <S.ButtonWrap>
        <Button
          label="like"
          type="button"
          shape="round"
          cssProp={css`
            color: ${colors.blue[700]};
            font-size: ${fontSizes[16]};
            line-height: 1.9rem;
            font-weight: 600;
          `}
          onClick={closeModal}
        >
          확인
        </Button>
      </S.ButtonWrap>
    </S.Wrap>
  );
}

export default ModalMessage;
