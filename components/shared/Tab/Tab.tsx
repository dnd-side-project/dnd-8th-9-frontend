import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SerializedStyles, Theme } from "@emotion/react";
import useFilterStore from "@/store/filter";
import { tab, tabType } from "./Tab.styled";

type TFilterTab = "카테고리" | "가격" | "주문플랫폼" | "수령방법";
export interface ITabItem {
  label: TFilterTab | string;
  link: string;
}

export type TTarget =
  | "homeTab"
  | "resultTab"
  | "categoryTab"
  | "storeMenuTab"
  | "storeTab"
  | "filterTab";

export interface IProp {
  menuList: ITabItem[];
  type: "swipeable" | "fixed";
  target: TTarget;
  cssProp?: SerializedStyles | (({ colors, fontSizes }: Theme) => SerializedStyles);
  className?: string;
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
      return path ? path[0] : asPath;
      break;
    case "filterTab":
      return asPath;
      break;
    case "resultTab":
      path = asPath.split("/").slice(0, -1).join("/");
      return path;
      break;
    default:
      return "/";
      break;
  }
};

function Tab({ menuList, type, cssProp, target, className }: IProp) {
  const [currentMenu, setCurrentMenu] = useState(menuList[0].label);
  const { changeCurrentFilterTab, currentFilterTab } = useFilterStore();
  const { asPath } = useRouter();

  const path = generatePath(target, asPath);

  const handleClick = (menu: string) => {
    setCurrentMenu(menu);
  };

  const handleFilterTab = (menu: TFilterTab) => {
    changeCurrentFilterTab(menu);
    setCurrentMenu(menu);
  };

  return (
    <ul role="tablist" css={[tab, tabType[type], cssProp]} className={className}>
      {menuList.map(menu =>
        target === "filterTab" ? (
          <li
            key={menu.label}
            role="presentation"
            className={menu.label === currentFilterTab ? "isSelected" : ""}
          >
            <button onClick={() => handleFilterTab(menu.label as TFilterTab)}>{menu.label}</button>
          </li>
        ) : (
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
        ),
      )}
    </ul>
  );
}

export default Tab;
