import { ERROR } from "./types";

export const errorAction = (payload) => ({
  type: ERROR,
  payload,
});
