import Sheet from "react-modal-sheet";
import { useTheme } from "@emotion/react";
import useModalStore from "@/store/modal";
import Text from "@/components/shared/Text/Text";
import * as S from "./LogoutModal.styled";

function LogoutModal() {
  const { colors } = useTheme();
  const { logoutModalOpen, toggleLogoutModal } = useModalStore();

  return (
    <S.CustomSheet isOpen={logoutModalOpen} onClose={toggleLogoutModal}>
      <Sheet.Container>
        <Sheet.Content>
          <S.TextContainer>
            <Text as="h1" size={18} weight={700} color={colors.grey[900]}>
              로그아웃 하시겠어요?
            </Text>
            <Text as="p" size={14} weight={400} color={colors.grey[800]}>
              로그아웃 시, 기존 로그인하셨던 SNS로 재로그인이 가능합니다.
            </Text>
          </S.TextContainer>
          <S.LogoutButton type="button" shape="square" label="logout">
            <Text size={16} weight={500} color={colors.grey[100]}>
              로그아웃
            </Text>
          </S.LogoutButton>
          <S.CancelButton type="button" shape="square" label="later">
            <Text size={14} weight={500} color={colors.grey[700]}>
              다음에 할게요
            </Text>
          </S.CancelButton>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </S.CustomSheet>
  );
}

export default LogoutModal;
