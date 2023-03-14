import Text from "../Text/Text";
import * as S from "./NoticeInfo.styled";

interface INoticeInfo {
  data: {
    profileImage: string;
    date: string;
    content: string;
  };
}

export default function NoticeInfo({ data }: INoticeInfo) {
  return (
    <S.Container>
      <Text data={data.content} />
    </S.Container>
  );
}
