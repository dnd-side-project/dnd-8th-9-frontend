import { useTheme } from "@emotion/react";
import { ILink } from "@/types/api/shared";
import Text from "@/components/shared/Text/Text";
import * as S from "./OrderLink.styled";

interface IProps {
  time: number;
  links: ILink[];
}

function OrderLink({ links, time }: IProps) {
  const { colors } = useTheme();

  return (
    <S.OrderContentBox title="주문하러 가기" hasInfoIcon>
      <S.Desc as="p" weight={500} color={colors.grey[800]}>
        평균 <strong>{time}일 전까지 예약</strong>이 필요한 업체입니다.
      </S.Desc>
      {links.map(link => (
        <S.LinkItem key={link.id}>
          <div>
            <S.IconWrap>
              <S.PlatformIcon
                name={link.platform}
                size="l"
                color={colors.grey[700]}
                fill={link.platform === "kakao" ? colors.grey[700] : "none"}
              />
            </S.IconWrap>
            <Text weight={600} size={15}>
              {link.role}
            </Text>
          </div>
          <S.LinkButton href={link.url}>
            <Text weight={500} size={16} color={colors.grey[100]}>
              바로가기
            </Text>
          </S.LinkButton>
        </S.LinkItem>
      ))}
    </S.OrderContentBox>
  );
}

export default OrderLink;
