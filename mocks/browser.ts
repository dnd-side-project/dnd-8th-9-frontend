import { setupWorker, SetupWorkerApi } from "msw";
import { handlers } from "@/mocks/handlers";

export const worker: SetupWorkerApi = setupWorker(...handlers);
