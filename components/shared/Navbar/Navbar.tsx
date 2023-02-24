import React from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { NAVIGATION_HEADER } from "@/constants/navigations";
import Icon from "../Icon/Icon";
import * as S from "./Navbar.styled";

function Navbar() {
  // NOTE: iconColor, Title, backIcon, moreIcon

  // TODO: 뒤로가기 기능 추가 / 버튼화
  // TODO: 북마크 클릭시 색깔 변화 / 버튼화 / 이벤트 추가 (콘솔)
  // TODO: 공유 클릭 버튼화 / 이벤트 추가 (콘솔)
  // TODO: 스크롤 이벤트 추가 (텍스트 없이 아이콘 투명 -> 하얀색 배경 + 텍스트 & 아이콘)

  const {
    back: previous,
    pathname,
    query: { storeId },
  } = useRouter();
  const { colors } = useTheme();

  const {
    title,
    back = true,
    icon = true,
    bgColor = colors.white[100],
    scrollBgColor = "",
    iconColor = colors.gray[300],
  } = NAVIGATION_HEADER[pathname];

  const previousPage = () => {
    previous();
  };

  return (
    <S.NavbarWrap bgColor={bgColor}>
      <button
        aria-label="previous page"
        type="button"
        className="previousButton"
        onClick={previousPage}
      >
        {back && <Icon name="arrowLeft" size="l" color={iconColor} />}
      </button>
      <h1>{title === "업체명" && storeId ? storeId : title}</h1>
      <div className="etcButtons">
        {icon && (
          <>
            <button aria-label="bookmark" type="button">
              <Icon name="saveBookmark" size="l" color={iconColor} />
            </button>
            <button aria-label="share" type="button">
              <Icon name="share" size="l" color={iconColor} fill={iconColor} />
            </button>
          </>
        )}
      </div>
    </S.NavbarWrap>
  );
}

export default Navbar;
