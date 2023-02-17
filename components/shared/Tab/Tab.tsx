import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SerializedStyles, Theme } from "@emotion/react";
import { tab, tabType } from "./tab.styled";

export interface ITabItem {
  label: string;
  link: string;
}

export interface IProp {
  menuList: ITabItem[];
  type: "swipeable" | "fixed";
  cssProp?: SerializedStyles | (({ colors, fontSizes }: Theme) => SerializedStyles);
}

function Tab({ menuList, type, cssProp }: IProp) {
  const [currentMenu, setCurrentMenu] = useState(menuList[0].label);
  const { asPath } = useRouter();

  const handleClick = (menu: string) => {
    setCurrentMenu(menu);
  };

  return (
    <ul role="tablist" css={[tab, tabType[type], cssProp]}>
      {menuList.map(menu => (
        <li
          key={menu.label}
          role="presentation"
          className={menu.label === currentMenu ? "isSelected" : ""}
        >
          <Link
            role="tab"
            tabIndex={0}
            aria-selected={currentMenu === menu.label}
            href={`${asPath}${menu.link}`}
            onClick={() => handleClick(menu.label)}
          >
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Tab;
