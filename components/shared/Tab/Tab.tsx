import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useFilterStore from "@/store/filter";
import * as S from "./Tab.styled";

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
  target: TTarget;
  className?: string;
}

const generatePath = (type: TTarget, asPath: string): [string, string] => {
  let rootPath;
  let leafPath = "";
  switch (type) {
    case "storeTab":
    case "resultTab":
    case "homeTab": {
      const splittedArr = asPath.split("/");
      leafPath = splittedArr[splittedArr.length - 1];
      rootPath = splittedArr.slice(0, -1).join("/");
      return [rootPath, leafPath];
    }
    case "storeMenuTab":
      if (asPath.indexOf("#") !== -1) {
        rootPath = asPath.split("#");
      }
      return [rootPath ? rootPath[0] : asPath, leafPath];
    case "filterTab":
      return [asPath, leafPath];
    default:
      return ["/", leafPath];
  }
};

function Tab({ menuList, target, className }: IProp) {
  const [currentMenu, setCurrentMenu] = useState("");
  const { changeCurrentFilterTab, currentFilterTab } = useFilterStore();
  const { asPath } = useRouter();

  const [rootPath, leafPath] = generatePath(target, asPath);

  useEffect(() => {
    if (target === "storeMenuTab") return;
    const selectedMenu = menuList.find(menu => `${menu.link}` === `/${leafPath}`);
    if (selectedMenu) {
      setCurrentMenu(selectedMenu.label);
    } else {
      setCurrentMenu(menuList[0].label);
    }
  }, [leafPath, menuList, asPath, target]);

  const handleClick = (menu: string) => {
    setCurrentMenu(menu);
  };

  const handleFilterTab = (menu: TFilterTab) => {
    changeCurrentFilterTab(menu);
    setCurrentMenu(menu);
  };

  return (
    <S.TabBox role="tablist" className={className} size={menuList.length}>
      {menuList.map(menu => (
        <S.TabItem
          key={menu.label}
          role="presentation"
          className={menu.label === currentMenu ? "isSelected" : ""}
          type={target === "filterTab" ? "button" : "link"}
        >
          {target === "filterTab" ? (
            <button onClick={() => handleFilterTab(menu.label as TFilterTab)}>{menu.label}</button>
          ) : (
            <Link
              role="tab"
              tabIndex={0}
              aria-selected={currentMenu === menu.label}
              href={`${rootPath}${menu.link}`}
              onClick={() => handleClick(menu.label)}
            >
              {menu.label}
            </Link>
          )}
        </S.TabItem>
      ))}
    </S.TabBox>
  );
}

export default Tab;
