import { rest } from "msw";
import { randomMenus } from "@/mocks/mockData/randomMenuList";
import { API_URI } from "@/constants/api";
import { IMenuDetails, IMenuListItem, IReviewListItem } from "@/types/api";
import { menu } from "../mockData/menu";
import { randomReviews } from "../mockData/randomReviewList";

export const BASE_URL = "http://43.201.188.200:8080";

export interface IMockResponse<T> {
  data: T;
}

export function generateMockResponse<T>(data: T): IMockResponse<T> {
  return { data };
}

export const menuHandler = [
  // 랜덤 메뉴 리스트 조회
  rest.get<IMockResponse<IMenuListItem[]>>(
    `${BASE_URL}${API_URI.menu.get.MENU_LIST}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(generateMockResponse(randomMenus)));
    },
  ),

  // 메뉴 상세 조회
  rest.get<IMenuDetails>(`${BASE_URL}${API_URI.menu.get.MENU_LIST}/:menuId`, (req, res, ctx) => {
    const { menuId } = req.params;

    if (!menuId) res(ctx.status(400), ctx.json({ message: "메뉴 아이디가 없습니다." }));

    if (Number(menuId) !== 1)
      res(ctx.status(404), ctx.json({ message: "해당 메뉴가 존재하지 않습니다" }));
    return res(ctx.status(200), ctx.json(generateMockResponse(menu)));
  }),

  // 메뉴 리뷰 조회
  rest.get<IReviewListItem[]>(
    `${BASE_URL}${API_URI.menu.get.MENU_LIST}/:menuId/reviews`,
    (req, res, ctx) => {
      const { menuId } = req.params;

      if (!menuId) res(ctx.status(400), ctx.json({ message: "메뉴 아이디가 없습니다." }));

      if (Number(menuId) !== 1)
        res(ctx.status(404), ctx.json({ message: "해당 메뉴가 존재하지 않습니다" }));

      return res(ctx.status(200), ctx.json(generateMockResponse(randomReviews)));
    },
  ),
];
