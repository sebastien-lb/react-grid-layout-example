import { FETCH_PR, FETCH_PR_SUCCESS } from "./github.constants";

import { GithubResponseData } from "./github.types";

export const fetchPr = () => ({
  type: FETCH_PR as typeof FETCH_PR
});

export const fetchPrSuccess = (data: GithubResponseData) => ({
  type: FETCH_PR_SUCCESS as typeof FETCH_PR_SUCCESS,
  payload: { data }
});
