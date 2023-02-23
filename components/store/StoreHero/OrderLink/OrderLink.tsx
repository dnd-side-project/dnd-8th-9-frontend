import Button from "@/components/shared/Button/Button";
import Icon from "@/components/shared/Icon/Icon";
import ContentBox from "../../ContentBox/ContentBox";
import * as S from "./OrderLink.styled";

function OrderLink() {
  return (
    <ContentBox title="주문하러 가기" cssProp={S.contentOrderBoxCss}>
      <p>
        평균 <strong>00일 전까지 예약</strong>이 가능한 업체입니다.
      </p>
      <div className="buttons">
        <Button type="button" label="chat" shape="square" cssProp={S.instaButtonCss}>
          <Icon name="instagram" size="s" />
          <span>실시간 문의 및 응답</span>
        </Button>
        <Button type="button" label="order" shape="square" cssProp={S.kakaoButtonCss}>
          <Icon name="kakao" size="s" fill="white" color="white" />
          <span>주문 및 예약</span>
        </Button>
      </div>
    </ContentBox>
  );
}

export default OrderLink;
