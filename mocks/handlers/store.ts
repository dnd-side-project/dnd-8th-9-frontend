import { rest } from "msw";
import { BASE_URL, REQUEST_URL } from "@/api/requestUrl";
import { IStoreItem } from "@/api/types/storeList";
import { store } from "../mockData/store";
import { storeList } from "../mockData/storeList";

export const storeHandler = [
  rest.get<IStoreItem[]>(`${BASE_URL}${REQUEST_URL.STORE_LIST}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(storeList));
  }),

  rest.get<IStoreItem>(`${BASE_URL}${REQUEST_URL.STORE_LIST}/:storeId`, (req, res, ctx) => {
    const { storeId } = req.params;

    if (!storeId) res(ctx.status(400), ctx.json({ message: "스토어 아이디가 없습니다." }));

    if (Number(storeId) !== 1)
      res(ctx.status(404), ctx.json({ message: "해당 스토어가 존재하지 않습니다" }));

    return res(ctx.status(200), ctx.json(store));
  }),

  // NOTE: 응답값 & 에러코드 변경가능
  rest.post(`${BASE_URL}${REQUEST_URL.STORE_LIST}`, (req, res, ctx) => {
    const newStore = req.body;

    if (!newStore) {
      return res(
        ctx.status(400),
        ctx.json({ message: "등록하려는 스토어에 대한 정보가 없습니다." }),
      );
    }

    return res(ctx.status(200));
  }),

  // NOTE: 응답값 & 에러코드 변경가능
  rest.put(`${BASE_URL}${REQUEST_URL.STORE_LIST}/:storeId`, (req, res, ctx) => {
    const { storeId } = req.params;
    const editedStore = req.body;

    if (!storeId) {
      return res(ctx.status(400), ctx.json({ message: "store id가 없음" }));
    }

    if (Number(storeId) !== 1) {
      return res(ctx.status(404), ctx.json({ message: "해당 store가 존재하지 않습니다" }));
    }

    return res(ctx.status(200), ctx.json(editedStore));
  }),

  // NOTE: 응답값 & 에러코드 변경가능
  rest.delete(`${BASE_URL}${REQUEST_URL.STORE_LIST}/:storeId`, (req, res, ctx) => {
    const { storeId } = req.params;

    if (!storeId) {
      return res(ctx.status(400), ctx.json({ message: "store id가 없음" }));
    }

    if (Number(storeId) !== 1) {
      return res(ctx.status(404), ctx.json({ message: "해당 store가 존재하지 않습니다" }));
    }

    return res(ctx.status(200), ctx.json({}));
  }),
];
