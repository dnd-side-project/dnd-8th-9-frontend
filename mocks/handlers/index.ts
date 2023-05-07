import { menuHandler } from "./menu";
import { reviewHandler } from "./review";
import { storeHandler } from "./store";

export const handlers = [...menuHandler, ...storeHandler, ...reviewHandler];
