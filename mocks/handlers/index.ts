import { ITodo } from "@/api/type";
import { rest } from "msw";

export const handlers = [
  rest.get<ITodo[]>("https://jsonplaceholder.typicode.com/todo", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, todo: "설거지", isCompleted: true },
        { id: 2, todo: "청소", isCompleted: false },
        { id: 3, todo: "산책", isCompleted: true },
      ]),
    );
  }),
];
