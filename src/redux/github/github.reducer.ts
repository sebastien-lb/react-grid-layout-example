import { normalize } from "normalizr";

import { FETCH_PR_SUCCESS } from "./github.constants";
import { prListSchema } from "./github.schema";

import { GithubAction, GithubState } from "./github.types";

export const reducer = (state: GithubState = {}, action: GithubAction) => {
  switch (action.type) {
    case FETCH_PR_SUCCESS:
      const normalizedPrData = normalize(action.payload.data, prListSchema);
      return {
        ...state,
        entities: {
          ...state.entities,
          pr: normalizedPrData.entities.pr,
          user: normalizedPrData.entities.user
        },
        prList: normalizedPrData.result
      };
    default:
      return state;
  }
};
