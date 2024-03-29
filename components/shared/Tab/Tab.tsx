import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
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

const generatePath = (type: TTarget, asPath: string, pathname: string): [string, string] => {
  let rootPath;
  let leafPath = "";
  switch (type) {
    case "storeTab":
    case "resultTab":
    case "homeTab": {
      const splittedArr = pathname.split("/");
      leafPath = splittedArr[splittedArr.length - 1];
      rootPath = splittedArr.slice(0, -1).join("/");
      return [rootPath, leafPath];
    }
    case "storeMenuTab":
      if (asPath.indexOf("#") !== -1) {
        rootPath = asPath.split("#");
      }
      return [rootPath ? rootPath[0] : asPath, rootPath ? rootPath[1] : ""];
    case "filterTab":
      return [asPath, leafPath];
    default:
      return ["/", leafPath];
  }
};

function Tab({ menuList, target, className }: IProp) {
  const { asPath } = useRouter();
  const pathname = usePathname();

  const [currentMenu, setCurrentMenu] = useState<string>("");
  const { changeCurrentFilterTab, currentFilterTab } = useFilterStore();

  const [rootPath, leafPath] = generatePath(target, asPath, pathname as string);

  useEffect(() => {
    if (target === "filterTab") {
      setCurrentMenu(currentFilterTab);
      return;
    }
    const selectedMenu = menuList.find(menu =>
      target === "storeMenuTab"
        ? `${menu.link}` === `${leafPath}`
        : `${menu.link}` === `/${leafPath}`,
    );
    if (selectedMenu) {
      setCurrentMenu(selectedMenu.label);
    } else {
      setCurrentMenu(menuList[0].label);
    }
  }, [leafPath, menuList, asPath, target, currentFilterTab]);

  useEffect(() => {
    const scrollPosition = localStorage.getItem("tab_scroll_position");
    if (scrollPosition) {
      window.scrollTo(0, Number(scrollPosition));
      localStorage.removeItem("tab_scroll_position");
    }
  }, []);

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
              onClick={() => localStorage.setItem("tab_scroll_position", window.scrollY.toString())}
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
