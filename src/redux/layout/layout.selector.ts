import { State } from "../types";

export const getLayoutSave = (state: State) => {
  if (!(state && state.layoutState && state.layoutState.layoutSave)) {
    return [];
  }
  return state.layoutState.layoutSave;
};

export const getLayoutAutoSave = (state: State) => {
  if (!(state && state.layoutState && state.layoutState.layoutAutoSave)) {
    return [];
  }
  return state.layoutState.layoutAutoSave;
};
