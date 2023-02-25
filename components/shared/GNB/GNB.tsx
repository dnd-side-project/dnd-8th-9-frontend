import { useState } from "react";
import Link from "next/link";
import { gnbTab } from "@/constants/tabs";
import {
  BookmarkSelected,
  HomeSelected,
  Profile,
  ProfileSelected,
  Bookmark,
  Home,
} from "@/assets/icons";
import * as S from "./GNB.styled";

interface INavIcons {
  [key: string]: JSX.Element;
}

const navIcons: INavIcons = {
  home: <Home />,
  bookmark: <Bookmark />,
  profile: <Profile />,
};

const selectedNavIcons: INavIcons = {
  home: <HomeSelected />,
  bookmark: <BookmarkSelected />,
  profile: <ProfileSelected />,
};

export default function GNB() {
  const [selectedGNB, setSelectedGNB] = useState("");

  const handleClick = (label: string) => {
    setSelectedGNB(label);
  };

  return (
    <S.Container length={gnbTab.length}>
      {gnbTab.map(({ label, link }) => {
        return (
          <Link key={label} href={link} onClick={() => handleClick(label)}>
            {selectedGNB === label ? selectedNavIcons[label] : navIcons[label]}
          </Link>
        );
      })}
    </S.Container>
  );
}
