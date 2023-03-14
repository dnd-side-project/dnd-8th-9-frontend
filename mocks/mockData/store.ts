import { IStore } from "@/api/types/store";

export const store: IStore = {
  id: 1,
  name: "케이크예스",
  location: "서울 마포구 모로2길 350",
  geoLocation: { latitude: -33.8655112697085, longtitude: 151.1971156302915 },
  category: ["레터링", "캐릭터/입체"],
  rating: 80,
  canPickup: true,
  canDelivery: true,
  priceRange: { max: 70000, min: 15000 },
  averageReservationNeededTime: 10,
  links: [
    {
      id: 1,
      platform: "kakao",
      link: "https://pf.kakao.com/_jIwLK",
      role: "주문 및 예약",
    },
    {
      id: 2,
      platform: "instagram",
      link: "https://www.instagram.com/cake.yesplease/",
      role: "실시간 문의",
    },
  ],
  orderForm: [
    { value: "예약자 성함", placeholder: "입금자명과 같아야 합니다" },
    { value: "연락처", placeholder: "'-'없이 작성해주세요" },
    { value: "예약희망 날짜", placeholder: "최소 2주 전부터 예약 가능합니다" },
    { value: "디자인", placeholder: "메뉴를 선택해주세요" },
    { value: "사이즈", placeholder: "예시) 미니사이즈" },
    { value: "맛", placeholder: "예시) 1번 바닐라" },
    { value: "레터링", placeholder: "한글 10자 이내 or 영어 15자 이내" },
    { value: "밑판 문구", placeholder: "한글 5자 이내 or 영어 10자 이내" },
    { value: "요청사항", placeholder: "예시) \n1. 레터링 색깔 분홍색, 보라색\n2. 초 곰돌이 모양" },
  ],
  notice: {
    packaging: [
      {
        name: "박스 사이즈",
        value: ["미니 12cm X 12cm X 8cm (도시락 케이크 포장)", "1호", "2호"],
      },
      { name: "추가 포장", value: ["리본"] },
    ],
    pickupHours: [
      { day: "월화목금", hour: "10:00 ~ 20:00" },
      { day: "수요일", hour: "10:00 ~ 20:00" },
      { day: "토,일,공휴일", hour: "9:00 ~ 17:00" },
    ],
    noticeInfo: {
      profileImage:
        "https://images.unsplash.com/photo-1665625252609-687d2e3ea212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      date: "2023.01.02",
      content:
        "※ 생화케이크 12월부터 당분간 쉬어갑니다🙏🏻 \n 생화케이크는 여유 있게 주문해 주셔야 하며, 생화케이크는 매번 동일한 디자인은 어렵습니다. 계절 또는 시장에 따라 꽃변동이 있기 때문에 원하시는 컬러&분위기 정도를 말씀해 주시면 최대한 참고해서 작업해 드립니다:)",
    },
  },
  info: {
    sellerInfo: [
      { key: "상호", value: "당도" },
      { key: "주소", value: "서울시 마포구 마포대로 93번길 11 (망원동, 송학빌라) 1층" },
      { key: "사업자등록번호", value: "000-01-012345" },
      { key: "통신판매업번호", value: "2022-OOOO-1023" },
      { key: "전화번호", value: "0507-1234-1234" },
    ],
    foodInfo: [
      { key: "식품의 유형", value: "빵류" },
      { key: "생산자", value: "주식회사 스위트블러썸" },
      { key: "품질 유지기한", value: "수령일을 기준으로 유통기한이 3일" },
      { key: "포장단위별 용량", value: "바닐라크림치즈 SS:240g / M:512g / L:695g" },
      {
        key: "원산지 표기",
        value:
          "전란액/국산, 박력분(미국산/밀), 설탕, 크림치즈[스페인산/버터밀크, 우유, 유크림, 유고형분(유당), 정제소금,카라기난)],식물성크림 [(정제수, D-소르비톨액, 팜핵경화유(말레이시아산),쇼트닝(대두경화유(대두),아르헨티나산), 유화제], 가공버터(무수유지방,팜유,유크림), 천연버터, 우유, 난백, 마스카포네크림치즈, 물엿,유화제, 정제수, 합성팽창제 [산성피로인산Na,탄산수소Na,전분(수입산),제일인산칼슘,젖산칼슘],정제소금, 젤라틴(돼지),쇼트닝,CMC,혼합제제식품첨가물 [희석제(고과당콘시럽,설탕,글리세린,정제수,히드록시프로필전분),착색료 식용색소(황색제4호,황색제5호,적색제40호, 청색제1호,청색제2호),증점제(카라기난검, 잔탄검),산도조절제(구연산),보존료(소브산칼륨,안식향산나트륨)",
      },
    ],
  },
  storeImages: [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/4a/df/79/4adf79a54b55ff828832636d7e3b62c9.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/40/ea/14/40ea142c8d20c4b9116414cbc4cbe4fb.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/78/99/11/789911964fbd4a8ae34ed87b469cdf78.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/d2/ea/9c/d2ea9c83fb32c572f3a6d24a8032f8f5.jpg",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/e9/69/b3/e969b3f2d589f8b0844a339ebf9bfd20.jpg",
    },
  ],
};
