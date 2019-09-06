import { denormalize } from "normalizr";

import { prListSchema } from "./github.schema";

import { State } from "../types";

export const getPrList = (state: State) => {
  if (!(state && state.githubState && state.githubState.prList)) {
    return [];
  }
  return state.githubState.prList;
};
