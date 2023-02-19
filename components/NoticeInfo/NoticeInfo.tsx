import Text from "../Text/Text";
import * as S from "./NoticeInfo.styled";

interface INoticeInfo {
  title: string;
  data: {
    profileImage: string;
    date: string;
    content: string;
  };
}

export default function NoticeInfo({ title, data }: INoticeInfo) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title> <Text data={data.content} />
    </S.Container>
  );
}
