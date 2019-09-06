import { fetchPr, fetchPrSuccess } from "./github.actions";

export interface GithubState {
  entities?: any;
  prList?: number[];
}

export interface GithubResponseData {}

export type GithubAction =
  | ReturnType<typeof fetchPr>
  | ReturnType<typeof fetchPrSuccess>;
