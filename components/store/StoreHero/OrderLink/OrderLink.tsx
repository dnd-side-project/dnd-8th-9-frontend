import { useTheme } from "@emotion/react";
import { ILink } from "@/api/types/shared";
import Text from "@/components/shared/Text/Text";
import * as S from "./OrderLink.styled";

interface IProps {
  links: ILink[];
}

function OrderLink({ links }: IProps) {
  const { colors } = useTheme();

  return (
    <S.OrderContentBox title="주문하러 가기" hasInfoIcon>
      <S.Desc as="p" weight={500} color={colors.grey[800]}>
        평균 <strong>00일 전까지 예약</strong>이 필요한 업체입니다.
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
            <Text weight={600} size={15} color={colors.grey[900]}>
              {link.role}
            </Text>
          </div>
          <S.LinkButton href={link.link}>
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
