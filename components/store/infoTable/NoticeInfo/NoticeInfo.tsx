import { useState } from "react";
import { useTheme } from "@emotion/react";
import Icon from "@/components/shared/Icon/Icon";
import * as S from "./NoticeInfo.styled";

interface INoticeInfo {
  data: {
    profileImage: string;
    date: string;
    content: string;
  };
}

export default function NoticeInfo({ data }: INoticeInfo) {
  const { colors } = useTheme();
  const [isPreviewMode, setIsPreviewMode] = useState(true);

  const toggleMode = () => {
    setIsPreviewMode(prev => !prev);
  };

  return (
    <S.Content>
      <S.Date size={12} color={colors.grey[500]}>
        {data.date}
      </S.Date>
      <S.TextBox as="p" isPreviewMode={isPreviewMode}>
        {data.content}
      </S.TextBox>
      <S.FullTextButton
        onClick={toggleMode}
        type="button"
        label={isPreviewMode ? "preview text" : "full text"}
        shape="round"
      >
        {isPreviewMode ? (
          <Icon name="arrowDown" size="m" color={colors.grey[600]} />
        ) : (
          <Icon name="arrowUp" size="m" color={colors.grey[600]} />
        )}
      </S.FullTextButton>
    </S.Content>
  );
}
