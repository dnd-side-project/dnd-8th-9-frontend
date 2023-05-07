import { rest } from "msw";
import { API_URI } from "@/constants/api";
import { IStoreDetails, IStoreListItem } from "@/types/api";
import { store } from "../mockData/store";
import { storeList } from "../mockData/storeList";
import { BASE_URL, IMockResponse, generateMockResponse } from "./menu";
import { IMenuListItemSimple, menuList } from "../mockData/menuList";
import { reviews } from "../mockData/review";
import { IReviewListItemSpecific } from "../mockData/randomReviewList";

export const storeHandler = [
  // 스토어 리스트 조회
  rest.get<IMockResponse<IStoreListItem[]>>(
    `${BASE_URL}${API_URI.store.get.STORE_LIST}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(generateMockResponse(storeList)));
    },
  ),

  // 스토어 상세 조회
  rest.get<IMockResponse<IStoreDetails>>(
    `${BASE_URL}${API_URI.store.get.STORE_LIST}/:storeId`,
    (req, res, ctx) => {
      const { storeId } = req.params;

      if (!storeId) res(ctx.status(400), ctx.json({ message: "스토어 아이디가 없습니다." }));

      if (Number(storeId) !== 1)
        res(ctx.status(404), ctx.json({ message: "해당 스토어가 존재하지 않습니다" }));

      return res(ctx.status(200), ctx.json(generateMockResponse(store)));
    },
  ),

  // 스토어 메뉴 리스트 조회
  rest.get<IMockResponse<IMenuListItemSimple[]>>(
    `${BASE_URL}${API_URI.store.get.STORE_LIST}/:storeId/menus`,
    (req, res, ctx) => {
      const { storeId } = req.params;

      if (!storeId) res(ctx.status(400), ctx.json({ message: "스토어 아이디가 없습니다." }));

      if (Number(storeId) !== 1)
        res(ctx.status(404), ctx.json({ message: "해당 스토어가 존재하지 않습니다" }));

      return res(ctx.status(200), ctx.json(generateMockResponse(menuList)));
    },
  ),

  // 스토어 리뷰 리스트 조회
  rest.get<IMockResponse<IReviewListItemSpecific[]>>(
    `${BASE_URL}${API_URI.store.get.STORE_LIST}/:storeId/reviews`,
    (req, res, ctx) => {
      const { storeId } = req.params;

      if (!storeId) res(ctx.status(400), ctx.json({ message: "스토어 아이디가 없습니다." }));

      if (Number(storeId) !== 1)
        res(ctx.status(404), ctx.json({ message: "해당 스토어가 존재하지 않습니다" }));

      return res(ctx.status(200), ctx.json(generateMockResponse(reviews)));
    },
  ),

  // NOTE: 응답값 & 에러코드 변경가능
  // rest.post(`${BASE_URL}${REQUEST_URL.STORE_LIST}`, (req, res, ctx) => {
  //   const newStore = req.body;

  //   if (!newStore) {
  //     return res(
  //       ctx.status(400),
  //       ctx.json({ message: "등록하려는 스토어에 대한 정보가 없습니다." }),
  //     );
  //   }

  //   return res(ctx.status(200));
  // }),

  // NOTE: 응답값 & 에러코드 변경가능
  // rest.put(`${BASE_URL}${REQUEST_URL.STORE_LIST}/:storeId`, (req, res, ctx) => {
  //   const { storeId } = req.params;
  //   const editedStore = req.body;

  //   if (!storeId) {
  //     return res(ctx.status(400), ctx.json({ message: "store id가 없음" }));
  //   }

  //   if (Number(storeId) !== 1) {
  //     return res(ctx.status(404), ctx.json({ message: "해당 store가 존재하지 않습니다" }));
  //   }

  //   return res(ctx.status(200), ctx.json(editedStore));
  // }),

  // NOTE: 응답값 & 에러코드 변경가능
  // rest.delete(`${BASE_URL}${REQUEST_URL.STORE_LIST}/:storeId`, (req, res, ctx) => {
  //   const { storeId } = req.params;

  //   if (!storeId) {
  //     return res(ctx.status(400), ctx.json({ message: "store id가 없음" }));
  //   }

  //   if (Number(storeId) !== 1) {
  //     return res(ctx.status(404), ctx.json({ message: "해당 store가 존재하지 않습니다" }));
  //   }

  //   return res(ctx.status(200), ctx.json({}));
  // }),
];
