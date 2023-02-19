import Link from "next/link";
import { navTab } from "@/constants/navigations";
import Home from "../../../assets/icons/home.svg";
import Search from "../../../assets/icons/search.svg";
import Bookmark from "../../../assets/icons/bookmark.svg";
import Mypage from "../../../assets/icons/mypage.svg";
import * as S from "./GNB.styled";

interface INavIcons {
  [key: string]: JSX.Element;
}

const navIcons: INavIcons = {
  홈: <Home fill="#D7D7D7" />,
  검색: <Search fill="#D7D7D7" />,
  북마크: <Bookmark fill="#D7D7D7" />,
  마이페이지: <Mypage fill="#D7D7D7" />,
};

export default function GNB() {
  return (
    <S.Container>
      {navTab.map(nav => {
        const { label, link } = nav;
        return (
          <Link key={label} href={link}>
            {navIcons[label]}
          </Link>
        );
      })}
    </S.Container>
  );
}
