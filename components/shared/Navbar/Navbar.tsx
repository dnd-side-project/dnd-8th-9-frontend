import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { INav } from "@/constants/navigation";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./Navbar.styled";

function Navbar(props?: INav) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { colors } = useTheme();
  const {
    back: previous,
    query: { storeId },
    push,
  } = useRouter();

  const previousPage = () => {
    previous();
  };

  const bookmark = () => {
    setIsBookmarked(prev => !prev);
    console.log("bookmarked");
  };

  const share = () => {
    console.log("share");
  };

  const search = () => {
    push("/search");
  };

  const home = () => {
    push("/home");
  };

  return (
    <S.NavWrap>
      <S.NavLeft>
        {props?.previous && (
          <button
            aria-label="previous page"
            type="button"
            className="previousButton"
            onClick={previousPage}
          >
            <Icon name="arrowLeft" size="l" color={colors.grey[700]} />
          </button>
        )}
        {props?.home && (
          <button aria-label="home" type="button" onClick={home}>
            <Icon name="homeNav" size="l" color={colors.grey[700]} />
          </button>
        )}
      </S.NavLeft>
      <S.NavTitle>
        <Text weight={600} size={16} color={colors.grey[900]}>
          {props?.text === "업체이름" && storeId ? storeId : props?.text}
        </Text>
      </S.NavTitle>
      <S.NavRight>
        {props?.bookmark && (
          <button aria-label="bookmark" type="button" onClick={bookmark}>
            <Icon
              name="saveBookmark"
              size="l"
              color={isBookmarked ? colors.pink[700] : colors.grey[700]}
              fill={isBookmarked ? colors.pink[700] : "transparent"}
            />
          </button>
        )}
        {props?.share && (
          <button aria-label="share" type="button" onClick={share}>
            <Icon name="share" size="l" color={colors.grey[700]} />
          </button>
        )}
        {props?.search && (
          <button aria-label="search" type="button" onClick={search}>
            <Icon name="search" size="l" color={colors.grey[700]} />
          </button>
        )}
      </S.NavRight>
    </S.NavWrap>
  );
}

export default Navbar;
