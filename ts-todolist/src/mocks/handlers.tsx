
import { setupWorker } from "msw";
import * as postApi from "./api";

const handlers = [...Object.values(postApi)];

export const worker = setupWorker(...handlers);
