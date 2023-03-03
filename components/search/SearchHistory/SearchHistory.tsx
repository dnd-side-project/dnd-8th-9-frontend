import { useTheme } from "@emotion/react";
import Button from "@/components/shared/Button/Button";
import Text from "@/components/shared/Text/Text";
import * as S from "./SearchHistory.styled";

const HISTORY_DATA = ["케릭터", "스누피", "어버이날", "레터링", "도시락", "2단", "고양이", "돈"];

function SearchHistory() {
  const { colors } = useTheme();
  const deleteAll = () => {};
  const handleHistory = () => {};

  return (
    <div>
      <S.Header>
        <Text as="h3" size={16} weight={600} color={colors.grey[900]}>
          최근 검색어
        </Text>
        <Button type="button" label="delete all" shape="square" onClick={deleteAll}>
          <Text size={13} weight={500} color={colors.grey[700]}>
            전체삭제
          </Text>
        </Button>
      </S.Header>
      <S.HistoryList>
        {HISTORY_DATA.map(history => (
          <Button
            key={history}
            type="button"
            label={history}
            shape="square"
            onClick={handleHistory}
          >
            <Text size={15} weight={500} color={colors.grey[800]}>
              {history}
            </Text>
          </Button>
        ))}
      </S.HistoryList>
    </div>
  );
}

export default SearchHistory;
