import Sheet from "react-modal-sheet";
import { css, useTheme } from "@emotion/react";
import { filterTab } from "@/constants/tabs";
import Text from "../Text/Text";
import * as S from "./FilterModal.styled";

interface IProp {
  isOpen: boolean;
  toggleModal: () => void;
}

function FilterModal({ isOpen, toggleModal }: IProp) {
  const { colors } = useTheme();

  return (
    <S.CustomSheet isOpen={isOpen} onClose={toggleModal}>
      <Sheet.Container>
        <Sheet.Content>
          <S.Header>
            <Text size={18} weight={700} color={colors.grey[900]}>
              필터링
            </Text>
          </S.Header>
          <S.FilterTab
            target="filterTab"
            menuList={filterTab}
            type="fixed"
            cssProp={css`
              --size: ${filterTab.length};
            `}
          />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </S.CustomSheet>
  );
}

export default FilterModal;
