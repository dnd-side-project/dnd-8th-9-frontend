import { ITodo } from "@/api/type";
import { rest } from "msw";

export const storeHandler = [
  rest.get<ITodo[]>("https://jsonplaceholder.typicode.com/todo", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "빨래하기",
          completed: true,
        },
        {
          userId: 1,
          id: 2,
          title: "설거지하기",
          completed: false,
        },
        {
          userId: 2,
          id: 3,
          title: "데니 산책시키기",
          completed: true,
        },
      ]),
    );
  }),
];
