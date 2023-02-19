import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SerializedStyles, Theme } from "@emotion/react";
import { tab, tabType } from "./tab.styled";

export interface ITabItem {
  label: string;
  link: string;
}

export type TTarget = "homeTab" | "resultTab" | "categoryTab" | "storeMenuTab" | "storeTab";

export interface IProp {
  menuList: ITabItem[];
  type: "swipeable" | "fixed";
  target: TTarget;
  cssProp?: SerializedStyles | (({ colors, fontSizes }: Theme) => SerializedStyles);
}

const generatePath = (type: TTarget, asPath: string): string => {
  let path;
  switch (type) {
    case "storeTab":
      path = asPath.split("/").slice(0, -1).join("/");
      return path;
      break;
    case "storeMenuTab":
      if (asPath.indexOf("#") !== -1) {
        path = asPath.split("#");
      }
      return path ? path[0] : "/";
      break;
    default:
      return "/";
      break;
  }
};

function Tab({ menuList, type, cssProp, target }: IProp) {
  const [currentMenu, setCurrentMenu] = useState(menuList[0].label);
  const { asPath } = useRouter();

  const path = generatePath(target, asPath);

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
            href={`${path}${menu.link}`}
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
