import { GithubState } from "./github/github.types";
import { LayoutState } from "./layout/layout.types";

export interface State {
  githubState?: GithubState;
  layoutState?: LayoutState;
}
