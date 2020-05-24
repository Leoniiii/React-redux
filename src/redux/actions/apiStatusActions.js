import * as actionTypes from "./actionTypes";
import { types } from "@babel/core";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}
