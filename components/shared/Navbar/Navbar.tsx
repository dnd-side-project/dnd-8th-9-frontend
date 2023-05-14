import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { INav } from "@/constants/navigation";
import { useGetStore } from "@/hooks/queries/store";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import * as S from "./Navbar.styled";
import Bookmark from "../Bookmark/Bookmark";

function Navbar(props?: INav) {
  const { colors } = useTheme();
  const {
    back: previous,
    query: { storeId },
    push,
  } = useRouter();

  const { data: storeDetailsData } = useGetStore(Number(storeId));

  const previousPage = () => {
    previous();
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
    <S.NavWrap bgColor={props?.bgColor}>
      <S.NavLeft>
        {props?.previous && (
          <button
            aria-label="previous page"
            type="button"
            className="previousButton"
            onClick={previousPage}
          >
            <Icon name="arrowLeft" size="l" color={props?.color || colors.grey[700]} />
          </button>
        )}
        {props?.home && (
          <button aria-label="home" type="button" onClick={home}>
            <Icon name="homeNav" size="l" color={props?.color || colors.grey[700]} />
          </button>
        )}
      </S.NavLeft>
      <S.NavTitle>
        <Text weight={600} size={16}>
          {props?.text === "업체이름" && storeId ? storeDetailsData?.data.name : props?.text}
        </Text>
      </S.NavTitle>
      <S.NavRight>
        {props?.bookmark && <Bookmark type="store" location="nav" />}
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
