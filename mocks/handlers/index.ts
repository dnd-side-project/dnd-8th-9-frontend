import { menuHandler } from "./menu";
import { storeHandler } from "./store";

export const handlers = [...menuHandler, ...storeHandler];
